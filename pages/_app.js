import { useState } from "react";
import Router from "next/router";
import { GlobalProvider } from "@/context/Provider";

import "../styles/globals.css";
console.log(GlobalProvider);
const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
};

export default MyApp;
