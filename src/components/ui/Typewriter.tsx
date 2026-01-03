"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseAfterTyping?: number
  pauseAfterDeleting?: number
}

export default function Typewriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseAfterTyping = 1500,
  pauseAfterDeleting = 500,
}: TypewriterProps) {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [mode, setMode] = useState<
    "typing" | "pauseAfterTyping" | "deleting" | "pauseAfterDeleting"
  >("typing")

  const currentText = texts[textIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (mode === "typing") {
      if (charIndex < currentText.length) {
        timeout = setTimeout(
          () => setCharIndex((prev) => prev + 1),
          typingSpeed
        )
      } else {
        setMode("pauseAfterTyping")
      }
    }

    else if (mode === "pauseAfterTyping") {
      timeout = setTimeout(
        () => setMode("deleting"),
        pauseAfterTyping
      )
    }

    else if (mode === "deleting") {
      if (charIndex > 0) {
        timeout = setTimeout(
          () => setCharIndex((prev) => prev - 1),
          deletingSpeed
        )
      } else {
        setMode("pauseAfterDeleting")
      }
    }

    else if (mode === "pauseAfterDeleting") {
      timeout = setTimeout(() => {
        setMode("typing")
        setTextIndex((prev) => (prev + 1) % texts.length)
      }, pauseAfterDeleting)
    }

    return () => clearTimeout(timeout)
  }, [
    charIndex,
    mode,
    currentText.length,
    texts.length,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
    pauseAfterDeleting,
  ])

  return (
    <span className="inline-flex items-center">
      {currentText.slice(0, charIndex)}
      <span className="ml-1 animate-pulse ">|</span>
    </span>
  )
}
