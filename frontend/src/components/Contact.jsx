import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="mb-16">
          <div className="w-16 h-[2px] bg-[#ff5a1f] mb-4"></div>
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            CONTACT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact info */}
          <div>
            <p className="text-white/80 text-lg mb-12 leading-relaxed">
              Have a project in mind or want to discuss opportunities? 
              I'm always open to interesting conversations and collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff5a1f]/10 border border-[#ff5a1f] flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#ff5a1f]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:hello@dheeraj.com" className="text-white/60 hover:text-[#ff5a1f] transition-colors">
                    hello@dheeraj.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff5a1f]/10 border border-[#ff5a1f] flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#ff5a1f]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-white/60 hover:text-[#ff5a1f] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff5a1f]/10 border border-[#ff5a1f] flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#ff5a1f]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-white/60">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-panel rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-white text-sm font-medium mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0b0b0f] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ff5a1f] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-white text-sm font-medium mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0b0b0f] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ff5a1f] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white text-sm font-medium mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-[#0b0b0f] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ff5a1f] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff5a1f] text-white py-3 rounded-lg font-semibold hover:bg-[#ff7a3f] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;