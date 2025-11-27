import React from 'react'

const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`section-wrapper ${className}`}>
      {children}
    </section>
  )
}

export default SectionWrapper
