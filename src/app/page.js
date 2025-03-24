import Link from 'next/link'

export default function Home() {
  return (
    <div className="vh-100 overflow-hidden">
      {/* Hero Section */}
      <section className="flex-grow-1 d-flex align-items-center px-3 px-md-4">
        <div className="lightning"></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient opacity-20"></div>
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* Left column - can be used for an image or additional content */}
            </div>
            <div className="col-md-6">
              <div className="mt-4 mt-md-5 pt-md-5 hero-content-box" style={{ marginTop: '8rem !important' }}>
                <h1 className="hero-title mb-4 text-center text-md-start">
                  Mobile Connectivity
                  <br />
                  <span className="text-warning">Rewards</span>
                </h1>
                <p className="lead text-warning mb-5 fw-bold text-center text-md-start">
                  Join the future of P2P mobile connectivity sharing powered by Compound Finance
                </p>
                <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 align-items-stretch align-items-md-start">
                  <Link 
                    href="/start" 
                    className="btn btn-primary btn-lg px-5 py-3 rounded-pill w-100 w-md-auto"
                  >
                    Start
                  </Link>
                  <Link 
                    href="/how-it-works" 
                    className="btn btn-outline-primary btn-lg px-5 py-3 rounded-pill w-100 w-md-auto"
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
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <div className="d-flex flex-column align-items-center align-items-md-start">
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