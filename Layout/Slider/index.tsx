import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import { Page } from "@/Context/CanvasContext";
import Loading from "@/Components/Loading";

const Slider = ({
  pageColor,
  children,
}: {
  pageColor: string;
  children: React.ReactNode;
}) => {
  const { direction, loading, changePage, setScroll } = Page();

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        const slider: any = document.getElementById(pageColor + "slider");
        if (slider?.offsetHeight === slider?.scrollHeight) {
          setScroll(false);
        } else {
          setScroll(true);
        }
        slider?.addEventListener("scroll", (e: any) => {
          if (
            Math.ceil(slider?.scrollHeight - slider?.scrollTop) ===
            parseInt(slider?.clientHeight)
          ) {
            setScroll(false);
          } else {
            setScroll(true);
          }
        });
      }, 200);
    }
  }, [changePage, loading]);

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
            id={pageColor + "slider"}
            initial={{ y: direction === "100%" ? "32px" : "-32px", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className={`absolute overflow-auto main-p-sm md:main-p-md lg:main-p-lg font-dm-sans hide-scroll`}
          >
            {children}
          </m.main>
        </m.div>
      )}
    </React.Fragment>
  );
};

export default Slider;
