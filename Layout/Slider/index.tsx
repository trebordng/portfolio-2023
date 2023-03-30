import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import { Page } from "@/Context/CanvasContext";
import { getContents } from "../../Services";
import Loading from "@/Components/Loading";

interface Data {
  contents: any;
  projects: any;
}

const Slider = ({
  pageColor,
  children,
}: {
  pageColor: string;
  children: React.ReactNode;
}) => {
  const {
    direction,
    setPortrait,
    setAboutImage,
    setProjects,
    loading,
    setLoading,
  } = Page();

  useEffect(() => {
    if (loading === true) {
      // Fetch from GraphCMS
      const fetchContent = async () =>
        await getContents().then((result: Data) => {
          console.log(result.projects);
          const preloadData = () => {
            for (let i = 0; i < result.contents.length; i++) {
              var image = new Image();
              image.onload = () => {
                if (i === result.contents.length - 1) {
                  //remove Spin
                  setTimeout(() => {
                    setLoading(false);
                  }, 500);
                  // for (
                  //   let iProject = 0;
                  //   iProject < result.projects.length-1;
                  //   i++
                  // ) {
                  //   var projectImage = new Image();
                  //   projectImage.onload = () => {};
                  // }
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
          setProjects(result.projects);
        });
      fetchContent();
    }
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loading pageColor={pageColor} />
      ) : (
        <m.div
          initial={{ y: direction }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 1 }}
          className={`${pageColor} absolute top-0 left-0 full-w-h z-0`}
        >
          <m.main
            initial={{ y: direction === "100%" ? "40px" : "-40px", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className={`slider absolute overflow-auto main-p-sm md:main-p-md lg:main-p-lg hide-scroll font-dm-sans`}
          >
            {children}
          </m.main>
        </m.div>
      )}
    </React.Fragment>
  );
};

export default Slider;
