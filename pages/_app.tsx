import '../styles/globals.css';
import '../styles/pages.css';
import '../styles/animations.scss';
import {AppProps} from "next/app";
import {Navbar} from "../components/globals/navbar";
import {useEffect, useState} from "react";
import {SocialBar} from "../components/globals/social-bar";
import Head from "next/head";
import {AnimatedBackground} from "../components/globals/animated-background";
import {LoadingPage} from "../components/globals/loading-page";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [watcherActivated, setWatcherActivated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [initLoad, setInitLoad] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setInitLoad(false);
    }, 8000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);


  return (
    <>
      <Head>
        <title>Jack&apos;s portfolio</title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      { loading ?
        <LoadingPage onFinish={() => setLoading(false)} /> :
        <>
          <Navbar watcherActivated={watcherActivated} setWatcherActivated={setWatcherActivated} />
          <div className="context">
            <AnimatedBackground />
            <div className="context-container">
              <Component {...pageProps} watcherActivated={watcherActivated} setWatcherActivated={setWatcherActivated} initLoad={initLoad} />
            </div>
          </div>
          <SocialBar watcherActivated={watcherActivated} setWatcherActivated={setWatcherActivated} />
        </>
      }
    </>
  );
}
