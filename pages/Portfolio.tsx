import ProjectCards from "@/Components/Portfolio/ProjectCards";
import { Page } from "@/Context/CanvasContext";
import Slider from "@/Layout/Slider";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Project {
  node: {
    images: { url: string; alt: string };
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    languages: [string];
    slug: string;
  };
  startDate: Date;
  endDate: Date;
}

const Portfolio = () => {
  const _ = require("lodash");
  const { projects } = Page();
  const [currentProjects, setCurrentProjects] = useState<[Project]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //Sort Projects and assign to current Project for displaying
    const sortedProjects: [Project] = _.orderBy(
      projects,
      (project: Project) => {
        return new Date(project.endDate);
      },
      ["desc", "asc"]
    );
    setCurrentProjects(sortedProjects);

    //Preload Data
    const preloadData = () => {
      for (let i = 0; i < sortedProjects?.length; i++) {
        var image = new Image();
        image.onload = () => {
          if (i === sortedProjects.length - 1) {
            //remove Spin
            setTimeout(() => {
              setLoading(false);
            }, 200);
          }
        };
        image.src = sortedProjects[i].node.images?.url;
      }
    };
    preloadData();
  }, [projects]);

  return (
    <Slider pageColor="bg-light-blue">
      <section className="w-full min-h-full py-32 md:px-48 md:py-96 lg:py-128 flex flex-col xl:flex-row gap-32 md:gap-64 justify-around">
        <article className="xl:w-[25%] flex flex-col items-center">
          <h2 className="text-3xl font-bold whitespace-nowrap">
            My Projects
          </h2>
          <BsChevronDown className="text-center text-2xl animate-pulse color-black mt-32" />
        </article>
        <ProjectCards currentProjects={currentProjects} loading={loading} />
      </section>
    </Slider>
  );
};

export default Portfolio;
