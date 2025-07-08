"use client"

import { Header } from "@/components/navigation/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function TodaysDealsPage() {
  const { addToCart } = useCart()

  const deals = [
    {
      id: 201,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 129.99,
      discount: 38,
      rating: 4.5,
      reviews: 1234,
      image: "/placeholder.svg?height=200&width=200",
      timeLeft: "6h 23m",
      claimed: 45,
    },
    {
      id: 202,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 299.99,
      discount: 33,
      rating: 4.3,
      reviews: 856,
      image: "/placeholder.svg?height=200&width=200",
      timeLeft: "4h 15m",
      claimed: 67,
    },
    {
      id: 203,
      name: "Portable Laptop Stand",
      price: 29.99,
      originalPrice: 49.99,
      discount: 40,
      rating: 4.7,
      reviews: 2341,
      image: "/placeholder.svg?height=200&width=200",
      timeLeft: "8h 45m",
      claimed: 23,
    },
    {
      id: 204,
      name: "USB-C Hub Adapter",
      price: 39.99,
      originalPrice: 59.99,
      discount: 33,
      rating: 4.2,
      reviews: 567,
      image: "/placeholder.svg?height=200&width=200",
      timeLeft: "2h 30m",
      claimed: 78,
    },
    {
      id: 205,
      name: "Wireless Phone Charger",
      price: 24.99,
      originalPrice: 39.99,
      discount: 38,
      rating: 4.4,
      reviews: 1876,
      image: "/placeholder.svg?height=200&width=200",
      timeLeft: "5h 12m",
      claimed: 34,
    },
    {
      id: 206,
      name: "Bluetooth Speaker",
      price: 89.99,
      originalPrice: 139.99,
      discount: 36,
      rating: 4.6,
      reviews: 934,
      image: "/placeholder.svg?height=200&width=200",
      timeLeft: "7h 08m",
      claimed: 56,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{"Today's Deals"}</h1>
          <p className="text-lg text-gray-600">Limited time offers - grab them before they're gone!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-600 text-white">{deal.discount}% OFF</Badge>
                  <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-medium flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {deal.timeLeft}
                  </div>
                </div>

                <h3 className="font-semibold mb-2 line-clamp-2">{deal.name}</h3>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(deal.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({deal.reviews})</span>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-red-600">${deal.price}</span>
                  <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>{deal.claimed}% claimed</span>
                    <span>{100 - deal.claimed}% remaining</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-400 h-2 rounded-full" style={{ width: `${deal.claimed}%` }}></div>
                  </div>
                </div>

                <Button
                  className="w-full bg-orange-400 hover:bg-orange-500"
                  onClick={() =>
                    addToCart({
                      id: deal.id,
                      name: deal.name,
                      price: deal.price,
                      image: deal.image,
                      inStock: true,
                    })
                  }
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
