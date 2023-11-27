'use client';

import './globals.scss';
import {Navbar} from '../components/navbar/navbar';
import {AnimatedBackground} from '../components/background/animated-background';
import {SocialBar} from '../components/background/social-bar';
import {ReactNode, useEffect, useState} from 'react';
import {Analytics} from '@vercel/analytics/react';
import {Fira_Code} from 'next/font/google';
import {SplashScreen} from '../components/splash-screen';

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
  const [isLoadingSplash, setIsLoadingSplash] = useState(true);
  const [isLoadingNavbar, setIsLoadingNavbar] = useState(true);

  useEffect(() => {
    if (isLoadingSplash) return;
  }, [isLoadingSplash]);

  return (
    <html lang='en' className={firaCodeFont.className}>
      <body>
      { isLoadingSplash ? (
        <SplashScreen onFinishLoading={() => setIsLoadingSplash(false)}/>
        ) : (
          <>
            <Navbar onDoneLoading={() => setIsLoadingNavbar(false)}/>
            <AnimatedBackground/>
            {!isLoadingNavbar && (
              <div className="context-container">
                <div className="context">
                  {children}
                </div>
              </div>
            )}
            <SocialBar/>
          </>
      )}
        <Analytics/>
      </body>
    </html>
  )
}
