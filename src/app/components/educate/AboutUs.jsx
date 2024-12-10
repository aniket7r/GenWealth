"use client"; 
import React from "react";
import { motion } from "framer-motion"; 

const KaizenAbout = () => {
  return (
    <div id="about" className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <motion.img
            alt="Illustration of a globe with hot air balloons floating around it"
            height="400"
            src="https://i.postimg.cc/kXTwYMb9/kaisen-removebg-preview.png"
            width="600"
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }} 
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-2 mb-4">
            Greetings
            <br />
            from <span className="text-purple-600">Kaizen</span> {}
          </h1>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            Yo, I&apos;m your homie in finance! 💸 I&apos;m here to break down the basics and help you level up your money game. Whether you&apos;re looking to stack those bands or just trying to keep your wallet happy, I&apos;ve got you covered. From budgeting hacks that’ll save you some serious dough to killer investing strategies that’ll make your money work for you, we’ll dive into it all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KaizenAbout;