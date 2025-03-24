'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const hideNavigation = ['/start', '/login', '/how-it-works'].includes(pathname)

  return (
    <>
      {!hideNavigation && <Navigation />}
      <main className="min-vh-100">
        {children}
      </main>
    </>
  )
} 