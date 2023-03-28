import "../Assets/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import React from "react";

export default function App({ Component, pageProps, router }: AppProps) {

  return (
    <React.Fragment>
      <Header />
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </React.Fragment>
  );
}
