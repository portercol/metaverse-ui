"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/index.js";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { StartSteps, TypingText, TitleText } from "../components";
import { startingFeatures } from "@/constants";

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="get started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaverse Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-lg gap-6">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
