import React, { useState, useEffect } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Adeyemi delivered exceptional work on our React application. His attention to detail and performance optimization skills are outstanding.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with Adeyemi was a pleasure. He transformed our design concepts into pixel-perfect, accessible web experiences.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "UX Designer",
      company: "DesignStudio",
      content: "Adeyemi's frontend expertise and collaborative approach made our project a success. Highly recommend for any web development needs.",
      avatar: "ER"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="testimonials-title">What People Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="testimonial-avatar">
            {testimonials[currentIndex].avatar}
          </div>
          <blockquote className="testimonial-content">
            "{testimonials[currentIndex].content}"
          </blockquote>
          <cite className="testimonial-author">
            <strong>{testimonials[currentIndex].name}</strong><br/>
            {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
          </cite>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials