'use client'

import { useActionState } from 'react'
import { login } from '@/app/actions/auth'
import Image from 'next/image'

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, null)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-10 shadow-lg w-full max-w-md border border-gray-200">
        <div className="flex justify-center mb-10">
          <div className="relative w-48 h-16">
            <Image 
              src="/logos/Keeway-Logo-I-Slogan-Black.png" 
              alt="Keeway Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </div>
        <h1 className="text-xl text-black font-zuume font-normal italic mb-8 text-center uppercase tracking-widest ![text-shadow:none] ![-webkit-text-stroke:0]">
          Admin Panel
        </h1>
        
        <form action={formAction} className="space-y-5">
          <div>
            <label htmlFor="password" className="block text-gray-500 mb-2 font-saira text-sm uppercase tracking-wider">
              Lozinka
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-track-cyan focus:ring-1 focus:ring-track-cyan transition-colors font-saira"
              placeholder="Unesite lozinku..."
            />
          </div>
          
          {state?.error && (
            <p className="text-red-500 text-sm mt-2 font-saira">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-black text-white font-zuume font-normal italic uppercase tracking-widest py-4 hover:bg-track-cyan transition-colors disabled:opacity-50 mt-8 text-sm"
          >
            {pending ? 'Prijava u toku...' : 'Prijavi se'}
          </button>
        </form>
      </div>
    </div>
  )
}
