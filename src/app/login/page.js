'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    // For now, we'll just redirect to the dashboard
    window.location.href = '/dashboard'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="login-container">
      <div className="container py-5">
        <div className="text-center mb-5">
          <a href="/" className="d-inline-block logo-link">
            <div className="logo-placeholder mb-4">
              <img 
                src="/images/smallbolt.png" 
                alt="Teleport Logo" 
                className="header-logo"
              />
            </div>
          </a>
          <h1 className="game-title mb-4">Login</h1>
          <p className="game-subtitle">Enter your credentials to continue</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="game-card login-card">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label game-label">Email</label>
                  <input
                    type="email"
                    className="form-control game-input"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label game-label">Password</label>
                  <input
                    type="password"
                    className="form-control game-input"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                  />
                </div>
                <div className="d-grid gap-3 mt-4">
                  <button type="submit" className="btn btn-primary btn-lg game-button">
                    Connect Wallet
                  </button>
                  <Link href="/start" className="btn btn-outline-primary game-button">
                    Create New Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 