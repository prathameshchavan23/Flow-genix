import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-44 px-5 py-2 bg-white text-gray-900 font-medium rounded-full flex items-center justify-between shadow-md hover:shadow-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer">
      <span className="text-sm">{title}</span>
      <MdSubdirectoryArrowRight className="text-lg" />
    </div>
  );
}

export default Button;
