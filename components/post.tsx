import React from "react";
import Markdown from "react-markdown";
import { Container } from "./container";
import { Section } from "./section";
import { ThemeContext } from "./theme";
import format from "date-fns/format";

export const Post = ({ data }) => {
  const theme = React.useContext(ThemeContext);
  const titleColorClasses = {
    blue: "from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500",
    teal: "from-teal-400 to-teal-600 dark:from-teal-300 dark:to-teal-500",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-300 to-pink-500",
    purple:
      "from-purple-400 to-purple-600 dark:from-purple-300 dark:to-purple-500",
    orange:
      "from-orange-300 to-orange-600 dark:from-orange-200 dark:to-orange-500",
    yellow:
      "from-yellow-400 to-yellow-500 dark:from-yellow-300 dark:to-yellow-500",
    wgray:
      "from-wgray-400 to-wgray-500 dark:from-wgray-300 dark:to-wgray-500",

  };
  /**
   * Formats date field value to be more readable.
   */
  let formattedDate;
  if (data?.date !== null) {
    const date = data.date ? new Date(data.date) : "";
    formattedDate = date ? format(date, "MMM dd, yyyy") : date;
  }

  return (
    <Section className="flex-1">
      <Container className={`flex-1 max-w-4xl pb-2`} size="large">
        <h2
          className={`w-full block relative	mb-8 text-6xl leading-tight font-extrabold tracking-normal text-center title-font`}
        >
          <span
            className={`bg-clip-text inline-block text-transparent bg-gradient-to-r ${
              titleColorClasses[theme.color]
            }`}
          >
            {data.title}
          </span>
        </h2>

        <div className="flex items-center justify-center mb-16">
          {data.author && (
            <>
              <div className="flex-shrink-0 mr-4">
                <img
                  className="object-cover rounded-full h-14 w-14 shadow-sm"
                  src={data.author.data.avatar}
                  alt={data.author.data.name}
                />
              </div>
              <p className="text-base font-medium text-gray-600 group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-white">
                {data.author.data.name}
              </p>
              <span className="mx-2 font-bold text-gray-200 dark:text-gray-500">
                —
              </span>
            </>
          )}
          <p className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150">
            {formattedDate}
          </p>
        </div>
      </Container>
      {data.heroImg && (
        <div className="flex justify-center max-w-4xl px-6 mx-auto lg:max-w-6xl">
          <img
            src={data.heroImg}
            className="block object-cover h-auto max-w-full mx-auto mb-14 rounded-md"
            style={{ maxHeight: "80vh" }}
          />
        </div>
      )}
      <Container className={`flex-1 max-w-4xl pt-4`} size="large">
        <div className="w-full prose dark:prose-dark max-w-none">
          <Markdown>{data.body}</Markdown>
        </div>
      </Container>
    </Section>
  );
};
