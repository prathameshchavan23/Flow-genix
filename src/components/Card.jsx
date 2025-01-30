import React from "react";
import Cards from "./Cards";
import { motion } from "framer-motion";

import { FaArrowRightLong } from "react-icons/fa6";
const Card = ({ width, start, para, hover="false" }) => {
  return (
    <motion.div  whileHover={{
      backgroundColor: hover === "true" && "#7443ff",
      padding: "25px",
    }}
      className={`w-1/2 hover:${hover} bg-zinc-800 p-5 rounded-xl text-white ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever heading</h1>
      </div>
      <div className="down w-full mt-60">
        {start == true && (
          <>
            <h1 className="text-6xl font-semibold leading-none ">
              Start Project
            </h1>
            <button className="rounded-full mt-5 px-5 border-[1px] border-zinc-50 py-2 ">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
