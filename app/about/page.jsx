'use client'

import { motion } from 'framer-motion'
import { Heart, Award, Users, Sparkles } from 'lucide-react'
import Image from 'next/image'

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-6 h-6 text-purple-400" />
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
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Crafting moments of joy since 2020
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const OurStory = () => {
  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started with a simple idea: make gift-giving more meaningful and personal.'
    },
    {
      year: '2021',
      title: 'Growing Community',
      description: 'Reached 10,000 happy customers and expanded our product range.'
    },
    {
      year: '2022',
      title: 'Going Premium',
      description: 'Introduced luxury packaging and personalization services.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded internationally and launched our mobile app.'
    },
    {
      year: '2024',
      title: 'Innovation Continues',
      description: 'AI-powered gift recommendations and sustainable packaging initiatives.'
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From a small startup to a trusted gift destination, here's how we've grown together with our community.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-600 rounded-full" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-pink-600 mb-2">{item.year}</h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full border-4 border-white shadow-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const MeetTheFounder = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/woman-founder-smiling.png"
              alt="Founder"
              width={500}
              height={600}
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Sarah, Our Founder</h2>
            <p className="text-gray-600 text-lg mb-6">
              "I started Gift Gallery because I believe that every gift should tell a story. After years of 
              struggling to find the perfect presents for my loved ones, I realized there had to be a better way."
            </p>
            <p className="text-gray-600 text-lg mb-6">
              "Our mission is simple: to help people express their love and appreciation through thoughtfully 
              curated gifts that create lasting memories. Every product in our collection is chosen with care, 
              and every package is wrapped with love."
            </p>
            <p className="text-gray-600 text-lg mb-8">
              "When you shop with Gift Gallery, you're not just buying a product – you're investing in a moment 
              of joy that will be remembered forever."
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Sarah Johnson</p>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const MissionValues = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love in Every Detail',
      description: 'We pour our heart into every aspect of your gift experience.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Only the finest products make it into our curated collection.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building lasting relationships with our customers and partners.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-purple-100 text-lg">The principles that guide everything we do</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
              className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
                className="inline-block p-4 bg-white bg-opacity-20 rounded-full mb-6"
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-purple-100">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <OurStory />
      <MeetTheFounder />
      <MissionValues />
    </motion.div>
  )
}
