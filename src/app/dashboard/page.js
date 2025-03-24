'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [isSharing, setIsSharing] = useState(false)
  const [rewards, setRewards] = useState({
    total: '0.00',
    available: '0.00',
    compounded: '0.00'
  })

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-gray-400 mb-2">Total Rewards</h3>
            <p className="text-3xl font-bold">{rewards.total} ETH</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-gray-400 mb-2">Available</h3>
            <p className="text-3xl font-bold">{rewards.available} ETH</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-gray-400 mb-2">Compounded</h3>
            <p className="text-3xl font-bold">{rewards.compounded} ETH</p>
          </div>
        </div>

        {/* Connectivity Sharing */}
        <div className="bg-gray-800/50 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-4">Connectivity Sharing</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 mb-2">Status: {isSharing ? 'Active' : 'Inactive'}</p>
              <p className="text-sm text-gray-500">Share your mobile data to earn rewards</p>
            </div>
            <button
              onClick={() => setIsSharing(!isSharing)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                isSharing 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSharing ? 'Stop Sharing' : 'Start Sharing'}
            </button>
          </div>
        </div>

        {/* Compound Finance Integration */}
        <div className="bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Compound Finance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-gray-400 mb-2">Your Deposits</h3>
              <p className="text-2xl font-bold">0.00 ETH</p>
            </div>
            <div>
              <h3 className="text-gray-400 mb-2">APY</h3>
              <p className="text-2xl font-bold">4.5%</p>
            </div>
            <div className="md:col-span-2">
              <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-colors">
                Deposit Rewards
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 