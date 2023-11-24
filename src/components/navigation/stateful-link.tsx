'use client';

import Link from 'next/link';
import {PropsWithChildren} from 'react';
import {useWatcherStore} from '../../store/watcher-store';

interface StatefulLinkProps {
  href: string;
  externalLink?: boolean;
}

export const StatefulLink = (props: StatefulLinkProps & PropsWithChildren) => {
  const { activateWatcher, deactivateWatcher } = useWatcherStore();

  return (
    <Link href={props.href}
          target={props.externalLink ? "_blank" : undefined}
          rel={props.externalLink ? "noreferrer" : undefined}
          onMouseEnter={() => activateWatcher()}
          onMouseLeave={() => deactivateWatcher()}>
      {props.children}
    </Link>
  );
}
