import Link from "next/link";
import React from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

interface Media {
  Media:[{icon:React.Component,slug:string}]
}

const Footer = () => {
  const Media = [
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
    <footer className="font-dm-sans fixed bottom-16 md:bottom-32 lg:bottom-64 flex justify-between items-center left-0 right-0 px-16 md:px-32 lg:px-64 h-32">
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
      <section>
        <p>@RT 2023</p>
      </section>
    </footer>
  );
};

export default Footer;
