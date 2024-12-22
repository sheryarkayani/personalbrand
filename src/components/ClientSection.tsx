"use client"

export default function ClientsSection() {
  // Tailor these logos to align with your brand and dev experience
  const clients = [
    {
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
  
  
  
  ]

  return (
    <section className="container mx-auto px-4 py-16 border-t border-purple-800 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
      <h3 className="text-center text-2xl text-gray-200 mb-12 font-semibold animate-fade-in">
        Trusted by Leading Tech Brands
      </h3>
      {/* Horizontal "marquee" style scrolling */}
      <div className="flex overflow-hidden">
        <div className="flex animate-slide space-x-16 items-center">
          {/* Duplicate array for a continuous scrolling effect */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 transform hover:scale-110 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-[180px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
