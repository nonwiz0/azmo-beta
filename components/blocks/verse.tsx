import React from "react";

export const Verse = ({ data }) => {
  return (
  <div className="flex items-center justify-center text-white bg-wgray-500">
      <div className="max-w-xl px-5 py-1 mx-5">
        <div className="w-full mb-1">
          <p className="text-sm text-center">
            <span className="text-gray-50">&#10077;</span>
            Let Love and Kindness be the motivation behind all that you do!
            <span className="text-gray-50">&#10078;</span>
          </p>
        </div>
        <div className="w-full">
          <p className="text-xs text-center md:text-right">
            1 Corinthians 16:14
          </p>
        </div>
      </div>
    </div>
  )
};

