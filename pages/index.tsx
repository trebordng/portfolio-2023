import { Page } from "@/Context/CanvasContext";
import Slider from "@/Layout/Slider";
import React, { useEffect, useState } from "react";

const Home = () => {
  const { contents } = Page();
  const [portrait, setPortrait] = useState<any>({ src: "", alt: "" });

  useEffect(() => {
    if (contents.length > 0) {
      const currentPortrait: any = contents.find(
        (file: any) => file.node.title === "Portrait"
      );
      setPortrait({
        src: currentPortrait.node.images.url,
        alt: currentPortrait.node.images.alt,
      });
    }
  }, [contents]);

  return (
    <Slider pageColor="bg-white">
      <section className="w-full h-full flex flex-col items-center justify-center text-xl gap-16 lg:gap-32 text-black">
        <h2>Junior Web Developer</h2>
        <img src={portrait?.src} alt={portrait?.alt} className="w-256 h-256 object-cover rounded-full bg-purple"/>
      </section>
    </Slider>
  );
};

export default Home;
