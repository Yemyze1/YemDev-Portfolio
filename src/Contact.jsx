import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get in touch</h2>
      <p className="contact-description">I'm available for freelance projects and full-time roles. Send me an email or use the contact form below.</p>

      <form action="mailto:you@example.com" method="post" className="contact-form">
        <div className="form-group">
          <input name="name" placeholder="Your name" className="form-input" />
        </div>
        <div className="form-group">
          <input name="email" placeholder="Email" className="form-input" />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Message" className="form-textarea" />
        </div>
        <button type="submit" className="btn-submit">Send message</button>
      </form>
    </section>
  )
}

export default Contact