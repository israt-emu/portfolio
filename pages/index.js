import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="">
      <Navigation />

      <div className="px-6">
        <Banner />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
