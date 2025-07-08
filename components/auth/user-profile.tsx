"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/context/auth-context"
import { LogOut, User } from "lucide-react"
import { supabase } from '@/lib/supabase';

export function UserProfile() {
  const { user, signOut } = useAuth()

  if (!user) return null

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          User Profile
        </CardTitle>
        <CardDescription>Your account information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Email</p>
          <p className="text-sm">{user.email}</p>
        </div>

        {user.user_metadata?.full_name && (
          <div>
            <p className="text-sm font-medium text-gray-500">Full Name</p>
            <p className="text-sm">{user.user_metadata.full_name}</p>
          </div>
        )}

        <div>
          <p className="text-sm font-medium text-gray-500">Member Since</p>
          <p className="text-sm">{new Date(user.user_metadata.created_at).toLocaleDateString()}</p>
        </div>

        <Button onClick={signOut} variant="outline" className="w-full bg-transparent">
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </CardContent>
    </Card>
  )
}
