import { type AppType } from "next/dist/shared/lib/utils";
import ScrollToTop from "react-scroll-to-top";
import LeftSidebar from "~/components/LeftSidebar";
import Nav from "~/components/nav";
import Navbar from "~/components/navbar";
import Sidebar from "~/components/sidebar";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
     <>
     <div className = "">
        <span className="z-[100]"><Nav/></span>
        <Component className="" {...pageProps} /> {/** schimbari css globale in className <- */}
        <ScrollToTop style={{display: "flex", justifyContent: "center", alignItems:"center"}} smooth color="green"/>
      </div>
    </>
  )
};

export default MyApp;
