import React from "react";
import Link from "next/link";
import { Container } from "./container";
import { ThemeContext } from "./theme";
import { Icon } from "./icon";
import { useRouter } from "next/router";
import { Popover, Transition, Switch } from "@headlessui/react";
import { ChevronDownIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import { Fragment, useState, useEffect } from "react";
import localStorage from "localStorage";

function isDarkMode() {
  if (localStorage.hasOwnProperty("counter")) {
    return Number(localStorage.getItem("counter")) % 2 == 0 ? true : false;
  } else {
    localStorage.setItem("counter", 0);
    return false;
  }
}

function switchMode() {
  let counter = Number(localStorage.getItem("counter"));
  localStorage.setItem("counter", counter + 1);
}

export const Header = ({ data }) => {
  const [enabled, setEnabled] = useState(isDarkMode());
  const theme = React.useContext(ThemeContext);

  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-700 dark:to-gray-800",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
      rose: "text-rose-400 from-rose-400 to-rose-800",
      wgray: "text-rose-400 from-rose-400 to-rose-800",
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 dark:border-blue-700",
    teal: "border-b-3 border-teal-200 dark:border-teal-700",
    green: "border-b-3 border-green-200 dark:border-green-700",
    red: "border-b-3 border-red-300 dark:border-red-700",
    pink: "border-b-3 border-pink-200 dark:border-pink-700",
    purple: "border-b-3 border-purple-200 dark:border-purple-700",
    orange: "border-b-3 border-orange-200 dark:border-orange-700",
    yellow: "border-b-3 border-yellow-300 dark:border-yellow-600",
    wgray: "border-b-3 border-wgray-300 dark:border-wgray-600",
  };

  const router = useRouter();

  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      return root.classList.add("dark");
    }
    root.classList.remove("dark");
  }, [enabled]);

  return (
    <div>
      <Container className={`relative z-10 py-0 max-w-8xl dark:bg-wgray-800`}>
        <div className="flex items-center justify-between">
          <h4 className="my-4 text-lg font-bold tracking-tight select-none transition duration-150 ease-out transform">
            <Link href="/" passHref>
              <a className="flex items-center">
                <img
                  className="h-8 w-15 sm:h-10 transform scale-150 filter dark:invert"
                  src={`/assets/logo.png`}
                />
                <img
                  className="h-10 p-1 w-15 sm:h10 transform scale-150 translate-x-5 -translate-y-1"
                  src={`/assets/logo_text.png`}
                />
              </a>
            </Link>
          </h4>
          <div className="justify-between hidden space-x-2 md:flex">
            <Link href="/">
            <a
              className={`text-opacity-90 text-wgray-600 group bg-white hover:bg-${theme["color"]}-600 hover:text-${theme["color"]}-50 px-3 py-2 rounded-md items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              Home
            </a>
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                text-${theme["color"]}-600 group hover:bg-${
                      theme["color"]
                    }-600 hover:text-${theme["color"]}-50 focus:bg-${
                      open && theme["color"]
                    }-700 focus:text-${
                      open && theme["color"]
                    }-50 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span>Posts</span>
                    <ChevronDownIcon
                      className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-${
                    theme["color"]
                  }-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-20 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative bg-white grid gap-8 p-7 lg:grid-cols-2">
                          {data.posts.map((item) => (
                            <Link href={item.href} key={item.label}>
                              <a className="flex items-center p-2 -m-3 rounded-lg transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div>
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.label}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="p-4 bg-gray-50">
                          <Link href="/posts">
                            <a
                              className="px-2 py-2 flow-root transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <span className="flex items-center">
                                <span className="text-sm font-medium text-gray-900">
                                  All Posts
                                </span>
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                text-${theme["color"]}-600 group hover:bg-${
                      theme["color"]
                    }-600 hover:text-${theme["color"]}-50 focus:bg-${
                      open && theme["color"]
                    }-700 focus:text-${
                      open && theme["color"]
                    }-50 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span>About</span>
                    <ChevronDownIcon
                      className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-${
                    theme["color"]
                  }-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-20 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative bg-white grid gap-8 p-7 lg:grid-cols-2">
                          {data.nav.map((item) => (
                            <Link href={item.href} key={item.label}>
                              <a className="flex items-center p-2 -m-3 rounded-lg transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div>
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.label}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="p-4 bg-gray-50">
                          <a href={data.email} 
                            className="px-2 py-2 flow-root transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            target="_blank">
                            Email
                          </a>
                          
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          <div>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-wgray-600" : "bg-wgray-200"
              } relative items-center h-6 rounded-full w-11 hidden md:inline-flex`}
            >
              <span
                className={`${
                  enabled
                    ? "translate-x-6 bg-wgray-50"
                    : "translate-x-1 bg-wgray-500 skew-12 rotate-12"
                } inline-block w-4 h-4 transform rounded-full`}
              />
            </Switch>

            {/* Mobile Menu */}
            <Popover className="md:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                text-${theme["color"]}-600 group hover:bg-${
                      theme["color"]
                    }-600 hover:text-${theme["color"]}-50 focus:bg-${
                      open && theme["color"]
                    }-700 focus:text-${
                      open && theme["color"]
                    }-50 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span>
                      <MenuAlt3Icon className={`h-6 w-6`} />
                    </span>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      focus
                      className="absolute inset-x-0 top-0 z-20 w-screen px-4 mt-3 md:hidden "
                    >
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative bg-white grid gap-8 p-7 lg:grid-cols-2">
                          <div className="flex flex-row justify-between">
                            <div className="flex flex-row">
                              <img
                                className="h-10 w-15 filter dark:invert"
                                src={`/assets/logo.png`}
                              />
                              <img
                                className="h-10 p-1 w-15 sm:h10 transform scale-150 translate-x-5 -translate-y-2"
                                src={`/assets/logo_text.png`}
                              />
                            </div>

                            <div className="-mr-2">
                              <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-wgray-400 dark:text-cgray-50 hover:text-wgray-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200">
                                <span className="sr-only">Close menu</span>
                                <XIcon className="w-6 h-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                       <nav className="grid gap-y-4">
                          {data.posts.map((item) => (
                            <Link href={item.href} key={item.label}>
                                  <a className="text-sm font-medium text-gray-900">
                                    {item.label}
                                  </a>
                            </Link>
                          ))}
                       </nav>
                        </div>
                        <div className="p-4 bg-gray-50">
                          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                           <Link href="/posts">
                            <a>
                              <span className="flex items-center">
                                <span className="text-sm font-medium text-gray-900">
                                  All Posts
                                </span>
                              </span>
                            </a>
                           </Link>
                          {data.nav.map((item) => (
                            <Link href={item.href} key={item.label}>
                                  <a className="text-sm font-medium text-gray-900">
                                    {item.label}
                                  </a>
                            </Link>
                          ))}
 
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>

          {/* <ul className="flex gap-6 sm:gap-8 lg:gap-10"> */}
          {/*   {data.nav && */}
          {/*     data.nav.map((item, i) => { */}
          {/*       const route = */}
          {/*         router.asPath === "/" ? "home" : router.asPath || "home"; */}
          {/*       const href = item.href || "home"; */}
          {/*       const activeItem = route.includes(href); */}
          {/*       return ( */}
          {/*         <li */}
          {/*           key={`${item.label}-${i}`} */}
          {/*           className={activeItem ? activeItemClasses[theme.color] : ""} */}
          {/*         > */}
          {/*           <Link href={`/${item.href || "home"}`}> */}
          {/*             <a className="inline-block py-8 text-base tracking-wide select-none font-regular transition duration-150 ease-out opacity-70 hover:opacity-100"> */}
          {/*               {item.label} */}
          {/*             </a> */}
          {/*           </Link> */}
          {/*         </li> */}
          {/*       ); */}
          {/*     })} */}
          {/* </ul> */}
        </div>
        {/* <div */}
        {/*   className={`absolute h-1 bg-gradient-to-r from-transparent ${ */}
        {/*     data.color === "primary" ? `via-white` : `via-black dark:via-white` */}
        {/*   } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`} */}
        {/* ></div> */}
      </Container>
    </div>
  );
};
