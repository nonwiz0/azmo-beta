import * as React from "react";
import Markdown from "react-markdown";
import { Actions } from "../actions";
import { Container } from "../container";
import { Section } from "../section";
import { ThemeContext } from "../theme";

export const Hero = ({ data }) => {
  const theme = React.useContext(ThemeContext);
  const headlineColorClasses = {
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
    wgray: "from-wgray-500 to-rose-800",
  };

  return (
    <Section color={data.color}>
      <Container
        size="large"
        className="items-center justify-center grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8"
      >
        <div className="text-center row-start-2 lg:row-start-1 lg:col-start-1 lg:col-end-3 lg:text-left">
          {data.tagline && (
            <h2 className="relative z-20 inline-block px-3 py-1 mb-8 font-bold tracking-wide text-md title-font">
              {data.tagline}
              <span className="absolute top-0 left-0 w-full h-full rounded-full -z-1 bg-current opacity-7"></span>
            </h2>
          )}
          {data.headline && (
            <h3
              className={`w-full block relative	mb-10 text-5xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`bg-clip-text inline-block text-transparent bg-gradient-to-r  ${
                  data.color === "primary"
                    ? `from-white to-gray-100`
                    : headlineColorClasses[theme.color]
                }`}
              >
                {data.headline}
              </span>
            </h3>
          )}
          {data.text && (
            <div
              className={`prose prose-lg mx-auto lg:mx-0 mb-10 ${
                data.color === "primary" ? `prose-primary` : `dark:prose-dark`
              }`}
            >
              <Markdown>{data.text}</Markdown>
            </div>
          )}
          {data.actions && (
            <Actions
              className="justify-center py-2 lg:justify-start"
              parentColor={data.color}
              actions={data.actions}
            />
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
  );
};
