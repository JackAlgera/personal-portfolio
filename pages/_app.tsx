import '../styles/globals.css'
import {AppProps} from "next/app";
import {Navbar} from "../components/globals/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <div className="context">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp
