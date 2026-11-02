"use client"

import { useEffect, useRef } from "react"

type RevealProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    document.documentElement.classList.add("reveal-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add("is-in")
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
