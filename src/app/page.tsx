"use client"

import { useState } from "react"

export default function Home() {
  const [mostra, setMostra] = useState(false)


  const handleSim = () => {
    setMostra(true)
  }

  const handleNao = () => {
    setMostra(false)
  }

  return (
    <main>
      
    </main>
  );
}
