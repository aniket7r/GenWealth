"use client"

import { Star, DollarSign, Bitcoin, IndianRupee, Dog, Box } from "lucide-react"
import { motion } from "framer-motion"

export default function IntegrationDiagram() {
  const lineVariants = {
    glow: {
      opacity: [0.3, 0.6, 0.3],
      strokeWidth: [1, 2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="bg-gray-50 w-full"> {}
      <div className="relative max-w-4xl mx-auto h-[400px]"> {}
        {}
        <div className="absolute inset-0" />

        {}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center">
          <div className="absolute w-32 h-32 border-2 border-purple-500 rounded-full animate-spin-slow"></div>
          <div className="relative z-10 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="text-purple-500">
              <Star className="w-12 h-12" />
            </div>
          </div>
        </div>

        {}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <motion.line
            x1="200"
            y1="200"
            x2="100"
            y2="100"
            stroke="#9333ea"
            variants={lineVariants}
            animate="glow"
          />
          <motion.line
            x1="200"
            y1="200"
            x2="300"
            y2="100"
            stroke="#9333ea"
            variants={lineVariants}
            animate="glow"
          />
          <motion.line
            x1="200"
            y1="200"
            x2="100"
            y2="300"
            stroke="#9333ea"
            variants={lineVariants}
            animate="glow"
          />
          <motion.line
            x1="200"
            y1="200"
            x2="300"
            y2="300"
            stroke="#9333ea"
            variants={lineVariants}
            animate="glow"
          />
          <motion.line
            x1="200"
            y1="200"
            x2="80"
            y2="200"
            stroke="#9333ea"
            variants={lineVariants}
            animate="glow"
          />
          <motion.line
            x1="200"
            y1="200"
            x2="320"
            y2="200"
            stroke="#9333ea"
            variants={lineVariants}
            animate="glow"
          />
        </svg>

        {}
        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-50"></div>
            <div className="relative z-10 text-orange-500">
              <Dog className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="absolute left-16 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-50"></div>
            <div className="relative z-10 text-orange-500">
              <Bitcoin className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="absolute left-1/4 bottom-1/4 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="text-green-500">
            <Box className="w-6 h-6" />
          </div>
        </div>

        {}
        <div className="absolute right-1/4 top-1/4 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="text-green-500">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>

        <div className="absolute right-16 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-50"></div>
            <div className="relative z-10 text-blue-500">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 7c0-5.333-8-5.333-8 0" />
                <path d="M10 7v14" />
                <path d="M6 21h12" />
                <path d="M6 13h10" />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity=50"></div>
            <div className="relative z=10 text-orange=500">
              <IndianRupee className= "w=6 h=6" />
           </ div >
         </ div >
       </ div >
     </ div >
     </div >
  )
}