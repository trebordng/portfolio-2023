import { Page } from "@/Context/CanvasContext";
import Slider from "@/Layout/Slider";
import Link from "next/link";
import React from "react";

const Home = () => {
  const { portrait } = Page();

  return (
    <Slider pageColor="bg-white">
      <section className="full-w-h flex flex-col items-center minHeight:justify-center gap-16 lg:gap-32 text-black">
        <article>
          <h2 className="text-xl md:text-2xl font-medium text-center">
            Robert Tran
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Junior Web Developer
          </h2>
        </article>
        <figure>
          <img
            src={portrait.src}
            alt={portrait.alt}
            className="w-192 h-192 sm:w-256 sm:h-256 md:w-320 md:h-320 lg:w-416 lg:h-416 object-cover rounded-full bg-purple"
          />
        </figure>
        <a href="./RT Resume.pdf" target="_blank" rel="noopener">
          <button className="button md:text-med border-black rounded text-black hover:text-purple hover:border-purple font-bold">
            My Resumé
          </button>
        </a>
      </section>
    </Slider>
  );
};

export default Home;
