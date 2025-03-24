import { Inter, Rock_Salt } from 'next/font/google'
import './globals.css'
import ClientLayout from '../components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })
const rockSalt = Rock_Salt({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rock-salt'
})

export const metadata = {
  title: 'Teleport - P2P Mobile Connectivity Rewards',
  description: 'Earn rewards by sharing your mobile connectivity through Compound Finance',
  icons: {
    icon: '/images/smallbolt.png',
    shortcut: '/images/smallbolt.png',
    apple: '/images/smallbolt.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/smallbolt.png" />
      </head>
      <body className={`${inter.className} ${rockSalt.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 