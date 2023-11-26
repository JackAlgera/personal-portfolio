'use client';

import './globals.scss';
import {Navbar} from '../components/navbar/navbar';
import {AnimatedBackground} from '../components/background/animated-background';
import {SocialBar} from '../components/background/social-bar';
import {ReactNode, useEffect, useState} from 'react';
import {Analytics} from '@vercel/analytics/react';
import {usePathname} from 'next/navigation';
import SplashScreen from '../components/splash-screen';
import {Fira_Code} from 'next/font/google';

const firaCodeFont = Fira_Code({
  weight: "400",
  display: 'swap',
  subsets: ['latin'],
})

// export const metadata: Metadata = {
//   title: 'Jack\'s portfolio',
//   description: 'Jack\'s personal portfolio website, created from scratch using Next.js and React.',
// }

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  const isHome = usePathname() === '/';
  // const [isLoading, setIsLoading] = useState(isHome);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang='en' className={firaCodeFont.className}>
      <body>
      { isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)}/>
        ) : (
          <>
            <Navbar/>
            <AnimatedBackground/>
            <div className="context-container">
              <div className="context">
                {children}
              </div>
            </div>
            <SocialBar/>
          </>
      )}
        <Analytics/>
      </body>
    </html>
  )
}
