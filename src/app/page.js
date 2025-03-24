import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Hero Section */}
      <section className="flex-grow-1 d-flex align-items-start align-items-md-center px-3 px-md-4">
        <div className="lightning"></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient opacity-20"></div>
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className="hero-content-box">
                <h1 className="hero-title mb-4">
                  Mobile Connectivity
                  <br />
                  <span className="text-warning">Rewards</span>
                </h1>
                <p className="lead text-warning mb-5 fw-bold">
                  Join the future of P2P mobile connectivity sharing powered by Compound Finance
                </p>
                <div className="d-flex flex-column gap-4 align-items-center justify-content-center">
                  <Link 
                    href="/start" 
                    className="btn btn-primary btn-lg px-5 py-3 rounded-pill w-75"
                  >
                    Start
                  </Link>
                  <Link 
                    href="/how-it-works" 
                    className="btn btn-outline-primary btn-lg px-5 py-3 rounded-pill w-75"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <span className="text-warning small mb-1">Teleport Communications LLC</span>
              <a href="mailto:support@teleportcommunications.com" className="text-warning small text-decoration-none">support@teleportcommunications.com</a>
            </div>
            <div>
              <span className="text-warning small">Rewards Powered by Compound</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 