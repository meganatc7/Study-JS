import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Restaurant in NY</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </>
  );
}
