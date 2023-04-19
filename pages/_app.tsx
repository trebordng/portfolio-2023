import "../Assets/Styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import React, { useEffect } from "react";
import { Page, Projects } from "@/Context/CanvasContext";
import { getContents } from "../Services";
import { Analytics } from '@vercel/analytics/react';

interface Data {
  contents: any;
  projects: any;
}

export default function App({ Component, pageProps, router }: AppProps) {
  const { setPortrait, setAboutImage, loading, setLoading } = Page();

  const { setProjects } = Projects();

  useEffect(() => {
    if (loading === true) {
      // Fetch from GraphCMS
      const fetchContent = async () =>
        await getContents().then((result: Data) => {
          //load Image before Page
          const preloadData = () => {
            for (let i = 0; i < result.contents.length; i++) {
              var image = new Image();
              image.onload = () => {
                if (i === result.contents.length - 1) {
                  //remove Spin
                  setTimeout(() => {
                    setLoading(false);
                  }, 500);
                }
              };
              image.src = result.contents[i].node.images.url;
            }
          };
          preloadData();
          // Save Data
          setPortrait({
            src: result.contents[0].node.images.url,
            alt: result.contents[0].node.images.alt,
          });
          setAboutImage({
            src: result.contents[1].node.images.url,
            alt: result.contents[1].node.images.alt,
          });

          const currentProjects = result.projects;
          //get Date
          for (let index = 0; index < currentProjects.length; index++) {
            var startDate: Date = new Date(
              currentProjects[index].node.startDate
            );
            var endDate: Date = new Date(currentProjects[index].node.endDate);
            currentProjects[index].startDate = startDate;
            currentProjects[index].endDate = endDate;
          }
          setProjects(result.projects);
        });
      fetchContent();
    }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <Footer />
      <Analytics />
    </React.Fragment>
  );
}
