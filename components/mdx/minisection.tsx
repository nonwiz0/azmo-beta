import Markdown from "react-markdown";

export default function Minisection({ section }) {
  return (
    <>
        <div className={`${section.position} md:p-10 md:w-1/2`}>
          <figure className="m-auto md:p-4">
          <img src={section.last} />
          <figcaption> {section.caption}</figcaption>
          </figure>
        </div>
          <Markdown>
            {section.first}
          </Markdown>
    </>
  );
}
