import { type AppType } from "next/dist/shared/lib/utils";
import Navbar from "~/components/navbar";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
     <>
     <Navbar />
      <Component className="" {...pageProps} /> {/** schimbari css globale in className <- */}
    </>
  )
};

export default MyApp;
