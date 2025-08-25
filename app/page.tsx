"use client";

import { Card } from "@/components/ui/card"
import { User, Brain, Clock, Gift, DollarSign } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="text-center py-8">
        <div className="mb-6">
          <div className="mb-4">
            <img
              src="/mursing-logo.png"
              alt="Mursing Adventures Travel Agency Logo"
              className="w-48 h-auto mx-auto"
            />
          </div>
        </div>

        <nav className="flex justify-center space-x-6 text-teal-700 font-semibold">
          <a href="#why-advisor" className="hover:text-orange-600">
            Why?
          </a>
          <span>|</span>
          <a href="#featured-destinations" className="hover:text-orange-600">
            Featured Itineraries
          </a>
          <span>|</span>
          <a href="#consultation" className="hover:text-orange-600">
            Request a Consult
          </a>
          <span>|</span>
          <a href="#connect" className="hover:text-orange-600">
            Connect
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <img
              src="/chatgpt-travel-hero.png"
              alt="Travel illustration with landmarks"
              className="mx-auto w-full max-w-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why Use A Travel Advisor Section */}
      <section id="why-advisor" className="max-w-2xl mx-auto px-6 mb-12">
        <Card className="bg-sky-200 p-8">
          <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">
            Why Use A Travel Advisor?
          </h2>
          <p className="text-center text-teal-800 mb-8">
            Planning a trip can be overwhelming
            <br />
            Let a travel advisor handle the details
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <User className="text-orange-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-bold text-orange-600 mb-1">Personalized Service</h3>
                <p className="text-sm text-teal-800">
                  Receive tailored recommendations and itineraries designed to match your budget and travel style!
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Brain className="text-orange-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-bold text-orange-600 mb-1">Expert Knowledge</h3>
                <p className="text-sm text-teal-800">
                  Benefit from in-depth knowledge and insights about destinations, activities, and travel logistics.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-orange-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-bold text-orange-600 mb-1">Time Savings</h3>
                <p className="text-sm text-teal-800">
                  Save valuable time and effort by letting a professional manage all aspects of your trip planning.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Gift className="text-orange-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-bold text-orange-600 mb-1">Exclusive Offers</h3>
                <p className="text-sm text-teal-800">
                  A
