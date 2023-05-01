import Voting from "@/components/Vote/Voting";
import Login from "@/components/auth/Login";
import Image from "next/image";

import "@/pages/styles/globals.css";
// import Layout from "@/layouts/Layout";

export default function App({ Component, pageProps }) {
  // const NestedLayout = Component.Layout || EmptyLayout;
  return <Component {...pageProps} />;
}
