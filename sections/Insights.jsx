"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/index.js";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TypingText, TitleText } from "../components";
import { insights } from "@/constants";

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col `}
      >
        <TypingText title="| Insights" textStyles="text-center"/>
        <TitleText title="Insights about the Metaverse" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-8">
          {insights.map((insight, index) => (
            <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
