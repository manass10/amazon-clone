import { Package, TrendingUp, Shield, Users, DollarSign, Truck, BarChart3, Headphones } from "lucide-react"

export default function SellPage() {
  const sellingOptions = [
    {
      title: "Individual Seller",
      description: "Perfect for occasional sellers",
      price: "$0.99 per item sold",
      features: [
        "List up to 40 items per month",
        "Access to basic selling tools",
        "Customer service support",
        "Payment processing included",
      ],
      recommended: false,
    },
    {
      title: "Professional Seller",
      description: "Best for businesses and frequent sellers",
      price: "$39.99 per month",
      features: [
        "Unlimited listings",
        "Advanced selling tools",
        "Bulk listing and inventory management",
        "Access to advertising tools",
        "Priority customer support",
        "Detailed analytics and reports",
      ],
      recommended: true,
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Reach Millions of Customers",
      description: "Access to Amazon's massive customer base worldwide",
    },
    {
      icon: Truck,
      title: "Fulfillment by Amazon (FBA)",
      description: "Let Amazon handle storage, packing, and shipping",
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Sell on the world's most trusted e-commerce platform",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Detailed reports to help grow your business",
    },
    {
      icon: DollarSign,
      title: "Competitive Fees",
      description: "Transparent pricing with no hidden costs",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help when you need it from our seller support team",
    },
  ]

  const steps = [
    {
      step: 1,
      title: "Create Your Seller Account",
      description: "Sign up and provide your business information",
    },
    {
      step: 2,
      title: "List Your Products",
      description: "Add your products with photos and descriptions",
    },
    {
      step: 3,
      title: "Manage Your Inventory",
      description: "Keep track of your stock and fulfill orders",
    },
    {
      step: 4,
      title: "Grow Your Business",
      description: "Use our tools and advertising to reach more customers",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Package className="w-16 h-16 mx-auto mb-6 text-blue-600" />
        <h1 className="text-5xl font-bold mb-6">Start Selling on Amazon</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join millions of sellers worldwide and grow your business with Amazon's powerful e-commerce platform
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg text-lg">
            Start Selling Now
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg text-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Selling Plans */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Selling Plan</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sellingOptions.map((option, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${option.recommended ? "ring-2 ring-blue-500" : ""}`}
            >
              {option.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="text-3xl font-bold text-blue-600">{option.price}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold ${
                  option.recommended
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16 bg-gray-50 rounded-lg p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why Sell on Amazon?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-16 bg-blue-50 rounded-lg p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah's Crafts",
              story: "Grew from hobby to $100K+ annual revenue",
              metric: "500% growth in first year",
            },
            {
              name: "Tech Gadgets Pro",
              story: "Expanded internationally with FBA",
              metric: "Now selling in 15 countries",
            },
            {
              name: "Home Essentials",
              story: "Built a million-dollar business",
              metric: "$1M+ in annual sales",
            },
          ].map((story, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
              <p className="text-gray-600 mb-3">{story.story}</p>
              <p className="text-green-600 font-semibold">{story.metric}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Amazon Business?</h2>
        <p className="text-xl mb-8">Join millions of successful sellers and start your journey today</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-4 rounded-lg text-lg">
          Create Seller Account
        </button>
      </div>
    </div>
  )
}
