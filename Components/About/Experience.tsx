import React, {useEffect} from "react";
import Container from "./Container";
import { WorkPlaces } from "./WorkPlaces";

const Experience = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  return (
    <Container open={open} setOpen={setOpen} id="experience" bgColor="bg-purple">
        <h2 className="text-center text-white mb-32 font-bold text-2xl">Previous Jobs and Studies</h2>
      {WorkPlaces.map((workPlace) => {
        return (
          <article key={workPlace.title} className="bg-white text-black rounded-lg p-16 mb-32 text-center hover:-top-16 relative top-0 transition-all duration-200">
            <p className="text-md">{workPlace.company}</p>
            <h3 className="text-xl font-semibold">{workPlace.title}</h3>
            <em className="text-md">{workPlace.time}</em>
            <div className="mt-16">
              {workPlace.tasks.map((task: string,) => {
                return <p key={task} className="leading-8 text-md">- {task}</p>;
              })}
            </div>
          </article>
        );
      })}
    </Container>
  );
};

export default Experience;
