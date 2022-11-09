import '../styles/globals.css';
import '../styles/pages.css';
import {AppProps} from "next/app";
import {Navbar} from "../components/globals/navbar";
import {useState} from "react";
import {SocialBar} from "../components/globals/social-bar";
import Head from "next/head";
import {AnimatedBackground} from "../components/globals/animated-background";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [watcherActivated, setWatcherActivated] = useState(false);

  return (
    <>
      <Head>
        <title>Jack&apos;s portfolio</title>
      </Head>
      <Navbar watcherActivated={watcherActivated} setWatcherActivated={setWatcherActivated} />
      <div className="context">
        <AnimatedBackground />
        <Component {...pageProps} watcherActivated={watcherActivated} setWatcherActivated={setWatcherActivated} />
      </div>
      <SocialBar watcherActivated={watcherActivated} setWatcherActivated={setWatcherActivated} />
    </>
  );
}
