"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactManager() {
  const [contactData, setContactData] = useState({
    email: "wark.rupasinghe.work@gmail.com",
    phone: "+94 761 941 017",
    location: "Colombo, Sri Lanka",
  })

  const handleSave = () => {
    // Save to API or local storage
    alert("Contact information updated successfully!")
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Manage Contact Information</h2>

      <Card>
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              value={contactData.email}
              onChange={(e) => setContactData((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <Input
              value={contactData.phone}
              onChange={(e) => setContactData((prev) => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <Input
              value={contactData.location}
              onChange={(e) => setContactData((prev) => ({ ...prev, location: e.target.value }))}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
        Save Changes
      </Button>
    </div>
  )
}
