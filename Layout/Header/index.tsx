import { Page } from "@/Context/CanvasContext";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import PhoneNav from "./PhoneNav";

interface Page {
  slug: string;
  name: string;
  title: string;
}

const Header = () => {
  const pages: Page[] = [
    { slug: "/", name: ".robert", title: "- Web Developer" },
    { slug: "/About", name: "About", title: "- About" },
    { slug: "/Portfolio", name: "Portfolio", title: "- Portfolio" },
    { slug: "/Contact", name: "Contact", title: "- Contact" },
  ];
  const { setDirection, setChangePage } = Page();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>("");

  useEffect(() => {
    const currentPageIndex: number = pages.findIndex(
      (page: Page) => router.asPath === page.slug
    );
    setCurrentPage(pages[currentPageIndex]?.title);
  }, [router.asPath]);

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
    setChangePage(currentPageIndex);
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
    <React.Fragment>
      <Head>
        <title>{`Robert Tran ` + currentPage}</title>
        <meta
          name="description"
          property="og:title"
          content={`Robert Tran - Web Developer`}
          key="title"
        />
        <link rel="shortcut icon" href="/image/favicon.ico" />
      </Head>
      <nav
        id="navbar"
        className="flex justify-between font-poppins font-medium text-black text-xl md:text-2xl fixed left-0 right-0 z-1 px-16 md:px-32 lg:px-64 top-8 md:top-16 lg:top-32 h-32"
      >
        <Link href="/" onClick={(e) => navClick(e)}>
          <span
            className={`hover:underline relative ${
              router.asPath === "/" && "underline"
            }`}
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
        <PhoneNav pages={pages} navClick={navClick} router={router} />
      </nav>
    </React.Fragment>
  );
};

export default Header;
