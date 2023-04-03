import { Page } from "@/Context/CanvasContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

interface Media {
  icon: any; slug: string
}

const Footer = () => {
  const { scroll } = Page();
  const Media:Media[] = [
    {
      icon: <FiFacebook />,
      slug: "https://www.facebook.com/profile.php?id=100028181002993",
    },
    {
      icon: <FiGithub />,
      slug: "https://github.com/trebordng",
    },
    {
      icon: <FiLinkedin />,
      slug: "https://www.linkedin.com/in/robert-tran-a49b251a4/",
    },
  ];


  return (
    <footer className="font-dm-sans flex fixed bottom-8 md:bottom-16 lg:bottom-32 justify-between items-center left-0 right-0 px-16 md:px-32 lg:px-64 h-32">
      <section
        className="text-xl md:text-2xl flex gap-16 items-center"
        id="social-tab"
      >
        {Media.map((item) => {
          return (
            <Link
              key={item.slug}
              href={item.slug}
              target="_blank"
              rel="noopener"
            >
              {item.icon}
            </Link>
          );
        })}
      </section>
      {scroll && (
        <section>
          <BsChevronDown className="text-center text-2xl animate-pulse color-black" />
        </section>
      )}
      <section>
        <p>@RT 2023</p>
      </section>
    </footer>
  );
};

export default Footer;
