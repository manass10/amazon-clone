"use client"

import { Header } from "@/components/navigation/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useCart } from "@/context/cart-context"

export default function HomePage() {
  const { addToCart } = useCart()

  const categories = [
    { name: "Electronics", image: "/placeholder.svg?height=200&width=300", link: "/products?category=electronics" },
    { name: "Fashion", image: "/placeholder.svg?height=200&width=300", link: "/products?category=fashion" },
    { name: "Home & Garden", image: "/placeholder.svg?height=200&width=300", link: "/products?category=home" },
    { name: "Books", image: "/placeholder.svg?height=200&width=300", link: "/products?category=books" },
  ]

  const deals = [
    {
      id: 101,
      name: "Wireless Headphones",
      price: 79.99,
      originalPrice: 129.99,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 102,
      name: "Smart Watch",
      price: 199.99,
      originalPrice: 299.99,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 103,
      name: "Laptop Stand",
      price: 29.99,
      originalPrice: 49.99,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 104,
      name: "Coffee Maker",
      price: 89.99,
      originalPrice: 139.99,
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Banner */}
      <div className="relative">
        <img src="/placeholder.svg?height=400&width=1200" alt="Hero banner" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-white max-w-md">
              <h1 className="text-4xl font-bold mb-4">Great deals on electronics</h1>
              <p className="text-lg mb-6">Shop the latest tech at unbeatable prices</p>
              <Link href="/products">
                <Button size="lg" className="bg-orange-400 hover:bg-orange-500">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.link}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="font-semibold text-center">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Today's Deals */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{"Today's Deals"}</h2>
            <Link href="/todays-deals">
              <Button variant="outline">See all deals</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <img
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.name}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="font-semibold mb-2">{deal.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-red-600">${deal.price}</span>
                    <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                  </div>
                  <Button
                    className="w-full mt-4 bg-orange-400 hover:bg-orange-500"
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
        </section>
      </div>
    </div>
  )
}
