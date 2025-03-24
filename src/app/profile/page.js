'use client'

import { useState } from 'react'

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    walletAddress: '0x1234...5678',
    dataLimit: '10GB',
    autoCompound: true
  })

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

        <div className="space-y-6">
          {/* Profile Information */}
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Wallet Information */}
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Wallet Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Connected Wallet</label>
                <div className="px-4 py-2 bg-gray-700 rounded-lg">
                  {profile.walletAddress}
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Connect New Wallet
              </button>
            </div>
          </div>

          {/* Sharing Settings */}
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Sharing Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Monthly Data Limit</label>
                <input
                  type="text"
                  value={profile.dataLimit}
                  onChange={(e) => setProfile({ ...profile, dataLimit: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-gray-400">Auto-Compound Rewards</label>
                  <p className="text-sm text-gray-500">Automatically deposit rewards to Compound Finance</p>
                </div>
                <button
                  onClick={() => setProfile({ ...profile, autoCompound: !profile.autoCompound })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    profile.autoCompound ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      profile.autoCompound ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
} 