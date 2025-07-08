"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, Menu, MapPin } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import { useCart } from "@/context/cart-context"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const { user, signOut } = useAuth()
  const { getTotalItems } = useCart()

  return (
    <header className="bg-gray-900 text-white">
      {/* Top bar */}
      <div className="bg-gray-800 px-4 py-1">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              Deliver to New York 10001
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span>Hello, {user.user_metadata?.full_name || user.email}</span>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Link href="/auth">
                <Button variant="ghost" size="sm">
                  Hello, Sign in
                </Button>
              </Link>
            )}
            <Link href="/orders" className="hover:underline">
              Returns & Orders
            </Link>
            <Link href="/cart" className="hover:underline">
              Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center space-x-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            amazon
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <select className="bg-gray-200 text-gray-900 px-3 py-2 rounded-l border-r border-gray-300">
                <option>All</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Clothing</option>
              </select>
              <Input
                type="text"
                placeholder="Search Amazon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-none border-0 bg-white text-gray-900"
              />
              <Button className="rounded-l-none bg-orange-400 hover:bg-orange-500">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="flex items-center">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <Badge className="absolute -top-2 -right-2 bg-orange-400 text-xs">{getTotalItems()}</Badge>
              </div>
              <span className="ml-1">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="bg-gray-700 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 text-sm">
          <Button variant="ghost" size="sm" className="flex items-center">
            <Menu className="h-4 w-4 mr-1" />
            All
          </Button>
          <Link href="/todays-deals" className="hover:underline">
            {"Today's Deals"}
          </Link>
          <Link href="/customer-service" className="hover:underline">
            Customer Service
          </Link>
          <Link href="/registry" className="hover:underline">
            Registry
          </Link>
          <Link href="/gift-cards" className="hover:underline">
            Gift Cards
          </Link>
          <Link href="/sell" className="hover:underline">
            Sell
          </Link>
        </div>
      </div>
    </header>
  )
}

