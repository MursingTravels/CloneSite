"use client";

import { Card } from "@/components/ui/card";
import { User, Brain, Clock, Gift, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="text-center py-8">
        <div className="mb-6">
          <div className="mb-4">
            <img
              src="/mursing-logo.png"
              alt="Mursing Travels Logo"
              className="w-48 h-auto mx-auto"
            />
          </div>
        </div>

        <nav className="flex justify-center space-x-6 text-teal-700 font-semibold">
          <a href="#why-advisor" className="hover:text-orange-600">Why?</a>
          <span>|</span>
          <a href="#featured-destinations" className="hover:text-orange-600">Featured Itineraries</a>
          <span>|</span>
          <a href="#consultation" className="hover:text-orange-600">Request a Consult</a>
          <span>|</span>
          <a href="#connect" className="hover:text-orange-600">Connect</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <img
            src="/chatgpt-travel-hero.png"
            alt="Travel illustration with landmarks"
            className="mx-auto w-full max-w-2xl"
          />
        </div>
      </section>

      {/* Why Use A Travel Advisor Section */}
      <section id="why-advisor" className="max-w-2xl mx-auto px-6 mb-12">
        <Card className="bg-sky-200 p-8">
          <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">
            Why Use A Travel Advisor?
          </h2>
          <p className="text-center text-teal-800 mb-8">
            Planning a trip can be overwhelming<br />
            Let a travel advisor handle the details
          </p>

          <div className="space-y-6">
            {[
              { icon: User, title: "Personalized Service", desc: "Receive tailored recommendations and itineraries designed to match your budget and travel style!" },
              { icon: Brain, title: "Expert Knowledge", desc: "Benefit from in-depth knowledge and insights about destinations, activities, and travel logistics." },
              { icon: Clock, title: "Time Savings", desc: "Save valuable time and effort by letting a professional manage all aspects of your trip planning." },
              { icon: Gift, title: "Exclusive Offers", desc: "Access exclusive deals, upgrades, and perks not available to the general public." },
              { icon: DollarSign, title: "Price Monitoring", desc: "We watch the price of your refundable bookings to make sure if the price drops, we re-book you at the lower rate!" },
            ].map((item, idx) => (
              <div className="flex items-start space-x-4" key={idx}>
                <item.icon className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-orange-600 mb-1">{item.title}</h3>
                  <p className="text-sm text-teal-800">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Featured Destinations Section */}
      <section id="featured-destinations" className="max-w-2xl mx-auto px-6 mb-12">
        <Card className="bg-sky-200 p-8">
          <h2 className="text-2xl font-bold text-orange-600 text-center mb-6">Featured Itineraries</h2>
          <div className="grid grid-cols-2 gap-8 text-center">
            {[
              {
                href: "https://www.foratravel.com/guides/FWYTFS/a-vegans-guide-to-tokyo-jonah-pregulman",
                img: "/japanese-temple-cherry-blossoms.png",
                title: "Japan",
                desc: "Explore both ancient and modern Japan. Discover temples, food and culture!"
              },
              {
                href: "https://www.foratravel.com/guides/3LX7V8/a-celiac-guide-to-grand-cayman-jonah-pregulman",
                img: "/caribbean-beach-with-crystal-clear-water-for-scuba.png",
                title: "Grand Cayman",
                desc: "A scuba diver's paradise! Easy to get to and a place for every budget!"
              }
            ].map((dest, idx) => (
              <div key={idx}>
                <a href={dest.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="mb-4">
                    <img src={dest.img} alt={`${dest.title} destination`} className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <h3 className="font-bold text-orange-600 mb-2">{dest.title}</h3>
                  <p className="text-sm text-teal-800">{dest.desc}</p>
                </a>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="max-w-2xl mx-auto px-6 mb-12">
        <Card className="bg-sky-200 p-8">
          <h2 className="text-2xl font-bold text-orange-600 text-center mb-6">Request a Consultation</h2>
          <div className="w-full h-[620px] rounded-lg overflow-hidden">
            <iframe
              src="https://form.typeform.com/to/aJ3HzlC9"
              className="w-full h-full border-0"
              title="Consultation Request Form"
              style={{ minHeight: "620px" }}
            />
          </div>
        </Card>
      </section>

      {/* Contact Section */}
      <section id="connect" className="max-w-2xl mx-auto px-6 mb-12">
        <Card className="bg-sky-200 p-8">
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-8">Connect With Me!</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Profile */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/jonah-hobbit-hole-profile.jpg" alt="Jonah - Travel Advisor" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600 mb-1">Jonah</h3>
              <p className="text-lg text-teal-700 font-semibold">Travel Advisor</p>
            </div>
            {/* Contact Info */}
            <div className="space-y-6 text-center md:text-right">
              <div>
                <h4 className="text-xl font-bold text-orange-600 mb-1">Email</h4>
                <p className="text-lg text-teal-700 font-semibold">Jonah@MursingTravels.com</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-orange-600 mb-1">Instagram</h4>
                <p className="text-lg text-teal-700 font-semibold">@WorldNomadTravelAgency</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
