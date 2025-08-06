'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Gift, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-lg bg-opacity-95' 
          : 'bg-transparent'

        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Gift className={`w-8 h-8 ${isScrolled ? 'text-pink-600' : 'text-gray-800'}`} />
            </motion.div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
              Gift Gallery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? isScrolled ? 'text-pink-600' : 'text-gray-800'
                    : isScrolled ? 'text-gray-600 hover:text-pink-600' : 'text-gray-800 hover:text-pink-600'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-600"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Cart Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-2 rounded-full transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-pink-600' : 'text-gray-800 hover:text-pink-600'
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-pink-600 text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-800'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-lg font-medium transition-colors duration-300 ${
                      pathname === link.href
                        ? 'text-pink-600'
                        : 'text-gray-600 hover:text-pink-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4 border-t border-gray-200"
              >
                <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors duration-300">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart (0)</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
