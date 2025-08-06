"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-indigo-100">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Check for product inquiry from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get("product");
    const price = urlParams.get("price");

    if (product && price) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi, I'm interested in ordering "${product}" (Price: $${price}). Please provide more details about availability and ordering process.`,
      }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setFormData({ name: "", email: "", message: "" });
    alert(
      "Thank you for your inquiry! We will contact you within 24 hours to discuss your order."
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us for Orders
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Ready to place an order? Send us your details and we'll get back to
          you with availability and payment options.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Your Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              required
              animate={{
                scale: focusedField === "name" ? 1.02 : 1,
                borderColor: focusedField === "name" ? "#ec4899" : "#d1d5db",
              }}
              transition={{ duration: 0.2 }}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              required
              animate={{
                scale: focusedField === "email" ? 1.02 : 1,
                borderColor: focusedField === "email" ? "#ec4899" : "#d1d5db",
              }}
              transition={{ duration: 0.2 }}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Order Details / Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              required
              rows={6}
              animate={{
                scale: focusedField === "message" ? 1.02 : 1,
                borderColor: focusedField === "message" ? "#ec4899" : "#d1d5db",
              }}
              transition={{ duration: 0.2 }}
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 resize-none"
              placeholder="Tell us which product you'd like to order and any special requirements..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow duration-300 disabled:opacity-70"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Order Inquiry
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@giftgallery.com",
      description: "Send us an email anytime!",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Gift Street, Joy City, JC 12345",
      description: "Come see our showroom",
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Contact Information
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Have questions about our products or need help with an order? We're
          here to help!
        </p>
      </motion.div>

      {contactDetails.map((detail, index) => (
        <motion.div
          key={detail.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl shadow-lg"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
              <detail.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {detail.title}
              </h3>
              <p className="text-lg font-semibold text-pink-600 mb-1">
                {detail.info}
              </p>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl text-white"
      >
        <div className="flex items-center space-x-4 mb-4">
          <Clock className="w-6 h-6" />
          <h3 className="text-xl font-bold">Business Hours</h3>
        </div>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Monday - Friday:</span> 8:00 AM -
            6:00 PM
          </p>
          <p>
            <span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM
          </p>
          <p>
            <span className="font-semibold">Sunday:</span> Closed
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const MapSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Find Our Store
          </h2>
          <p className="text-gray-600 text-lg">
            Visit us in person for a personalized gift consultation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Placeholder for Google Maps */}
          <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Interactive Map
              </h3>
              <p className="text-gray-600">
                123 Gift Street, Joy City, JC 12345
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Google Maps integration would go here
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
}
