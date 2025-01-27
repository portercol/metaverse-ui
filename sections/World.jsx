"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/index.js";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, TitleText } from "../components";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col `}
      >
        <TypingText title="| People in the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world.
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          className="relative mt-[68px] flex w-full"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          animate="show"
        >
          <img
            src="/map.png"
            alt="map graphic"
            className="w-full h-auto object-contain aspect-16/9"
          />

          <div
            className="absolute w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
            style={{ bottom: "20 %", right: "15%" }}
          >
            <img src="people-01.png" alt="austrailian avatar" className="w-full h-full" />
          </div>
          <div
            className="absolute w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
            style={{ top: "10%", left: "15%" }}
          >
            <img src="people-02.png" alt="canadian avatar" className="w-full h-full" />
          </div>
          {/* <div
            className="absolute w-[250px] h-[170px] p-[8px] rounded-3xl bg-[#5d6680]"
            style={{ top: "33%", left: "20%" }}
          >
            <img
              src="map-world-01.png"
              alt="map world"
              className="w-full h-full rounded-3xl"
            />
          </div> */}
          <div
            className="absolute w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
            style={{ top: "50%", left: "45%" }}
          >
            <img src="people-03.png" alt="african avatar" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
