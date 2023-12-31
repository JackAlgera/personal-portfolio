'use client';

import './globals.scss';
import {Navbar} from '../components/navbar/navbar';
import {SocialBar} from '../components/social-bar/social-bar';
import {ReactNode, useEffect, useState} from 'react';
import {Analytics} from '@vercel/analytics/react';
import {Fira_Code} from 'next/font/google';
import {SplashScreen} from '../components/splash-screen';
import {useMouseStore} from '../store/mouse-store';
import {Background} from '../components/backgrounds/main/background';

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
  const { updateMouse } = useMouseStore();

  useEffect(() => {
    const handleWindowMouseMove = event => {
      const mouseX = event.x;
      const mouseY = event.y;
      updateMouse(mouseX, mouseY);
    };

    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, [updateMouse]);

  return (
    <html lang='en' className={firaCodeFont.className}>
      <body>
      { isLoadingSplash ? (
        <SplashScreen onFinishLoading={() => setIsLoadingSplash(false)}/>
        ) : (
          <>
            <Navbar onDoneLoading={() => setIsLoadingNavbar(false)}/>
            <Background />
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
