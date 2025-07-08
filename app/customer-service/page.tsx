"use client"

import { useState } from "react"
import {
  Search,
  Phone,
  Mail,
  MessageCircle,
  HelpCircle,
  Package,
  CreditCard,
  Truck,
  RotateCcw,
  Shield,
  Clock,
} from "lucide-react"

export default function CustomerServicePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const helpCategories = [
    {
      id: "orders",
      title: "Your Orders",
      icon: Package,
      description: "Track packages, view order history, cancel or return items",
      topics: ["Track your package", "Cancel items or orders", "Return or replace items", "Change your order"],
    },
    {
      id: "delivery",
      title: "Delivery & Pickup",
      icon: Truck,
      description: "Delivery options, pickup locations, and shipping information",
      topics: ["Delivery options", "Pickup locations", "Shipping rates & policies", "Delivery issues"],
    },
    {
      id: "returns",
      title: "Returns & Refunds",
      icon: RotateCcw,
      description: "Return items, refund status, and return policies",
      topics: ["Return an item", "Refund status", "Return policies", "Exchange items"],
    },
    {
      id: "account",
      title: "Account & Login",
      icon: Shield,
      description: "Account settings, password, security, and login issues",
      topics: ["Change account settings", "Reset password", "Security settings", "Login issues"],
    },
    {
      id: "payment",
      title: "Payment & Billing",
      icon: CreditCard,
      description: "Payment methods, billing, and charges",
      topics: ["Payment methods", "Billing questions", "Promotional credits", "Gift cards"],
    },
    {
      id: "prime",
      title: "Prime Membership",
      icon: Clock,
      description: "Prime benefits, membership, and subscription management",
      topics: ["Prime benefits", "Manage membership", "Prime Video", "Prime delivery"],
    },
  ]

  const contactOptions = [
    {
      type: "chat",
      title: "Chat",
      description: "Chat with us now",
      icon: MessageCircle,
      available: true,
      waitTime: "< 1 minute",
    },
    {
      type: "phone",
      title: "Phone",
      description: "Call us at 1-888-280-4331",
      icon: Phone,
      available: true,
      waitTime: "2-3 minutes",
    },
    {
      type: "email",
      title: "Email",
      description: "We'll respond within 24 hours",
      icon: Mail,
      available: true,
      waitTime: "24 hours",
    },
  ]

  const filteredCategories =
    selectedCategory === "all" ? helpCategories : helpCategories.filter((cat) => cat.id === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Customer Service</h1>
        <p className="text-xl text-gray-600">How can we help you today?</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for help topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="bg-blue-50 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map((option) => (
            <div key={option.type} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <option.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-3">{option.description}</p>
              <p className="text-sm text-green-600 mb-4">Wait time: {option.waitTime}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                {option.type === "chat" ? "Start Chat" : option.type === "phone" ? "Call Now" : "Send Email"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Help Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Browse Help Topics</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg ${selectedCategory === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            All Topics
          </button>
          {helpCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg ${selectedCategory === category.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <category.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.topics.map((topic, index) => (
                  <li key={index}>
                    <button className="text-blue-600 hover:underline text-left">{topic}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "How do I track my order?",
              answer:
                "You can track your order by going to 'Your Orders' and clicking on the tracking link next to your order.",
            },
            {
              question: "What is your return policy?",
              answer:
                "Most items can be returned within 30 days of delivery. Some items have different return windows.",
            },
            {
              question: "How do I cancel an order?",
              answer:
                "You can cancel an order that hasn't shipped yet by going to 'Your Orders' and selecting 'Cancel items'.",
            },
            {
              question: "How do I change my delivery address?",
              answer:
                "You can change your delivery address in 'Your Account' under 'Your Addresses' before the item ships.",
            },
          ].map((faq, index) => (
            <details key={index} className="bg-white rounded-lg p-4">
              <summary className="font-semibold cursor-pointer flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                {faq.question}
              </summary>
              <p className="mt-3 text-gray-600 ml-7">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
