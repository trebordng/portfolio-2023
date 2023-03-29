import { Page } from "@/Context/CanvasContext";
import Slider from "@/Layout/Slider";
import React from "react";

const Home = () => {
  const { portrait } = Page();
 
  return (
    <Slider pageColor="bg-white">
      <section className="full-w-h flex flex-col items-center minHeight:justify-center gap-16 lg:gap-32 text-black">
        <h2 className="text-3xl font-bold">Junior Web Developer</h2>
        <figure>
          <img
            src={portrait.src}
            alt={portrait.alt}
            className="w-128 h-128 sm:w-256 sm:h-256 object-cover rounded-full bg-purple"
          />
        </figure>
        <button className="button text-sm border-black rounded text-black hover:text-purple hover:border-purple">
          My Resumé
        </button>
      </section>
    </Slider>
  );
};

export default Home;
