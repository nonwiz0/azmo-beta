import React from "react";

export const Comments = ({ children, size = "medium", className = "" }) => {
  const verticalPadding = {
    xsmall: "py-1",
    small: "py-8",
    medium: "py-12",
    large: "py-20",
    default: "py-12",
  };

  return (
    <div
      className={`max-w-7xl mx-auto px-6 sm:px-8 ${verticalPadding[size]} ${className}`}
    >
      {children}
    </div>
  );
};
