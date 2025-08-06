'use client'

import { motion } from 'framer-motion'
import { Gift, Heart, Star, Truck, Package, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 overflow-hidden">
      {/* Floating gift boxes animation */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Gift className="w-8 h-8 text-pink-300 opacity-60" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Gift Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Unwrap Joy, One Gift at a Time
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/shop"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const FeaturedCategories = () => {
  const categories = [
    {
      title: 'Birthday',
      image: '/birthday-gifts-balloons.png',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Anniversary',
      image: '/romantic-anniversary-roses.png',
      color: 'from-red-400 to-pink-500'
    },
    {
      title: 'Luxury',
      image: '/luxury-gold-gifts.png',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      title: 'Personalized',
      image: '/personalized-custom-gifts.png',
      color: 'from-green-400 to-blue-500'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Categories</h2>
          <p className="text-gray-600 text-lg">Discover the perfect gift for every occasion</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.title}</h3>
                </div>
                {/* Ribbon */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">New</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WhyChooseUs = () => {
  const features = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Express shipping within 24 hours'
    },
    {
      icon: Package,
      title: 'Luxury Packaging',
      description: 'Beautiful gift wrapping included'
    },
    {
      icon: MessageCircle,
      title: 'Custom Notes',
      description: 'Personalized messages for every gift'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">We make gift-giving extraordinary</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const AnimatedTestimonialSlider = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      avatar: '/professional-woman-smiling.png',
      quote: 'The most beautiful gifts I\'ve ever received! The packaging was absolutely stunning.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      avatar: '/professional-man-headshot.png',
      quote: 'Fast delivery and amazing quality. My wife loved her anniversary gift!',
      rating: 5
    },
    {
      name: 'Emily Davis',
      avatar: '/happy-customer-woman.png',
      quote: 'The personalized touch made all the difference. Highly recommend Gift Gallery!',
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-purple-100 text-lg">Real stories from happy customers</p>
        </motion.div>

        <div className="relative h-64">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 0.8,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-white"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white text-lg mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-purple-100 font-semibold">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const GiftOfTheWeek = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Gift of the Week</h2>
          <p className="text-gray-600 text-lg">This week's featured premium selection</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <Image
                src="/luxury-gift-box.png"
                alt="Gift of the Week"
                width={500}
                height={500}
                className="w-full rounded-2xl shadow-2xl"
              />
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(236, 72, 153, 0.4)',
                    '0 0 0 20px rgba(236, 72, 153, 0)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Luxury Spa Collection</h3>
              <p className="text-gray-600 text-lg mb-6">
                Indulge in pure relaxation with our premium spa gift set. Includes organic bath salts, 
                essential oils, silk eye mask, and handcrafted soaps in an elegant wooden box.
              </p>
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-pink-600">$89.99</span>
                <span className="text-lg text-gray-500 line-through ml-3">$129.99</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm ml-3">30% OFF</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const NewsletterCTA = () => {
  const [email, setEmail] = useState('')

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 text-lg mb-8">
            Get exclusive offers, gift ideas, and be the first to know about new arrivals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-2 border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(236, 72, 153, 0.4)',
                  '0 0 0 10px rgba(236, 72, 153, 0)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeaturedCategories />
      <WhyChooseUs />
      <AnimatedTestimonialSlider />
      <GiftOfTheWeek />
      <NewsletterCTA />
    </motion.div>
  )
}
