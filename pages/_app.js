import "../styles/globals.css";
import {Merriweather, Nunito} from "next/font/google";
import Layout from "../components/Layout";
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "700", "900"],
});

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <main className={`${nunito.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
