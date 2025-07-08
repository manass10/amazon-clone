import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Truck, Package } from "lucide-react"

export default function OrderConfirmationPage() {
  const orderItems = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: 79.99,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "Smart Watch Series 8",
      price: 299.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const orderDetails = {
    orderId: "AMZ-2024-001234567",
    orderDate: "March 12, 2024",
    estimatedDelivery: "March 15, 2024",
    total: 467.98,
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Success Message */}
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
        <p className="text-lg text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
      </div>

      {/* Order Details */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600">Order Number</p>
            <p className="font-semibold">{orderDetails.orderId}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Order Date</p>
            <p className="font-semibold">{orderDetails.orderDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total</p>
            <p className="font-semibold text-lg">${orderDetails.total.toFixed(2)}</p>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <Truck className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <p className="font-semibold text-blue-800">Estimated Delivery</p>
              <p className="text-blue-700">{orderDetails.estimatedDelivery}</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Items Ordered</h3>
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <Package className="w-6 h-6 text-orange-600 mr-3 mt-1" />
            <div>
              <p className="font-semibold">Order Processing</p>
              <p className="text-gray-600 text-sm">We're preparing your items for shipment</p>
            </div>
          </div>
          <div className="flex items-start">
            <Truck className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="font-semibold">Shipping Updates</p>
              <p className="text-gray-600 text-sm">You'll receive tracking information via email</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
            <div>
              <p className="font-semibold">Delivery</p>
              <p className="text-gray-600 text-sm">Your order will arrive by {orderDetails.estimatedDelivery}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-center font-semibold"
        >
          Continue Shopping
        </Link>
        <Link
          href="/orders"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg text-center font-semibold"
        >
          View My Orders
        </Link>
      </div>

      {/* Customer Service */}
      <div className="text-center mt-8 text-sm text-gray-600">
        <p>
          Need help with your order?{" "}
          <Link href="/support" className="text-blue-600 hover:underline">
            Contact Customer Service
          </Link>
        </p>
      </div>
    </div>
  )
}
