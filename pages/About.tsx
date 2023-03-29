import Experience from "@/Components/About/Experience";
import Skills from "@/Components/About/Skills";
import { Page } from "@/Context/CanvasContext";
import Slider from "@/Layout/Slider";
import React, { useEffect, useState } from "react";

const About = () => {
  const [openSkills, setOpenSkills] = useState<boolean>(false);
  const [openExperience, setOpenExperience] = useState<boolean>(false);
  const { aboutImage } = Page();

  useEffect(() => {
    document.onclick = (e: MouseEvent) => {
      var skillsContainer = document.getElementById("skills");
      var skillsButton = document.getElementById("skills-button");
      if (
        !skillsButton!?.contains(e.target as HTMLInputElement) &&
        !skillsContainer?.contains(e.target as HTMLInputElement)
      ) {
        setOpenSkills(false);
      }

      var experienceContainer = document.getElementById("experience");
      var experienceButton = document.getElementById("experience-button");
      if (
        !experienceButton!?.contains(e.target as HTMLInputElement) &&
        !experienceContainer?.contains(e.target as HTMLInputElement)
      ) {
        setOpenExperience(false);
      }
    };
  }, []);

  const handleClick = (
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setClose: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setOpen(!open);
    setClose(false);
  };

  return (
    <React.Fragment>
      <Skills open={openSkills} setOpen={setOpenSkills} />
      <Experience open={openExperience} setOpen={setOpenExperience} />
      <Slider pageColor="bg-light-blue">
        <section className="full-w-h py-16 sm:p-16 md:p-24 lg:p-48 flex flex-col lg:flex-row gap-16">
          <article className="lg:basis-1/2">
            <h2 className="text-3xl font-bold">Hi there,</h2>
            <p className="pt-32 font-medium text-xl">
              I'm Robert Tran, a junior web developer with one year experience.
            </p>
            <p className="pt-16 font-medium text-xl">
              I'm passionate in making web application with different libraries
              such as React.js, Tailwindcss, MUI, Three.js. Currently I'm
              learning about back-end development including Node.js, Express.js,
              Firebase and also doing freelance work. I'm looking for an
              opportunity to improve my web development skills further in both
              front-end and back-end.
            </p>
            <p className="pt-16 font-medium text-xl">
              Some things that I like: PC games, Soccer, Guitar.
            </p>
            <div className="pt-32 flex gap-16">
              <button
                id="skills-button"
                onClick={() =>
                  handleClick(openSkills, setOpenSkills, setOpenExperience)
                }
                className="button border-purple text-sm bg-purple text-white rounded font-bold"
              >
                My Skills
              </button>
              <button
                id="experience-button"
                onClick={() =>
                  handleClick(openExperience, setOpenExperience, setOpenSkills)
                }
                className="button border-purple text-sm bg-purple text-white rounded font-bold"
              >
                Experience
              </button>
            </div>
          </article>
          <article className="lg:basis-1/2 relative">
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
    </React.Fragment>
  );
};

export default About;
