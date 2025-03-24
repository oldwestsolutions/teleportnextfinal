import Link from 'next/link'

export default function Home() {
  return (
    <div className="vh-100 overflow-hidden">
      {/* Hero Section */}
      <section className="flex-grow-1 d-flex align-items-center px-4">
        <div className="lightning"></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient opacity-20"></div>
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* Left column - can be used for an image or additional content */}
            </div>
            <div className="col-md-6">
              <div className="mt-5 pt-5" style={{ marginTop: '16rem !important' }}>
                <h1 className="hero-title mb-4">
                  Mobile Connectivity
                  <br />
                  <span className="text-warning">Rewards</span>
                </h1>
                <p className="lead text-warning mb-5 fw-bold">
                  Join the future of P2P mobile connectivity sharing powered by Compound Finance
                </p>
                <div className="d-flex gap-4">
                  <Link 
                    href="/start" 
                    className="btn btn-primary btn-lg px-5 py-3 rounded-pill"
                  >
                    Start
                  </Link>
                  <Link 
                    href="/how-it-works" 
                    className="btn btn-outline-primary btn-lg px-5 py-3 rounded-pill"
                  >
                    Learn More
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
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <span className="text-warning small mb-1">Teleport Inc.</span>
              <a href="mailto:contact@teleport.com" className="text-warning small text-decoration-none">contact@teleport.com</a>
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