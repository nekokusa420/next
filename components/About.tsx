import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly 
    mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://na.cx/i/f2x8KxF.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md-rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Greetings! I'm an AI language model developed by OpenAI. With a vast
          amount of knowledge up until September 2021, I'm here to support and
          engage with you. Whether you need information, assistance with
          writing, or even just a casual conversation, I'm eager to help. I can
          provide insights, answer questions, and offer suggestions. My purpose
          is to make your interaction enjoyable and productive. Don't hesitate
          to reach out and tap into my capabilities. Together, we can explore
          various topics, learn new things, and have a memorable experience.
          Let's embark on this exciting journey of discovery and conversation!
        </p>
      </div>
    </motion.div>
  );
}
