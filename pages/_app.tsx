import '../styles/globals.css';
import '../styles/pages.css';
import {AppProps} from "next/app";
import {Navbar} from "../components/globals/navbar";
import {useState} from "react";
import {SocialBar} from "../components/globals/social-bar";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [watcherActivated, setWatcherActivated] = useState(false);

  return (
    <div>
      <Navbar watcherActivated={watcherActivated} setWatcherActivated={setWatcherActivated} />
      <div className="context">
        <Component {...pageProps} watcherActivated={watcherActivated} setWatcherActivated={setWatcherActivated} />
      </div>
      <SocialBar watcherActivated={watcherActivated} setWatcherActivated={setWatcherActivated} />
    </div>
  );
}
