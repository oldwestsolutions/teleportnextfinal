'use client'

export default function Navigation() {
  return (
    <header className="bubble-header">
      <div className="bubble-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex align-items-center">
              <div className="logo-placeholder me-3">
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
            <div className="col-md-6 text-end">
              <button className="btn btn-warning btn-lg connect-wallet-btn">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 