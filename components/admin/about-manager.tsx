"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export function AboutManager() {
  const [aboutData, setAboutData] = useState({
    bio: `I'm a Data Science student at SLIIT specializing in machine learning, computer vision, and predictive modeling. My passion lies in transforming complex data into actionable insights and building AI solutions that solve real-world challenges.`,
    skills:
      "Python, R, SQL, PyTorch, Machine Learning, Computer Vision, Power BI, OpenCV, Google GenAI, Flask, MongoDB, Firebase",
    experience: "1+",
    projects: "5+",
    clients: "3+",
  })

  const handleSave = () => {
    // Save to API or local storage
    alert("About section updated successfully!")
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Manage About Section</h2>

      <Card>
        <CardHeader>
          <CardTitle>Biography</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={aboutData.bio}
            onChange={(e) => setAboutData((prev) => ({ ...prev, bio: e.target.value }))}
            rows={6}
            className="mb-4"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            value={aboutData.skills}
            onChange={(e) => setAboutData((prev) => ({ ...prev, skills: e.target.value }))}
            placeholder="Comma-separated skills"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Years Experience</label>
            <Input
              value={aboutData.experience}
              onChange={(e) => setAboutData((prev) => ({ ...prev, experience: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Projects Completed</label>
            <Input
              value={aboutData.projects}
              onChange={(e) => setAboutData((prev) => ({ ...prev, projects: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Happy Clients</label>
            <Input
              value={aboutData.clients}
              onChange={(e) => setAboutData((prev) => ({ ...prev, clients: e.target.value }))}
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
