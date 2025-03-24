'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Start() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-vh-100 d-flex flex-column start-container">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center mb-4">
              <Link href="/" className="d-inline-block logo-link">
                <div className="logo-placeholder">
                  <img 
                    src="/images/smallbolt.png" 
                    alt="Teleport Logo" 
                    className="header-logo"
                  />
                </div>
              </Link>
            </div>
            <div className="card pixel-card">
              <div className="card-body p-4">
                <h1 className="text-center text-warning mb-4">Get Started</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label text-warning">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phoneNumber" className="form-label text-warning">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+1 (555) 555-5555"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label text-warning">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label text-warning">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Create Account
                    </button>
                    <Link href="/login" className="btn btn-outline-primary">
                      Already have an account? Log in
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 