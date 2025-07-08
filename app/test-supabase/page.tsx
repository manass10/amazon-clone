"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestSupabase() {
  const [status, setStatus] = useState('Loading...')
  const [error, setError] = useState<string | null>(null)
  const [envVars, setEnvVars] = useState<any>({})

  useEffect(() => {
    async function testSupabase() {
      try {
        // Check environment variables
        setEnvVars({
          NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Not set',
          NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Not set'
        })

        // Test Supabase connection
        const { data, error } = await supabase
          .from('users')
          .select('count')
          .limit(1)

        if (error) {
          setError(error.message)
          setStatus('❌ Connection Failed')
        } else {
          setStatus('✅ Connection Successful')
        }
      } catch (err: any) {
        setError(err.message)
        setStatus('❌ Error')
      }
    }

    testSupabase()
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Supabase Configuration Test</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">Environment Variables:</h2>
          <div className="space-y-1">
            <div>NEXT_PUBLIC_SUPABASE_URL: {envVars.NEXT_PUBLIC_SUPABASE_URL}</div>
            <div>NEXT_PUBLIC_SUPABASE_ANON_KEY: {envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY}</div>
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">Connection Status:</h2>
          <div className="text-lg">{status}</div>
        </div>

        {error && (
          <div className="p-4 border border-red-300 bg-red-50 rounded">
            <h2 className="font-semibold mb-2 text-red-800">Error:</h2>
            <div className="text-red-700">{error}</div>
          </div>
        )}

        <div className="p-4 border rounded bg-blue-50">
          <h2 className="font-semibold mb-2">Troubleshooting Tips:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Make sure .env.local is in the project root</li>
            <li>Restart the development server after creating .env.local</li>
            <li>Check that your Supabase URL starts with https://</li>
            <li>Verify you're using the anon key, not the service role key</li>
            <li>Check your Supabase project is active</li>
          </ul>
        </div>
      </div>
    </div>
  )
}