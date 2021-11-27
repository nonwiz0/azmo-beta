import { useContext } from "react"
import { ExtraContext } from "../extra"

export const Verse = () => {
  const { verse }  = useContext(ExtraContext);
  console.log("verse", verse);
  return (
  <div className="flex items-center justify-center text-white bg-wgray-500">
      <div className="max-w-xl px-5 py-1 mx-5">
        <div className="w-full mb-1">
          <p className="text-sm text-center">
            <span className="text-gray-50">&#10077;</span>
            { verse.body }
            <span className="text-gray-50">&#10078;</span>
          </p>
        </div>
        <div className="w-full">
          <p className="text-xs text-center md:text-right">
            { verse.author }
          </p>
        </div>
      </div>
    </div>
  )
};

