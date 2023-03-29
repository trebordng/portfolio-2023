import Experience from "@/Components/About/Experience";
import Skills from "@/Components/About/Skills";
import { Page } from "@/Context/CanvasContext";
import Slider from "@/Layout/Slider";
import React, { useState } from "react";

const About = () => {
  const [openSkills, setOpenSkills] = useState<boolean>(false);
  const [openExperience, setOpenExperience] = useState<boolean>(false);

  const { aboutImage } = Page();

  const handleClick = (
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setClose: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setOpen(!open);
    setClose(false);
  };

  return (
    <Slider pageColor="bg-cream">
      <Skills open={openSkills} setOpen={setOpenSkills} />
      <Experience open={openExperience} setOpen={setOpenExperience} />
      <section className="flex flex-col lg:flex-row full-w-h p-24 md:p-48 lg:p-96 gap-64">
        <article className="lg:basis-1/2">
          <h2 className="text-3xl font-bold">Hi there,</h2>
          <p className="pt-32 font-medium text-xl">
            I'm Robert Tran, currently a junior web developer.
          </p>
          <p className="pt-16 font-medium text-xl">
            I'm passionate in making web application with different libraries
            such as React.js, Vue.js, Tailwindcss, MUI. Currently I'm learning
            about back-end development including Node.js, Express.js, Firebase.
            I'm looking for an opportunity to improve my web development skills
            further in both front-end and back-end.
          </p>
          <p className="pt-16 font-medium text-xl">
            Some things that I like: PC games, Soccer, Guitar.
          </p>
          <div className="pt-32 flex gap-16">
            <button
              onClick={() =>
                handleClick(openSkills, setOpenSkills, setOpenExperience)
              }
              className="button text-sm border-purple bg-purple text-white rounded"
            >
              My Skills
            </button>
            <button
              onClick={() =>
                handleClick(openExperience, setOpenExperience, setOpenSkills)
              }
              className="button text-sm border-blue bg-blue text-white rounded"
            >
              Experience
            </button>
          </div>
        </article>
        <article className="lg:basis-1/2">
          <figure>
            <img
              src={aboutImage?.src}
              alt={aboutImage?.alt}
              className="w-full h-auto object-cover"
            />
          </figure>
        </article>
      </section>
    </Slider>
  );
};

export default About;
