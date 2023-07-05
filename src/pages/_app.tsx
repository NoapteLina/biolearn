import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import ScrollToTop from "react-scroll-to-top";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
     <>
     <Head>
        <title>BioLearn</title>
      </Head>

     <div className = " min-h-screen">
        <span className="z-[100] focus:outline-0 focus:outline-none	">
          <Nav />
        </span>
        <Component className="" {...pageProps} /> {/** schimbari css globale in className <- */}
        <ScrollToTop style={{display: "flex", justifyContent: "center", alignItems:"center"}} smooth color="green"/>
      </div>
      <Footer />
    </>
  )
};

export default MyApp;
