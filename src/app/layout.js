import { Inter, Rock_Salt } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })
const rockSalt = Rock_Salt({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rock-salt'
})

export const metadata = {
  title: 'Teleport - P2P Mobile Connectivity Rewards',
  description: 'Earn rewards by sharing your mobile connectivity through Compound Finance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rockSalt.variable}`}>
        <Navigation />
        <main className="min-vh-100">
          {children}
        </main>
      </body>
    </html>
  )
} 