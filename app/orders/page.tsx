"use client"

import { Header } from "@/components/navigation/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Truck, CheckCircle, RotateCcw } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import Link from "next/link"

export default function OrdersPage() {
  const { user } = useAuth()

  const orders = [
    {
      id: "AMZ-001-2024",
      date: "2024-01-15",
      status: "Delivered",
      total: 279.98,
      items: [
        {
          name: "Wireless Bluetooth Headphones",
          price: 79.99,
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Smart Fitness Watch",
          price: 199.99,
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
    {
      id: "AMZ-002-2024",
      date: "2024-01-10",
      status: "In Transit",
      total: 89.99,
      items: [
        {
          name: "Bluetooth Speaker",
          price: 89.99,
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
    {
      id: "AMZ-003-2024",
      date: "2024-01-05",
      status: "Processing",
      total: 149.98,
      items: [
        {
          name: "Laptop Stand",
          price: 29.99,
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "USB-C Hub",
          price: 39.99,
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Wireless Charger",
          price: 24.99,
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "In Transit":
        return <Truck className="h-5 w-5 text-blue-600" />
      case "Processing":
        return <Package className="h-5 w-5 text-orange-600" />
      default:
        return <Package className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "In Transit":
        return "bg-blue-100 text-blue-800"
      case "Processing":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card>
            <CardContent className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Sign in to view your orders</h2>
              <p className="text-gray-600 mb-6">You need to be signed in to access your order history.</p>
              <Link href="/auth">
                <Button className="bg-orange-400 hover:bg-orange-500">Sign In</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span>Order #{order.id}</span>
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-1">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                    <span className="font-semibold">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 pb-4 border-b last:border-b-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        <p className="font-semibold">${item.price}</p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        {order.status === "Delivered" && (
                          <>
                            <Button variant="outline" size="sm">
                              <RotateCcw className="h-4 w-4 mr-2" />
                              Return
                            </Button>
                            <Button variant="outline" size="sm">
                              Buy Again
                            </Button>
                          </>
                        )}
                        {order.status === "In Transit" && (
                          <Button variant="outline" size="sm">
                            Track Package
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t">
                  <Button variant="outline">View Order Details</Button>
                  <Button variant="outline">Download Invoice</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {orders.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-2xl font-bold mb-4">No orders yet</h2>
              <p className="text-gray-600 mb-6">{"You haven't placed any orders yet. Start shopping!"}</p>
              <Link href="/products">
                <Button className="bg-orange-400 hover:bg-orange-500">Start Shopping</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
