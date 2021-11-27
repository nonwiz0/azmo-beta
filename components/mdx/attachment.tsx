
export default function Attachment({ section }) {
  return (
    <>
        <div className="m-1">
            <div className="flex w-full h-24 mx-auto overflow-hidden bg-white rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 group">
              <div
                className="w-2/3 bg-center bg-cover sm:w-28 md:w-32 lg:w-40 "
                style={{ backgroundImage: `url(${section.image})` }}
              ></div>
              <div className="w-full p-2">
                <span className="text-gray-600">
                  {section.content}
                </span>
                <div className="flex justify-end">
                  <a href={`${section.link && section.link.indexOf("http") > -1 ? section.link : "https://" + section.link}`} target="_blank">
                  <button className="px-2 py-1 mt-4 text-xs font-bold text-white uppercase rounded bg-wgray-500 transition-colors duration-200 transform hover:bg-wgray-600 focus:outline-none focus:bg-wgray-700">
                    Open
                  </button>
                    </a>
                </div>
              </div>
            </div>
        </div>
     </>
  );
}
