import Markdown from "react-markdown";

export default function Minisection({ section }) {
  return (
    <>
        <div className={`${section.position} md:p-10 md:w-1/2 block inline -mt-20`}>
          <figure className="relative m-auto md:p-4">
          <img src={section.last}/>
          <figcaption className="absolute inset-x-0 bottom-0 mx-4"> {section.caption}</figcaption>
          </figure>
        </div>
      <div className="">
          <Markdown>
            {section.first}
          </Markdown>
      </div>
    </>
  );
}
