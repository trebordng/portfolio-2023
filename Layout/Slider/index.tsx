import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { Page } from "@/Context/CanvasContext";
import { getContents } from "../../Services";
import Loading from "@/Components/Loading";

interface Data {
  contents: string;
  projects: string;
}

const Slider = ({
  pageColor,
  children,
}: {
  pageColor: string;
  children: React.ReactNode;
}) => {
  const { direction, contents, setContents, setProjects, loading, setLoading } =
    Page();

  useEffect(() => {
    if (contents.length === 0) {
      const fetchContent = async () =>
        await getContents().then((result: Data) => {
          setContents(result.contents);
          setProjects(result.projects);
          setTimeout(() => {
            setLoading(false);
          }, 200);
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
          className={`${pageColor} absolute top-0 left-0 w-full h-full z-0`}
        >
          <m.main
            initial={{ y: "20px", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className={`py-48 md:py-64 lg:py-96 px-16 md:px-32 lg:px-64 absolute top-0 left-0 w-full h-full`}
          >
            {children}
          </m.main>
        </m.div>
      )}
    </React.Fragment>
  );
};

export default Slider;
