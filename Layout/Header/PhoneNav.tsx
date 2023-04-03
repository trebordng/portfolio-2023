import Link from "next/link";
import { NextRouter } from "next/router";
import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

interface Page {
  slug: string;
  name: string;
}

const PhoneNav = ({
  pages,
  navClick,
  router,
}: {
  pages: { slug: string; name: string }[];
  navClick: Function;
  router: NextRouter;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className="md:hidden">
      <button
        onClick={handleOpen}
        className={`z-9999 relative ${
          open ? "rotate-90 bg-white" : ""
        } transition-all duration-200`}
      >
        {open ? (
          <RiCloseFill className="color-black text-2xl" />
        ) : (
          <RiMenu3Fill className="text-2xl color-black" />
        )}
      </button>
      <ul
        className={`${
          open
            ? "opacity-1 z-999 left-0 "
            : "opacity-0 -z-999 -left-[100%]"
        } transition-top duration-200 easeOut fixed w-[100vw] h-[100vh] bg-purple flex top-0  flex-col items-center justify-center gap-32 `}
      >
        {pages.map(
          (page: Page) =>
            page.slug !== "/" && (
              <li
                onClick={(e) => {
                  navClick(e);
                  setOpen(false);
                }}
                key={page.slug}
                className={`hover:underline uppercase ${
                  router.asPath === page.slug && "underline"
                } transition:"all 0.5s" text-2xl text-white`}
              >
                <Link href={page.slug}>{page.name}</Link>
              </li>
            )
        )}
      </ul>
    </section>
  );
};

export default PhoneNav;
