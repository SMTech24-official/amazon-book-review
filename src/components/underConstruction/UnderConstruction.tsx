'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function UnderCOnstruction({ pageName = 'This Page' }: { pageName?: string }) {
  const [dots, setDots] = useState('.')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? '.' : prevDots + '.'))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">{pageName}</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">is under development</p>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-100" />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-200" />
        </div>
        <p className="text-lg text-gray-500 mt-8">
          We&apos;re working hard to bring you something amazing{dots}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12"
      >
        <a
          href="#"
          className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-black transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Notify Me When It&apos;s Ready
        </a>
      </motion.div>
    </div>
  )
}