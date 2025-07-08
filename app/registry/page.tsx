"use client"

import { useState } from "react"
import Image from "next/image"
import { Gift, Heart, Plus, Search, Calendar, Users, Star } from "lucide-react"

export default function RegistryPage() {
  const [activeTab, setActiveTab] = useState("find")

  const registryTypes = [
    {
      type: "wedding",
      title: "Wedding Registry",
      description: "Create your perfect wedding registry",
      icon: "💍",
      benefits: ["Free shipping on registry items", "Thank you list management", "Group gifting options"],
    },
    {
      type: "baby",
      title: "Baby Registry",
      description: "Everything you need for your little one",
      icon: "👶",
      benefits: ["15% completion discount", "Welcome box", "Registry checklist"],
    },
    {
      type: "birthday",
      title: "Birthday Registry",
      description: "Make your birthday wishes come true",
      icon: "🎂",
      benefits: ["Easy sharing", "Surprise me option", "Gift tracking"],
    },
    {
      type: "holiday",
      title: "Holiday Registry",
      description: "Holiday gift lists made simple",
      icon: "🎄",
      benefits: ["Seasonal recommendations", "Family sharing", "Budget tracking"],
    },
  ]

  const sampleRegistries = [
    {
      id: 1,
      name: "Sarah & Mike's Wedding",
      type: "Wedding",
      date: "June 15, 2024",
      location: "New York, NY",
      items: 45,
      purchased: 23,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Emma's Baby Shower",
      type: "Baby",
      date: "April 20, 2024",
      location: "Los Angeles, CA",
      items: 32,
      purchased: 18,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "John's 30th Birthday",
      type: "Birthday",
      date: "March 10, 2024",
      location: "Chicago, IL",
      items: 15,
      purchased: 8,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const popularItems = [
    {
      id: 1,
      name: "KitchenAid Stand Mixer",
      price: 299.99,
      rating: 4.8,
      reviews: 1234,
      image: "/placeholder.svg?height=200&width=200",
      category: "Kitchen",
    },
    {
      id: 2,
      name: "Instant Pot Pressure Cooker",
      price: 89.99,
      rating: 4.7,
      reviews: 2156,
      image: "/placeholder.svg?height=200&width=200",
      category: "Kitchen",
    },
    {
      id: 3,
      name: "Dyson V11 Vacuum",
      price: 599.99,
      rating: 4.6,
      reviews: 892,
      image: "/placeholder.svg?height=200&width=200",
      category: "Home",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <Gift className="w-16 h-16 mx-auto mb-4 text-blue-600" />
        <h1 className="text-4xl font-bold mb-4">Gift Registry</h1>
        <p className="text-xl text-gray-600">Create and find the perfect gift registries</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("find")}
            className={`px-6 py-2 rounded-md ${activeTab === "find" ? "bg-white shadow-sm" : "text-gray-600"}`}
          >
            Find a Registry
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`px-6 py-2 rounded-md ${activeTab === "create" ? "bg-white shadow-sm" : "text-gray-600"}`}
          >
            Create a Registry
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            className={`px-6 py-2 rounded-md ${activeTab === "manage" ? "bg-white shadow-sm" : "text-gray-600"}`}
          >
            Manage Registry
          </button>
        </div>
      </div>

      {/* Find Registry Tab */}
      {activeTab === "find" && (
        <div>
          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Find a Gift Registry</h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" className="border border-gray-300 rounded-lg px-4 py-3" />
                <input type="text" placeholder="Last Name" className="border border-gray-300 rounded-lg px-4 py-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="City or ZIP Code"
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <select className="border border-gray-300 rounded-lg px-4 py-3">
                  <option value="">Registry Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="baby">Baby</option>
                  <option value="birthday">Birthday</option>
                  <option value="holiday">Holiday</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                <Search className="w-5 h-5 inline mr-2" />
                Search Registries
              </button>
            </div>
          </div>

          {/* Sample Registries */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Recent Registries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleRegistries.map((registry) => (
                <div key={registry.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <Image
                    src={registry.image || "/placeholder.svg"}
                    alt={registry.name}
                    width={200}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-semibold mb-2">{registry.name}</h4>
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {registry.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {registry.location}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>
                        {registry.purchased} of {registry.items} items purchased
                      </span>
                      <span>{Math.round((registry.purchased / registry.items) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${(registry.purchased / registry.items) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg">
                    View Registry
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Create Registry Tab */}
      {activeTab === "create" && (
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Create Your Registry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {registryTypes.map((type) => (
              <div key={type.type} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2 mb-6">
                  {type.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                  Create {type.title}
                </button>
              </div>
            ))}
          </div>

          {/* Popular Registry Items */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Popular Registry Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold mb-2">{item.name}</h4>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(item.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">({item.reviews})</span>
                  </div>
                  <div className="text-lg font-bold mb-3">${item.price}</div>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg flex items-center justify-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Registry
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Manage Registry Tab */}
      {activeTab === "manage" && (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold mb-4">No Registries Yet</h2>
          <p className="text-gray-600 mb-6">Create your first registry to get started</p>
          <button
            onClick={() => setActiveTab("create")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Create Registry
          </button>
        </div>
      )}
    </div>
  )
}
