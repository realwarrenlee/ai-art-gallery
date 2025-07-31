"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const artPieces = [
  {
    id: 1,
    title: "Digital Dreams",
    description: "Abstract digital landscape with flowing colors",
    image: "/images/DigitalDreams.png",
  },
  {
    id: 2,
    title: "Neural Networks",
    description: "Visualization of interconnected neural pathways",
    image: "/images/NeuralNetworks.png",
  },
  {
    id: 3,
    title: "Synthetic Nature",
    description: "AI interpretation of organic forms and patterns",
    image: "/images/SyntheticNature.png",
  },
  {
    id: 4,
    title: "Data Streams",
    description: "Flow of information in digital space",
    image: "/images/DataStreams.png",
  },
  {
    id: 5,
    title: "Algorithmic Beauty",
    description: "Mathematical patterns rendered as art",
    image: "/images/AlgorithmicBeauty.png",
  },
  {
    id: 6,
    title: "Virtual Horizons",
    description: "Imagined landscapes from digital realms",
    image: "/images/VirtualHorizons.png",
  },
  {
    id: 7,
    title: "Code Poetry",
    description: "Visual representation of programming languages",
    image: "/images/CodePoetry.png",
  },
  {
    id: 8,
    title: "Machine Dreams",
    description: "What artificial minds might dream of",
    image: "/images/MachineDreams.png",
  },
]

export default function AIArtGallery() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="text-center z-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: Math.max(0, 1 - scrollY / 400),
          }}
        >
          <h1 className="text-6xl md:text-8xl font-thin text-gray-900 mb-6 tracking-wider">AI Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
            Digital creativity through artificial intelligence
          </p>
          <div className="mt-12">
            <div className="w-px h-16 bg-gray-400 mx-auto animate-pulse"></div>
          </div>
        </div>

        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {artPieces.map((piece, index) => (
            <div
              key={piece.id}
              className="group"
              style={{
                transform: `translateY(${Math.sin((scrollY + index * 200) * 0.001) * 10}px)`,
              }}
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-[4/3] mb-8">
                <Image
                  src={piece.image || "/placeholder.svg"}
                  alt={piece.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide">{piece.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{piece.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-12 tracking-wider">About the Collection</h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8">
            This gallery showcases the intersection of artificial intelligence and creative expression. Each piece
            represents a unique collaboration between human imagination and machine learning, exploring themes of
            digital consciousness, synthetic beauty, and the evolving relationship between technology and art.
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Generated through various AI models and techniques, these works challenge traditional notions of creativity
            while opening new possibilities for artistic expression in the digital age.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 font-light tracking-wide">
            Created with artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  )
}
