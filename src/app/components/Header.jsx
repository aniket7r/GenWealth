"use client"; 
import React, { useRef, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link as ScrollLink } from 'react-scroll';

export const AuroraHero = () => {
  return (
    <section id="home" className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-50 px-4 py-12 text-black">
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <SlideTabsExample />

        <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow mb-4">
          <div className="flex -space-x-2">
            <img alt="User 1" className="w-8 h-8 rounded-full border-2 border-white" height="32" src="https://storage.googleapis.com/a1aa/image/ulNtRuIekqzYCavIfqo9uAstHhWKv6XYyX9avNAHcSsnIj4TA.jpg" width="32"/>
            <img alt="User 2" className="w-8 h-8 rounded-full border-2 border-white" height="32" src="https://storage.googleapis.com/a1aa/image/UbFJnHfxHhwuSC5NV6LMr9geQhmSeKQMQz2lly5yNxMQRGxnA.jpg" width="32"/>
            <img alt="User 3" className="w-8 h-8 rounded-full border-2 border-white" height="32" src="https://storage.googleapis.com/a1aa/image/lW5Qg3nzrz6gJ5BeO12fxcieaEHJbwkzkxQflLeMreRaJyIeJA.jpg" width="32"/>
            <img alt="User 4" className="w-8 h-8 rounded-full border-2 border-white" height="32" src="https://storage.googleapis.com/a1aa/image/pFYkx1hA7RbJHNNXVT6xbcu6ojJFnxTrZD21eLGAcwDSkR8JA.jpg" width="32"/>
            <img alt="User 5" className="w-8 h-8 rounded-full border-2 border-white" height="32" src="https://storage.googleapis.com/a1aa/image/ntsf6cSxevmt8kF26HJ47zhV2rU2f9YGefDb809yBJiIFZEfE.jpg" width="32"/>
          </div>
          <span className="text-gray-600 text-sm font-medium">
            Trusted by{' '}
            <span className="text-gray-900">
               800k+ happy users
            </span>
          </span>
        </div>

        {}
        <h1 className="max-w-3xl bg-black bg-clip-text text-center text-6xl font-medium leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight mb-6"> 
          Control your<span className="text-green-500">💲</span>at your fingertips
        </h1>

        {}
        <p className="my-4 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed mb-6">
          Join thousands managing their finances, tracking expenses, and making informed decisions with ease
        </p>

        <motion.div 
          className="flex items-center bg-white rounded-full shadow-md p-2 w-full max-w-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
            <FaEnvelope className="text-gray-400" />
          </div>
          <input 
            type="email" 
            placeholder="Enter your email to get started" 
            className="flex-grow px-4 py-2 text-gray-500 bg-transparent border-none focus:outline-none"
          />
          <motion.button 
            className="px-6 py-2 text-white bg-black rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const SlideTabsExample = () => {
  return (
    <div className="-mt-6">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
      style={{ minWidth: '300px' }}
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Educate</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <ScrollLink
      to={children.toLowerCase()}
      smooth={true}
      duration={500}
      offset={-70}
      spy={true}
      activeClass="active"
    >
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      >
        {children}
      </li>
    </ScrollLink>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default AuroraHero;