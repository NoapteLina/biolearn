import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component className="" {...pageProps} />; {/** schimbari css globale in className <- */}
};

export default MyApp;
