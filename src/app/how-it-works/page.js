export default function HowItWorks() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">How Teleport Works</h1>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
              <h2 className="text-2xl font-semibold">Share Your Connection</h2>
            </div>
            <p className="text-gray-300">
              Download our mobile app and allow Teleport to share your mobile data connection with others in your area. 
              You maintain full control over your data usage and can stop sharing at any time.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">2</div>
              <h2 className="text-2xl font-semibold">Earn Rewards</h2>
            </div>
            <p className="text-gray-300">
              For every gigabyte of data shared, you earn Teleport tokens (TPT). The more you share, the more you earn. 
              Rewards are calculated based on your data usage and the current market rates.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">3</div>
              <h2 className="text-2xl font-semibold">Compound Your Earnings</h2>
            </div>
            <p className="text-gray-300">
              Use Compound Finance to earn additional interest on your Teleport tokens. Deposit your rewards into Compound's 
              lending pools to earn passive income while helping others access mobile connectivity.
            </p>
          </div>

          {/* Security Section */}
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Security & Privacy</h2>
            <p className="text-gray-300">
              Your privacy and security are our top priorities. We use end-to-end encryption for all data transfers, 
              and your personal information is never shared with third parties. The platform is built on Ethereum's 
              blockchain, ensuring transparency and security for all transactions.
            </p>
          </div>

          {/* Get Started Section */}
          <div className="text-center">
            <a 
              href="/dashboard" 
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-colors"
            >
              Start Earning Today
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 