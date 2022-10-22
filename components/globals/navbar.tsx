import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {Watcher} from "./watcher";

export const Navbar = () => {
  const [watcherActivated, setWatcherActivated] = useState(false);

  const router = useRouter();
  const { locale: activeLocale, pathname, query, asPath } = router;

  const generateNavLink = (title: string, href: string) => {
    return (
      <Link href={href}>
        <a onMouseEnter={() => setWatcherActivated(true)} onMouseLeave={() => setWatcherActivated(false)}>{title}</a>
      </Link>
    );
  }

  return (
    <div className="nav">
      <div className="nav-pos">
        {generateNavLink("Home", "/")}
        {generateNavLink("Experience", "/experience")}
      </div>
      <Watcher activated={watcherActivated}/>
      <div className="nav-pos">
        {generateNavLink("Contact Me", "/contact-me")}
        {generateNavLink("Projects", "/projects")}
      </div>
    </div>
  );
};
