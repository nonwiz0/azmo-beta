import React from "react";
import Markdown from "react-markdown";
import { Container } from "./container";
import { Section } from "./section";
import { ThemeContext } from "./theme";
import format from "date-fns/format";
import Minisection from "./mdx/minisection";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Verse } from "./blocks/verse";

const components = {
  Minisection: (data) => {
    return <Minisection section={data} />;
  },
};

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
    wgray: "from-wgray-400 to-wgray-500 dark:from-wgray-300 dark:to-wgray-500",
  };
  /**
   * Formats date field value to be more readable.
   */
  let formattedDate;
  if (data?.date !== null) {
    const date = data.date ? new Date(data.date) : "";
    formattedDate = date ? format(date, "MMM dd, yyyy") : date;
  }
  console.log("Data at post", data);

  return (
    <Section>
      <Container size="medium">
        <div className="flex-row md:flex">
          <div>
          <h1
            className={`text-5xl leading-tight font-extrabold tracking-normal text-center md:text-left title-font`}
          >
            <span className={`bg-clip-text inline-block text-transparent bg-gradient-to-r ${
                titleColorClasses[theme.color]
              }`}>{data.title}{" "}
            </span>{" "}
          </h1>
            <div className="mt-4">

              <h2 className="relative z-20 inline-block px-3 py-1 mb-4 font-bold tracking-wide text-md title-font">
                {data.type} / {data.category}
              <span className="absolute top-0 left-0 w-full h-full rounded-full -z-1 bg-current opacity-7"></span>
            </h2>
            </div>

            <p className="py-5 prose prose-lg"> {data.excerpt} </p>
          </div>

          {data.heroImg && (
            <div className="flex justify-center max-w-md px-6 mx-auto md:w-2/3 lg:w-1/3">
              <img
                src={data.heroImg}
                className="block object-cover h-auto max-w-full mx-auto mb-14 rounded-md"
              />
            </div>
          )}
        </div>
      </Container>
      <Verse data={{}} />
      <Container className={`flex-1 max-w-4xl pt-4`} size="large">
        <div className="w-full prose dark:prose-dark max-w-none">
          <TinaMarkdown components={components} content={data.body} />
        </div>
      </Container>
    </Section>
  );
};
