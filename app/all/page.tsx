import { Header } from "@/components/navigation/header"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AllCategoriesPage() {
  const categories = [
    { name: "Electronics", icon: "📱", link: "/products?category=electronics" },
    { name: "Fashion", icon: "👕", link: "/products?category=fashion" },
    { name: "Home & Garden", icon: "🏠", link: "/products?category=home" },
    { name: "Books", icon: "📚", link: "/products?category=books" },
    { name: "Sports & Outdoors", icon: "⚽", link: "/products?category=sports" },
    { name: "Toys & Games", icon: "🎮", link: "/products?category=toys" },
    { name: "Beauty & Personal Care", icon: "💄", link: "/products?category=beauty" },
    { name: "Health & Household", icon: "🏥", link: "/products?category=health" },
    { name: "Automotive", icon: "🚗", link: "/products?category=automotive" },
    { name: "Pet Supplies", icon: "🐕", link: "/products?category=pets" },
    { name: "Office Products", icon: "🖥️", link: "/products?category=office" },
    { name: "Arts & Crafts", icon: "🎨", link: "/products?category=arts" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Categories</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
