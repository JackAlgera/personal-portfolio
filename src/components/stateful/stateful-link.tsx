'use client';

import Link from 'next/link';
import {PropsWithChildren} from 'react';
import {useWatcherStore} from '../../store/watcher-store';
import styles from './stateful-link.module.scss';

interface StatefulLinkProps {
  href: string;
  internalLink?: boolean;
}

export const StatefulLink = (props: PropsWithChildren<StatefulLinkProps>) => {
  const { activateWatcher, deactivateWatcher } = useWatcherStore();

  return (
    <Link className={styles.link}
          href={props.href}
          target={props.internalLink ? undefined : "_blank" }
          rel={props.internalLink ? undefined : "noreferrer" }
          onMouseEnter={activateWatcher}
          onMouseLeave={deactivateWatcher}>
      {props.children}
    </Link>
  );
}
