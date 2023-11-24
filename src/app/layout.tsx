'use state';

import './globals.scss';
import {Navbar} from '../components/navbar/navbar';
import {AnimatedBackground} from '../components/background/animated-background';
import {SocialBar} from '../components/background/social-bar';

// const font = Montserrat({
//   weight: "500",
//   preload: false
// })

export const metadata = {
  title: 'Jack\'s portfolio',
  description: 'Jack\'s personal portfolio website, created from scratch using Next.js and React.',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <AnimatedBackground />
        <div className="context-container">
          {children}
        </div>
        <SocialBar />
      </body>
    </html>
  )
}
