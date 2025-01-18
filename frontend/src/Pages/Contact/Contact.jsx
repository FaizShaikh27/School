import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to answer any questions you may have about our school
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Send Message
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">Error sending message. Please try again.</p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address:</h3>
                  <p className="text-gray-600">
                    Dr.B B Chavan School Campus Gut No 235,<br />
                    Khandi Pimpalgaon,<br />
                    Tal-Khultabad, Dist-Sambhaji Nagar
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone:</h3>
                  <p className="text-gray-600">+91 1234567890</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email:</h3>
                  <p className="text-gray-600">info@bbchavanschool.edu.in</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Office Hours:</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                <a href="/admission" className="text-gray-600 hover:text-primary">Admissions</a>
                <a href="/facilities" className="text-gray-600 hover:text-primary">Facilities</a>
                <a href="/sports" className="text-gray-600 hover:text-primary">Sports</a>
                <a href="/about" className="text-gray-600 hover:text-primary">About Us</a>
              </div>
            </div>

            <div className="bg-secondary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Emergency Contact</h2>
              <p className="mb-4">For urgent matters, please contact:</p>
              <p className="font-semibold">Emergency Helpline: +91 9876543210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;