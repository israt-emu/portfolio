import "../styles/globals.css";
import {Nunito} from "next/font/google";
import Layout from "../components/Layout";
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
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
