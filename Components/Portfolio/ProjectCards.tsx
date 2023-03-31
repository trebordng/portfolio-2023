import Link from "next/link";
import React from "react";

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

const ProjectCards = ({
  currentProjects,
  loading,
}: {
  currentProjects: any;
  loading: boolean;
}) => {
  return (
    <article className="flex flex-col gap-32 md:gap-64 flex-wrap xl:w-[75%] items-center">
      {currentProjects?.map((project: Project, index: number) => {
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const startMonth: number = new Date(project.node.startDate).getMonth();
        const startYear: number = new Date(
          project.node.startDate
        ).getFullYear();
        const endMonth: number = new Date(project.node.endDate).getMonth();
        const endYear: number = new Date(project.node.endDate).getFullYear();
        return (
          <Link
            href={project.node.slug}
            target="_blank"
            rel="noopener"
            key={project.node.slug}
            className={`${
              loading ? "opacity-60 pointer-events-none -top-4" : "opacity-100"
            }  hover:-top-16 hover:shadow-2xl w-1024 max-w-[100%] items-stretch min-h-fit bg-faded-white flex flex-col sm:flex-row rounded-lg transition-all duration-200 easeOut relative top-0 shadow-xl shadow-light-purple overflow-hidden`}
          >
            <article className="basis-2/5 relative">
              {loading && (
                <div className="full-w-h bg-faded-white flex justify-center items-center absolute">
                  <svg
                    className="w-[50%] h-auto text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="#d7e5f8"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
              )}

              <img
                className={`${
                  loading ? "opacity-0" : "opacity-100"
                } full-w-h object-cover`}
                src={project.node.images.url}
                alt={project.node.images.alt}
              />
            </article>
            <article className="p-16 sm:p-32 basis-3/5">
              <p
                className={`${
                  loading
                    ? "text-transparent bg-light-blue inline-block mt-4 rounded-full table"
                    : "text-black "
                } text-xl `}
              >
                {project.node.company}
              </p>
              <h3
                className={`${
                  loading
                    ? "text-transparent bg-light-blue inline-block mt-4 rounded-full table"
                    : "text-black "
                } text-2xl font-bold`}
              >
                {project.node.title}
              </h3>
              <p
                className={`${
                  loading
                    ? "text-transparent bg-light-blue inline-block mt-4 rounded-full table"
                    : "text-black "
                } `}
              >{`${monthNames[startMonth]} ${startYear} - ${monthNames[endMonth]} ${endYear}`}</p>
              <p
                className={`${
                  loading
                    ? "text-transparent bg-light-blue inline-block mt-4 rounded-full table"
                    : "text-black "
                } text-xl mt-16 lg:mt-32 `}
              >
                {project.node.description}
              </p>
              <div className="flex gap-16 mt-16 lg:mt-32 flex-wrap">
                {project.node.languages?.map((language: string) => {
                  return (
                    <div>
                      <div
                        className={`${
                          loading ? "text-transparent opacity-60" : "text-white"
                        } bg-purple button rounded-full zIndex-1 font-bold`}
                      >
                        {language}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </Link>
        );
      })}
    </article>
  );
};

export default ProjectCards;
