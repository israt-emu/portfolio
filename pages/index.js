import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import About from "../components/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Banner />
      <About />
    </div>
  );
}
