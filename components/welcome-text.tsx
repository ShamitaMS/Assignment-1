'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function WelcomeText() {
  const [isHovered, setIsHovered] = useState(false)
  const [text, setText] = useState('')
  const fullText = 'Welcome to 4GOOD.AI'

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div 
      className="text-center mb-8 transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="flex justify-center transform transition-all duration-300 scale-110">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-CsNWtDzRNW1msWS1FRXr72XNpU0SxD.png"
            alt="4GOOD.AI Logo" 
            width={200} 
            height={60}
            className="dark:brightness-200"
          />
        </div>
      ) : (
        <h2 className="text-3xl font-bold text-primary">
          {text}
          <span className="animate-blink text-primary">|</span>
        </h2>
      )}
    </div>
  )
}

