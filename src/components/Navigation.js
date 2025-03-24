'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  // Hide navigation on these pages
  if (pathname === '/how-it-works' || pathname === '/login') {
    return null
  }

  return (
    <header className="bubble-header">
      <div className="bubble-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-8 col-md-6 d-flex align-items-center">
              <div className="logo-placeholder me-2 me-md-3">
                <img 
                  src="/images/smallbolt.png" 
                  alt="Teleport Logo" 
                  className="header-logo"
                />
              </div>
              <div>
                <h1 className="header-title mb-0">Teleport</h1>
                <p className="header-subtitle mb-0">P2P Mobile Connectivity</p>
              </div>
            </div>
            <div className="col-4 col-md-6 text-end">
              <Link href="/login" className="btn btn-warning connect-wallet-btn text-decoration-none">
                <span className="d-block">Connect</span>
                <span className="d-block">Wallet</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 