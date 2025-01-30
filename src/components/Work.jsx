import React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (data) => {
      const percentage = Math.floor(data * 100); // Convert to percentage

      let activeIndexes = [];
      if (percentage >= 8) activeIndexes = [0, 1, 2, 3, 4, 5];
      else if (percentage >= 6) activeIndexes = [0, 1, 2, 3, 4];
      else if (percentage >= 4) activeIndexes = [0, 1, 2, 3];
      else if (percentage >= 3) activeIndexes = [0, 1, 2];
      else if (percentage >= 2) activeIndexes = [0, 1];
      else if (percentage >= 1) activeIndexes = [0];

      setImages((prev) => {
        const newImages = prev.map((item, index) => ({
          ...item,
          isActive: activeIndexes.includes(index),
        }));

        // Update only if there's a change in isActive state
        if (JSON.stringify(newImages) !== JSON.stringify(prev)) {
          return newImages;
        }
        return prev;
      });
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="w-full ">
      <div className="relative max-w-screen-xl mx-auto text-center text-white">
        <h1 className="text-[28vw] leading-none font-regular tracking-tight select-none">
          Work
        </h1>
        {/* Images */}
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt="work_images"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
