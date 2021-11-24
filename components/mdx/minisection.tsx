import Markdown from "react-markdown";

export default function Minisection({ section }) {
  return (
    <>
      <div className="justify-between md:flex">
        <div className="md:w-1/2">
          <Markdown>
            {section.first}
          </Markdown>
        </div>
        <div className="flex justify-center md:w-1/2">
          <Markdown>
          {section.last}
          </Markdown>
        </div>
      </div>
    </>
  );
}
