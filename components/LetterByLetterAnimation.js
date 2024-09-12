import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const LetterByLetterAnimation = ({ text, className }) => {
  const textRef = useRef(null)

  useEffect(() => {
    // Split text into letters and wrap each letter in a span
    const letters = text
      .split('')
      .map(
        (letter, index) =>
          `<span class="letter" data-index="${index}" style="display: inline-block; opacity: 0; transform: translateY(20px);">${
            letter === ' ' ? '&nbsp;' : letter
          }</span>`
      )
      .join('')

    // Inject the HTML into the container
    textRef.current.innerHTML = letters

    // GSAP animation
    gsap.fromTo(
      '.letter',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.05,
      }
    )
  }, [text])

  return <span className={className} ref={textRef}></span>
}

export default LetterByLetterAnimation
