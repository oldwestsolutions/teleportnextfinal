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
          <p className="game-subtitle">Revolutionary Phone Service Staking Platform on Compound Finance</p>
        </div>

        <div className="row g-4">
          {/* Step 1 */}
          <div className="col-md-4">
            <div className="game-card">
              <div className="step-number">01</div>
              <h2 className="step-title">Stake Your Phone Service</h2>
              <p className="step-description">
                Download our secure mobile app and stake your monthly phone service in the Compound Finance blockchain network. 
                Our dedicated network ensures your staking is secure and automatically managed for optimal returns.
              </p>
              <div className="game-card-footer">
                <span className="power-up">Smart Staking</span>
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
                Earn Teleport tokens (TPT) based on your staked phone service amount. Our dynamic reward system adjusts based on:
                • Staking amount
                • Staking duration
                • Market performance
                • Compound rates
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
                Maximize your returns through Compound Finance's advanced DeFi protocols. 
                Your staked phone service and earned tokens automatically generate additional yield in the lending pools.
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
                    <h3>Dedicated Secure Network</h3>
                    <p>Your staked phone service is protected by our dedicated secure network with enterprise-grade encryption.</p>
                  </div>
                </div>
                <div className="security-feature">
                  <i className="fas fa-network-wired"></i>
                  <div>
                    <h3>Automated Staking Management</h3>
                    <p>Our AI-powered system automatically optimizes your staking position for maximum returns.</p>
                  </div>
                </div>
                <div className="security-feature">
                  <i className="fas fa-user-shield"></i>
                  <div>
                    <h3>Staking Controls</h3>
                    <p>Granular control over your staking parameters and withdrawal options.</p>
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
                    <p>All staking transactions and rewards are recorded on the Compound Finance blockchain, ensuring transparency.</p>
                  </div>
                </div>
                <div className="security-feature">
                  <i className="fas fa-chart-line"></i>
                  <div>
                    <h3>Real-Time Analytics</h3>
                    <p>Monitor your staking earnings, APY, and market performance through our intuitive dashboard.</p>
                  </div>
                </div>
                <div className="security-feature">
                  <i className="fas fa-handshake"></i>
                  <div>
                    <h3>Compound Finance Integration</h3>
                    <p>Direct integration with Compound Finance's DeFi protocols for automated yield optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <a href="/start" className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
            Start Staking Today
          </a>
        </div>
      </div>
    </div>
  )
} 