"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ title, description, color, extraClass, link, animation }) => {
  return (
    <motion.div
      className={`flex items-center justify-center p-6 border-2 border-black ${color} h-72 w-80 ${extraClass} group`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      data-aos={animation}
    >
      <Link href={link} className="relative w-full h-full flex flex-col justify-center items-center text-center">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="mt-2 text-sm text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">{description}</p>
      </Link>
    </motion.div>
  );
};

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="features" className="bg-gray-50 flex flex-col items-center justify-center min-h-screen p-0">
      <h1 className="text-4xl font-bold mb-2" data-aos="fade-up">Features</h1>
      <p className="mb-4 text-center text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Discover the key features that empower you to take control of your financial future.
      </p>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <Card 
          title="DYNAMIC" 
          color="bg-green-300" 
          description="Get the scoop on stock market trends! 📈 Stay woke with real-time data and expert insights to make those smart moves." 
          link="./components/dynamic"
          animation="fade-right"
        />
        <Card 
          title="DATA DRIVEN" 
          color="bg-blue-300" 
          extraClass="-mt-4" 
          description="See what others are investing in! 👀 Copy their trends and strategies to boost your portfolio game." 
          link="/data-driven"
          animation="fade-left"
        />
        <Card 
          title="DUTIFUL" 
          color="bg-red-300" 
          description="Level up your money smarts! 📚 Access Kaizen AI and interactive content to boost your financial literacy." 
          link="./components/educate"
          animation="fade-right"
        />
        <Card 
          title="DEMURE" 
          color="bg-yellow-300" 
          extraClass="-mt-4" 
          description="Practice trading without the risk! 🎮 Use our paper trading software to sharpen your skills before going live." 
          link="/demure"
          animation="fade-left"
        />
      </div>
    </div>
  );
};

export default Features;