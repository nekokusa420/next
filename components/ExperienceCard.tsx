import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rouunded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] objext-cover object-center"
        // src="https://na.cx/i/HAUZRsE.jpg"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Doctor</h4>
        <p className="font-bold text-2xl mt-1">You better see doctor</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              className="h-10 w-10 rounded-full"
              src={urlFor(technology?.image).url()}
              key={technology._id}
            />
          ))}
          {/* <img
            className="h-10 w-10 rounded-full"
            src="https://na.cx/i/V0G14T9.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://na.cx/i/V0G14T9.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://na.cx/i/V0G14T9.png"
            alt=""
          /> */}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}{" "}
          -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
          {experience.points.map((point, i) => (
            /* <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li> */
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
