import { Page } from "@/Context/CanvasContext";
import Slider from "@/Layout/Slider";
import React, { useEffect, useState } from "react";

interface Project {
  node: {};
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
    const sortedProjects = _.sortBy(
      projects,
      (project: Project) => {
        return new Date(project.endDate);
      },
      ["desc", "asc"]
    );
    setCurrentProjects(sortedProjects);

    const preloadData = () => {
      for (let i = 0; i < sortedProjects.length; i++) {
        var image = new Image();
        image.onload = () => {
          if (i === sortedProjects.length - 1) {
            //remove Spin
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }
        };
        image.src = sortedProjects[i].node.image?.url;
      }
    };
    preloadData();
  }, [projects]);

  return (
    <Slider pageColor="bg-light-blue">
      <section className="w-full min-h-full py-32 md:px-48 md:py-96 lg:py-128 flex flex-col gap-32 md:gap-64 items-center">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <article className="flex flex-col lg:flex-row gap-32 md:gap-64 flex-wrap justify-center">
          {currentProjects?.map((project: Project, index: number) => {
            return (
              <div
                key={index}
                className={`${
                  loading && "animation-pulse opacity-[0.1] top-12"
                } w-416 lg:h-512 max-w-[90vw] min-h-fit p-16 lg:p-32 bg-blue rounded-md text-white opacity-1 transition-opacity-top duration-200 relative top-0`}
              >
                <p
                  className={`${
                    loading &&
                    "bg-light-blue rounded-full indent-[100%] whitespace-nowrap overflow-hidden"
                  } `}
                >
                  test
                </p>
              </div>
            );
          })}
        </article>
      </section>
    </Slider>
  );
};

export default Portfolio;
