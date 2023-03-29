import React from "react";
import CloseButton from "./CloseButton";
interface Skills {
  lists: [{ name: string; item: [string] }];
}
const Skills = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const lists = [
    {
      name: "Front-End",
      item: [
        "HTML/CSS",
        "React/Next.js",
        "Javascript",
        "Wordpress",
        "Material UI",
        "Bootstrap",
        "Tailwindcss",
        "Typescript",
      ],
    },
    {
      name: "Back-End",
      item: [
        "Node.js",
        "Express.js",
        "Pdfkit",
        "Firebase",
        "Mongodb(Progressing)",
      ],
    },
    {
      name: "Others",
      item: ["Heroku", "Github", "Aws Amplify", "Vercel", "Netlify"],
    },
  ];

  return (
    <section
      className={`absolute top-0  full-w-h md:w-[60%] z-999 bg-purple ${
        open ? "opacity-1 right-0" : "opacity-0 -right-[100%]"
      } transition-right duration-500 overflow-y-scroll hide-scroll text-right p-16 sm:p-24 md:p-32 lg:p-64`}
    >
      <CloseButton setOpen={setOpen} />
      {lists.map((list, index: number) => {
        return (
          <article key={index} className={`${index > 0 && "pt-64"}`}>
            {index > 0 && <hr className="w-full h-4 text-white pb-32" />}
            <h2 className="text-2xl text-white font-bold">{list.name}</h2>
            <div className="pt-32 flex flex-wrap gap-16 md:gap-32 justify-end">
              {list.item.map((language: string) => {
                return (
                  <div
                    className="text-white button border-2 rounded-full text-sm"
                    key={language}
                  >
                    {language}
                  </div>
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Skills;
