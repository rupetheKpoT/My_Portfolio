"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export function AboutManager() {
  const [aboutData, setAboutData] = useState({
    bio: `I'm a BSc (Hons) in IT graduate specializing in Data Science at SLIIT (2022–2026), with skills in software quality testing, data analytics, machine learning, and project management. My PortalKit work included manual, smoke, and black box testing, test case writing, and bug reporting.`,
    skills:
      "Manual Testing, Smoke Testing, Black Box Testing, Test Case Writing, Bug Reporting, Selenium, Python, R, SQL, JavaScript, PyTorch, Power BI, Hugging Face Transformers, Azure, AWS, Docker, Jira",
    experience: "April–October 2025; June–December 2024",
    projects: "5",
    clients: "Not specified in CV",
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
