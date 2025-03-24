'use client'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <div className="container">
        <div className="text-center mb-5">
          <Link href="/" className="d-inline-block logo-link">
            <div className="logo-placeholder">
              <img 
                src="/images/smallbolt.png" 
                alt="Teleport Logo" 
                className="header-logo"
                style={{ width: '52px', height: '52px' }}
              />
            </div>
          </Link>
          <h1 className="game-title mb-4">How Teleport Works</h1>
          <p className="game-subtitle">Revolutionary P2P Mobile Connectivity Sharing Platform</p>
        </div>

        <div className="row g-4">
          {/* Step 1 */}
          <div className="col-md-4">
            <div className="game-card">
              <div className="step-number">01</div>
              <h2 className="step-title">Share Your Connection</h2>
              <p className="step-description">
                Download our secure mobile app and enable Teleport to share your mobile data connection with nearby users. 
                Our intelligent bandwidth management system ensures you maintain full control over your data usage and network performance.
              </p>
              <div className="game-card-footer">
                <span className="power-up">Earn Rewards</span>
                <span className="difficulty">Easy Setup</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-4">
            <div className="game-card">
              <div className="step-number">02</div>
              <h2 className="step-title">Earn Rewards</h2>
              <p className="step-description">
                Earn Teleport tokens (TPT) for every gigabyte of data shared. Our dynamic reward system adjusts based on:
                • Network demand in your area
                • Data transfer quality
                • Contribution duration
                • Market rates
              </p>
              <div className="game-card-footer">
                <span className="power-up">Flexible Earnings</span>
                <span className="difficulty">Market-Based</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-4">
            <div className="game-card">
              <div className="step-number">03</div>
              <h2 className="step-title">Compound Your Earnings</h2>
              <p className="step-description">
                Maximize your returns by depositing Teleport tokens into Compound Finance's lending pools. 
                Earn additional interest while contributing to the growth of decentralized mobile connectivity.
              </p>
              <div className="game-card-footer">
                <span className="power-up">Compound Interest</span>
                <span className="difficulty">Smart Investment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="security-section">
          <h2 className="security-title">Enterprise-Grade Security</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="security-card">
                <div className="security-feature">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h3>End-to-End Encryption</h3>
                    <p>All data transfers are protected with military-grade encryption, ensuring your connection remains private and secure.</p>
                  </div>
                </div>
                <div className="security-feature">
                  <i className="fas fa-network-wired"></i>
                  <div>
                    <h3>Smart Bandwidth Management</h3>
                    <p>Our AI-powered system automatically optimizes bandwidth allocation to maintain your primary connection quality.</p>
                  </div>
                </div>
                <div className="security-feature">
                  <i className="fas fa-user-shield"></i>
                  <div>
                    <h3>Privacy Controls</h3>
                    <p>Granular privacy settings allow you to control exactly how and when your connection is shared.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="security-card">
                <div className="security-feature">
                  <i className="fas fa-link"></i>
                  <div>
                    <h3>Blockchain Technology</h3>
                    <p>All transactions and rewards are recorded on the blockchain, ensuring transparency and immutability.</p>
                  </div>
                </div>
                <div className="security-feature">
                  <i className="fas fa-chart-line"></i>
                  <div>
                    <h3>Real-Time Analytics</h3>
                    <p>Monitor your earnings, data usage, and network performance through our intuitive dashboard.</p>
                  </div>
                </div>
                <div className="security-feature">
                  <i className="fas fa-handshake"></i>
                  <div>
                    <h3>Dedicated Network</h3>
                    <p>Automated rewards distribution and compound interest calculations through a secure dedicated network.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <a href="/start" className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
            Start Earning Today
          </a>
        </div>
      </div>
    </div>
  )
} 