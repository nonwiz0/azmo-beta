import { getStaticPropsForTina } from "tinacms";
import { Container } from "../components/container";
import { Section } from "../components/section";
import { Posts } from "../components/posts";
import { layoutQueryFragment } from "../components/layout";
import type { PostsConnection } from "../.tina/__generated__/types";
import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { type } = useRouter().query;
  const posts = props.data.getPostsList.edges;
  let filteredPosts = posts;
  const allCategories = posts.map((item) => item.node.values.type);
  console.log(allCategories);

/*   if (allCategories.indexOf(type) > -1) { */
/*     filteredPosts = posts.filter((item) => item.node.values.type === type); */
/*   } */

  const [allPosts, setAllPosts] = useState(filteredPosts);
  console.log(filteredPosts);
  const subcategories = [
    { name: "asdf" }
  ]
  /* const subcategories = [ */
  /*   { name: "All Category" }, */
  /*   ...filteredPosts.map((item) => ({ */
  /*       w.replace(/^\w/, c => c.toUpperCase()) */
  /*     ), */
  /*   })), */
  /* ]; */

  const [selected, setSelected] = useState(subcategories[0]);

/*   useEffect(() => { */
/*     console.log("Cateogry picked") */
/*     if (selected.name === "All Category") */
/*       setAllPosts(filteredPosts); */
/*     else { */
/*       setAllPosts(filteredPosts.filter(item => item.node.values.category === selected.name.toLowerCase())); */
/*     } */
/*   }, [selected.name]) */

  const verse = props.data.getGlobalDocument.data.verse;
  const data = {
    __typename: "PagesBlocksHero",
    tagline: "Post type / subcategories",
    headline: "Post title",
    text: "Description for one of the post",
    actions: [
      {
        label: "Read Blog",
        type: "button",
        icon: true,
        link: "/posts",
      },
    ],
    color: "default",
    image: {
      src: "http://res.cloudinary.com/azmo/image/upload/v1637292683/1_illustrator_vrjh33.jpg",
      alt: "Tina",
    },
  };
  return (
    <>
      <Section color={data.color}>
        <Container
          size="medium"
          className="items-center justify-center grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8 lg:py-20"
        >
          <div className="text-center row-start-2 lg:row-start-1 lg:col-start-1 lg:col-end-3 lg:text-left">
            {data.tagline && (
              <h2 className="relative z-20 inline-block px-3 py-1 mb-4 font-bold tracking-wide text-md title-font">
                {data.tagline}
                <span className="absolute top-0 left-0 w-full h-full rounded-full -z-1 bg-current opacity-7"></span>
              </h2>
            )}
            {data.headline && (
              <h3
                className={`w-full block relative	mb-5 text-5xl font-extrabold tracking-normal leading-tight title-font`}
              >
                <span
                  className={`bg-clip-text inline-block text-transparent bg-wgray-500 from-wgray-400 to-wgray-800 bg-gradient-to-r`}
                >
                  {data.headline}
                </span>
              </h3>
            )}
            {data.text && (
              <div className="mx-auto mb-10 prose prose-lg lg:mx-0">
                {data.text}
              </div>
            )}
          </div>
          {data.image && (
            <div className="flex justify-center row-start-1">
              <img
                className="w-full h-auto max-w-xs lg:max-w-none"
                alt={data.image.alt}
                src={data.image.src}
              />
            </div>
          )}
        </Container>
      </Section>
      <div className="flex items-center justify-center text-white bg-wgray-500">
        <div className="max-w-xl px-5 py-1 mx-5">
          <div className="w-full mb-1">
            <p className="text-sm text-center">
              <span className="text-gray-50">&#10077;</span>
              {verse.body}
              <span className="text-gray-50">&#10078;</span>
            </p>
          </div>
          <div className="w-full">
            <p className="text-xs text-right">{verse.author}</p>
          </div>
        </div>
      </div>

      <Section className="flex-1 p-5 mb-10">
        <div className="flex flex-row justify-between py-5 mx-auto md:w-3/4">
          <div>
            <h4
              className={`mb-5 text-3xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`bg-clip-text inline-block text-transparent bg-wgray-500 from-wgray-400 to-wgray-800 bg-gradient-to-r`}
              >
                All Posts
              </span>
            </h4>
          </div>
          <div>
            <div className="-mt-1">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative z-20 mt-1">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{selected.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg rounded-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {subcategories.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `${
                              active
                                ? "text-amber-900 bg-amber-100"
                                : "text-gray-900"
                            }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`capitalize ${
                                  selected ? "font-medium" : "font-normal"
                                } block truncate`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? "text-amber-600" : "text-amber-600"
                                  }
                                absolute capitalize inset-y-0 left-0 flex items-center pl-3`}
                                >
                                  <CheckIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        </div>

        <Container size="xsmall">
          <Posts data={allPosts} />
        </Container>
      </Section>
    </>
  );
}

export const getStaticProps = async () => {
  const tinaProps = (await getStaticPropsForTina({
    query: `#graphql
      query PageQuery {
        ${layoutQueryFragment}
        getPostsList {
          edges {
            node {
              id
              values
              data {
                  author {
                  ... on AuthorsDocument {
                    data {
                      name
                      avatar
                    }
                  }
                }
              }
              sys {
                filename
              }
            }
          }
        }
      }
    `,
    variables: {},
  })) as { data: { getPostsList: PostsConnection } };
  return {
    props: {
      ...tinaProps,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
