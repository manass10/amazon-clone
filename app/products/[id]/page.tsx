"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Heart, Share2, ChevronLeft, ChevronRight, Shield, Truck, RotateCcw } from "lucide-react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = {
    id: params.id,
    title: "Wireless Bluetooth Headphones - Premium Sound Quality",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 2156,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    description: `Experience premium sound quality with these wireless Bluetooth headphones. 
    Featuring advanced noise cancellation technology, 30-hour battery life, and comfortable over-ear design. 
    Perfect for music lovers, commuters, and professionals who demand the best audio experience.`,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge: 5 minutes for 3 hours",
      "Comfortable over-ear design",
      "High-quality drivers",
      "Built-in microphone",
    ],
    inStock: true,
    deliveryDate: "Tuesday, March 15",
    returnPolicy: "30-day return policy",
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative mb-4">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={product.title}
              width={500}
              height={500}
              className="w-full h-96 object-cover rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  index === currentImageIndex ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product view ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-blue-600 hover:underline ml-2">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-red-600">${product.price}</span>
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            </div>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <span className="text-green-600 font-semibold">✓ In Stock</span>
            ) : (
              <span className="text-red-600 font-semibold">Out of Stock</span>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg">
              Add to Cart
            </button>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg">
              Buy Now
            </button>
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-600 hover:text-gray-800">
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-800">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Delivery & Return Info */}
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center">
              <Truck className="w-5 h-5 mr-3 text-green-600" />
              <div>
                <div className="font-semibold">Free Delivery</div>
                <div className="text-sm text-gray-600">Arrives {product.deliveryDate}</div>
              </div>
            </div>
            <div className="flex items-center">
              <RotateCcw className="w-5 h-5 mr-3 text-blue-600" />
              <div>
                <div className="font-semibold">Free Returns</div>
                <div className="text-sm text-gray-600">{product.returnPolicy}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-3 text-purple-600" />
              <div>
                <div className="font-semibold">Warranty</div>
                <div className="text-sm text-gray-600">1-year manufacturer warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description & Features */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
