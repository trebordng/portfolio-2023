import React from "react";
import Container from "./Container";
interface Skills {
  name: string;
  item: string[];
}
const Skills = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const lists: Skills[] = [
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
        "React Three Fiber",
      ],
    },
    {
      name: "Back-End",
      item: [
        "Node.js",
        "Express.js",
        "Pdfkit",
        "Firebase",
        "Mongodb (Progressing)",
      ],
    },
    {
      name: "Others",
      item: ["Heroku", "Github", "Aws Amplify", "Vercel", "Netlify"],
    },
  ];

  return (
    <Container open={open} setOpen={setOpen} id="skills" bgColor="bg-purple">
      {lists.map((list:Skills, index: number) => {
        return (
          <article key={list.name} className={`${index > 0 && "pt-64"}`}>
            {index > 0 && <hr className="w-full h-4 text-black pb-16" />}
            <h2 className="text-2xl text-white font-bold">{list.name}</h2>
            <div className="pt-32 flex flex-wrap gap-16 justify-end">
              {list.item.map((language: string) => {
                return (
                  <div
                    className="text-black bg-white button rounded-full text-sm font-semibold"
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
    </Container>
  );
};

export default Skills;
