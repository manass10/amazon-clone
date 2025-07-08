"use client"

import Link from "next/link"
import { Search, ShoppingCart, MapPin } from "lucide-react"
import { useCart } from "../lib/cart-context"

export function Navbar() {
  const { totalItems } = useCart()

  return (
    <div className="bg-gray-900 text-white">
      {/* Top navbar */}
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          amazon
        </Link>

        {/* Location */}
        <div className="hidden md:flex items-center text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <div>
            <div className="text-xs text-gray-300">Deliver to</div>
            <div className="font-bold">New York 10001</div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <select className="bg-gray-200 text-black px-3 py-2 rounded-l-md text-sm">
              <option>All</option>
              <option>Electronics</option>
              <option>Books</option>
              <option>Fashion</option>
            </select>
            <input type="text" placeholder="Search Amazon" className="flex-1 px-4 py-2 text-black" />
            <button className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-r-md">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6">
          <Link href="/signin" className="text-sm hover:underline">
            <div className="text-xs">Hello, sign in</div>
            <div className="font-bold">Account & Lists</div>
          </Link>
          <Link href="/orders" className="text-sm hover:underline">
            <div className="text-xs">Returns</div>
            <div className="font-bold">& Orders</div>
          </Link>
          <Link href="/cart" className="flex items-center hover:underline">
            <ShoppingCart className="w-6 h-6 mr-1" />
            <span className="font-bold">Cart</span>
            <span className="bg-orange-400 text-black rounded-full px-2 py-1 text-xs ml-1">{totalItems}</span>
          </Link>
        </div>
      </div>

      {/* Sub navbar */}
      <div className="bg-gray-800 px-4 py-2">
        <div className="flex items-center space-x-6 text-sm">
          <button className="hover:underline">All</button>
          <Link href="/products" className="hover:underline">
            Today's Deals
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
    </div>
  )
}
