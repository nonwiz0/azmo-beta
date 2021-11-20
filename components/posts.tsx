import React from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import { BsArrowRight } from "react-icons/bs";
import { ThemeContext } from "./theme";
import format from "date-fns/format";

export const truncate = (str, length) =>
  str.length > length ? str.substring(0, length) + "..." : str;

export const Posts = ({ data }) => {
  const theme = React.useContext(ThemeContext);
  const titleColorClasses = {
    blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
    teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
    green: "group-hover:text-green-600 dark:group-hover:text-green-300",
    red: "group-hover:text-red-600 dark:group-hover:text-red-300",
    pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
    purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
    yellow: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-5">
      {data.map((postData) => {
        const post = postData.node;
        /**
         * Formats date field value to be more readable.
         */
        let formattedDate
        if (post?.values.date !== null) {
          const date = post.values.date ? new Date(post?.values?.date) : '';
          formattedDate = date ? format(date, "MMM dd, yyyy") : date;
        }

        return (
          <Link
            key={post.sys.filename}
            href={`/posts/` + post.sys.filename}
            passHref
          >
            <a
              key={post.id}
              className="block group "
            >
              <div className="text-right"> <span className="px-2 text-xs text-white bg-wgray-500 rounded-tl-md">{formattedDate}</span> </div>
              <div className="relative w-60">
              <img src={post.values.heroImg} className="w-full h-44 bg-wgray-500"/>
            <div className="absolute inset-x-0 bottom-0 flex items-center p-1 bg-white bg-opacity-90">
                <div className="flex-shrink-0 mr-2">
                  <img
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                    src={post.data.author?.data?.avatar}
                    alt={post.data.author?.data?.name}
                  />
                </div>
                <p className="text-xs font-medium text-wgray-400 group-hover:text-wgray-800 dark:text-wgray-200 dark:group-hover:text-white">
                  {post.data.author?.data.name}
                </p>
              </div>
              </div>
            
              <div className="px-4 py-4 h-44 w-60 last:mb-0 bg-wgray-500 rounded-bl-md rounded-br-md">
              <h3
                className={`text-rose-200 dark:text-white text-sm font-semibold title-font transition-all duration-150 ease-out`}
              >
                {truncate(post.values.title, 20)}{" "}
                <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <BsArrowRight className="inline-block w-auto h-8 ml-1 -mt-1 opacity-70" />
                </span>
              </h3>
              <div className="w-full h-auto overflow-hidden text-xs text-wgray-50 overflow-ellipsis">
                {truncate(post.values.excerpt, 130)}
              </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
