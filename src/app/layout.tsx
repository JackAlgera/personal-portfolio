import './globals.scss';
import {Navbar} from '../components/navbar/navbar';
import {SocialBar} from '../components/social-bar/social-bar';
import {ReactNode} from 'react';
import {Analytics} from '@vercel/analytics/react';
import {Fira_Code} from 'next/font/google';
import {SplashScreen} from '../components/splash-screen';
import {Background} from '../components/backgrounds/main/background';
import {StoresUpdater} from './stores-updater';
import {Metadata} from 'next';
import {ChildrenContainer} from './children-container';
import {SpeedInsights} from '@vercel/speed-insights/next';

const Fira_Code_Font = Fira_Code({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jack\'s portfolio',
  description: 'Jack\'s personal portfolio website, created from scratch using Next.js and React.',
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang='en' className={Fira_Code_Font.className}>
      <body>
        <SplashScreen>
          <Navbar/>
          <Background />
          <ChildrenContainer>
            {children}
          </ChildrenContainer>
          <SocialBar />
        </SplashScreen>
        <Analytics/>
        <SpeedInsights/>
        <StoresUpdater/>
      </body>
    </html>
  )
}
