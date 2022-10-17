import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {Watcher} from "./watcher";

export const Navbar = () => {
  const [watcherActivated, setWatcherActivated] = useState(false);

  const router = useRouter();
  const { locale: activeLocale, pathname, query, asPath } = router;

  const generateNavLink = (href: string) => {
    return (
      <Link href={href}>
        <a onMouseEnter={() => setWatcherActivated(true)} onMouseLeave={() => setWatcherActivated(false)}>Home</a>
      </Link>
    );
  }

  return (
    <div className="nav">
      {generateNavLink("/")}
      {generateNavLink("/")}
      <Watcher activated={watcherActivated}/>
      {generateNavLink("/")}
      {generateNavLink("/")}
    </div>
  );
};
