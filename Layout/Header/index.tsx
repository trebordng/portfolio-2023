import { Page } from "@/Context/CanvasContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
interface Page {
  slug: string;
  name: string;
}

const Header = () => {
  const pages = [
    { slug: "/", name: ".robert" },
    { slug: "/About", name: "About" },
    { slug: "/Portfolio", name: "Portfolio" },
    { slug: "/Contact", name: "Contact" },
  ];
  const { setDirection } = Page();
  const router = useRouter();

  const navClick = async (e: React.MouseEvent) => {
    var navbar: HTMLElement | null = document.getElementById("navbar");
    navbar?.classList.add("disable-click");
    const prevPage: string = router.asPath;
    const prevPageIndex: number = await pages.findIndex(
      (page: Page) => prevPage === page.slug
    );
    const currentPageIndex: number = await pages.findIndex(
      (page: Page) => (e.target as HTMLInputElement).innerHTML === page.name
    );

    if (prevPageIndex <= currentPageIndex) {
      setDirection("100%");
    } else {
      setDirection("-100%");
    }
    setTimeout(() => {
      navbar?.classList.remove("disable-click");
    }, 800);
  };

  return (
    <nav
      id="navbar"
      className="flex justify-between font-poppins font-medium text-black text-xl md:text-2xl fixed left-0 right-0 z-1 px-16 md:px-32 lg:px-64 top-8 md:top-16 lg:top-32 h-32"
    >
      <Link href="/" onClick={(e) => navClick(e)}>
        <span
          className={`hover:underline ${router.asPath === "/" && "underline"}`}
        >
          .robert
        </span>
      </Link>
      <ul className="flex gap-16 hidden md:flex">
        {pages.map(
          (page: Page) =>
            page.slug !== "/" && (
              <li
                onClick={(e) => navClick(e)}
                key={page.slug}
                className={`hover:underline ${
                  router.asPath === page.slug && "underline"
                } transition:"all 0.5s"`}
              >
                <Link href={page.slug}>{page.name}</Link>
              </li>
            )
        )}
      </ul>
      <button className="inline md:hidden">
        <CiMenuFries className="text-2xl color-black"/>
      </button>
    </nav>
  );
};

export default Header;
