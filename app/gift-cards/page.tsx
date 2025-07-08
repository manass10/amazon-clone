import { Header } from "@/components/navigation/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Gift } from "lucide-react"

export default function GiftCardsPage() {
  const giftCardDesigns = [
    { id: 1, name: "Birthday", image: "/placeholder.svg?height=200&width=300" },
    { id: 2, name: "Holiday", image: "/placeholder.svg?height=200&width=300" },
    { id: 3, name: "Thank You", image: "/placeholder.svg?height=200&width=300" },
    { id: 4, name: "Congratulations", image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Gift className="h-16 w-16 mx-auto mb-4 text-orange-400" />
          <h1 className="text-4xl font-bold mb-4">Amazon Gift Cards</h1>
          <p className="text-lg text-gray-600">Give the gift of choice with Amazon Gift Cards</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gift Card Customization */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Customize Your Gift Card</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Design Selection */}
                <div>
                  <Label className="text-base font-medium mb-4 block">Choose a Design</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {giftCardDesigns.map((design) => (
                      <div
                        key={design.id}
                        className="cursor-pointer border-2 border-transparent hover:border-orange-400 rounded-lg"
                      >
                        <img
                          src={design.image || "/placeholder.svg"}
                          alt={design.name}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <p className="text-center text-sm mt-2">{design.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label htmlFor="amount" className="text-base font-medium">
                    Gift Card Amount
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25">$25</SelectItem>
                      <SelectItem value="50">$50</SelectItem>
                      <SelectItem value="100">$100</SelectItem>
                      <SelectItem value="200">$200</SelectItem>
                      <SelectItem value="custom">Custom Amount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Recipient Information */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="recipientName">Recipient Name</Label>
                    <Input id="recipientName" placeholder="Enter recipient's name" />
                  </div>
                  <div>
                    <Label htmlFor="recipientEmail">Recipient Email</Label>
                    <Input id="recipientEmail" type="email" placeholder="Enter recipient's email" />
                  </div>
                  <div>
                    <Label htmlFor="message">Personal Message (Optional)</Label>
                    <textarea
                      id="message"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      rows={4}
                      placeholder="Write a personal message..."
                    />
                  </div>
                </div>

                {/* Delivery Options */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Delivery Options</Label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="delivery" value="email" defaultChecked />
                      <span>Email Delivery (Instant)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="delivery" value="print" />
                      <span>Print at Home</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="delivery" value="mail" />
                      <span>Mail Delivery (+$5.99)</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview and Purchase */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Gift Card Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6 rounded-lg text-white mb-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Amazon Gift Card</h3>
                    <div className="text-4xl font-bold mb-4">$50.00</div>
                    <p className="text-sm opacity-90">To: John Doe</p>
                    <p className="text-sm opacity-90">From: Jane Smith</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Gift Card Amount:</span>
                    <span className="font-semibold">$50.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>$50.00</span>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-400 hover:bg-orange-500 text-lg py-3">Add to Cart</Button>

                  <div className="text-center text-sm text-gray-600">
                    <p>Gift cards are delivered within 15 minutes or at the time you specify.</p>
                    <p className="mt-2">No returns and no refunds on gift cards.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
