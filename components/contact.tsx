"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send the form data to the /api/contact route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Convert the form data to JSON
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset the form after successful submission
    } else {
      alert('Error sending message.');
    }
  };

  return (

      <section className="contact-section text-base md:text-lg lg:text-xl bg-secondary text-primary p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out hover: translate-x-1">
        <h2 className='text-primary font-bold'>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form flex flex-col">
          <input 
            className='p-3 mb-3 border border-[#970747] rounded-md transition-colors duration-300 ease-in-out'
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        <input
          className='p-3 mb-3 border border-[#970747] rounded-md transition-colors duration-300 ease-in-out' 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          className='p-3 mb-3 border border-[#970747] rounded-md transition-colors duration-300 ease-in-out'
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <button className='inline-block px-3 py-4 bg-primary text-secondary rounded-md font-bold transition-colors hover:bg-secondary hover:text-primary' type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
