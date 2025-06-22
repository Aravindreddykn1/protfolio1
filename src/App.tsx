import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Aravind Redd</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#" className="hover:text-orange-400">About</a>
          <a href="#" className="hover:text-orange-400">Projects</a>
          <a href="#" className="hover:text-orange-400">Contacts</a>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col px-6 py-2 space-y-2 md:hidden bg-[#1a1a1a]">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
        <div className="space-y-4 max-w-lg">
          <p className="text-2xl">Hello <span className="text-orange-400">•</span></p>
          <h2 className="text-3xl font-semibold">I'm Aravind</h2>
          <h1 className="text-4xl font-bold text-orange-500">Software & Data Integration Developer</h1>
          <div className="space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Got a project?</Button>
            <Button variant="outline" className="border-white text-white">My resume</Button>
          </div>
        </div>
        <img src="/avatar.png" alt="Aravind" className="w-60 mt-10 md:mt-0 rounded-full border-4 border-orange-500" />
      </div>

      {/* Tech Stack */}
      <div className="flex justify-center flex-wrap gap-6 py-4 border-t border-b border-gray-700">
        {['HTML5', 'CSS3', 'JavaScript (ES6)', 'Python', 'Java', 'Spring Boot', 'Node.js', 'React', 'MongoDB', 'PostgreSQL', 'AWS', 'CI/CD', 'Informatica IICS', 'Informatica CAI', 'HICX'].map(skill => (
          <span key={skill} className="text-sm text-gray-400">{skill}</span>
        ))}
      </div>

      {/* About Section */}
      <div className="px-6 py-10 md:flex md:space-x-16">
        <div className="space-y-6 mb-10 md:mb-0">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Website & App Development</h3>
              <p>Responsive applications using modern full-stack technologies.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Data Integration</h3>
              <p>Expertise in Informatica IICS for integrating ERPs like SAP, NEO, Pascal, and Oscar.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Automation & AI Projects</h3>
              <p>Built ML-based systems such as Automated Marks Extraction from Academic Documents using OCR and Deep Learning.</p>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold mb-4">About me</h2>
          <p className="text-gray-400">
            I'm Aravind, a BTech graduate in AI & ML from VTU with deep interest in software development, data integration, and automation. I specialize in using Informatica CDI/CAI and Python-based ML models to build scalable solutions for enterprises. I also love creating end-to-end full-stack applications with Spring Boot, React, and NoSQL.
          </p>
          <div className="flex space-x-10 mt-6">
            <div>
              <h3 className="text-2xl font-bold text-orange-500">25+</h3>
              <p className="text-sm text-gray-400">Completed Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-500">90%</h3>
              <p className="text-sm text-gray-400">Client satisfaction</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-500">2+</h3>
              <p className="text-sm text-gray-400">Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
