import "../styles/globals.css";
import {Merriweather} from "next/font/google";
import Layout from "../components/Layout";
const merri = Merriweather({
  subsets: ["latin"],
  variable: "--font-merri",
  style: ["normal", "italic"],
  weight: ["300", "400", "700", "900"],
});

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <main className={`${merri.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
