import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={playFair.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
