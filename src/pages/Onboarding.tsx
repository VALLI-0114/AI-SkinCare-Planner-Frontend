import { useNavigate } from 'react-router-dom'

export default function Onboarding() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#efe8de] flex items-center justify-center p-6 text-[#001534]">
      <div className="max-w-md w-full bg-[#fdfbf5] p-8 rounded-3xl shadow-xl border border-[#f0e8dc] text-center">
        <h1 className="text-3xl font-serif mb-4">Welcome to AI Skincare Planner</h1>
        <p className="text-slate-600 mb-6">Let's set up your skin profile to get personalized AI recommendations.</p>
        <button
          onClick={() => navigate('/dashboard/screening')}
          className="w-full bg-[#9f7c46] text-white p-3 rounded-xl font-bold shadow hover:bg-[#856535] transition"
        >
          Start Skin Screening
        </button>
      </div>
    </div>
  )
}
