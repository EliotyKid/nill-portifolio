"use client"

import { useState } from "react"
import Hero from "./components/Hero"
import ServicesAwards from "./components/ServicesAwards"

export default function Home() {
  const [mostra, setMostra] = useState(false)


  const handleSim = () => {
    setMostra(true)
  }

  const handleNao = () => {
    setMostra(false)
  }

  return (
    <main className="container  mt-10 flex flex-col gap-6">
      <Hero/>
      <ServicesAwards/>
    </main>
  );
}
