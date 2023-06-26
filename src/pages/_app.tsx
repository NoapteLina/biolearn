import { type AppType } from "next/dist/shared/lib/utils";
import LeftSidebar from "~/components/LeftSidebar";
import Navbar from "~/components/navbar";
import Sidebar from "~/components/sidebar";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
     <>
     <div className = "">
        <Navbar/>
        <Component className="" {...pageProps} /> {/** schimbari css globale in className <- */}
      </div>
    </>
  )
};

export default MyApp;
