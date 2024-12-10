"use client"; 
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline/next'; 

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 w-full h-screen flex"> {}
      {}
      <div className="w-1/2 px-4 py-24"> {}
        <div className="max-w-xs mx-auto"> {}
          <header className="mb-6">
            <div className="font-nycd text-xl text-indigo-500 subpixel-antialiased mb-1">Let&apos;s Connect</div>
            <h1 className="text-2xl font-bold text-slate-900">Contact our friendly team</h1>
          </header>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-slate-600 font-medium mb-1">Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full text-sm text-slate-600 bg-white border border-slate-300 appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" id="name" name="name" placeholder="Mark Smith" required />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block text-sm text-slate-600 font-medium mb-1">Message <span className="text-red-500">*</span></label>
              <textarea
                className="w-full text-slate-600 bg-white border border-slate-300 appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                name="message"
                id="message"
                rows="3"
                placeholder="Your request..."
                required
              ></textarea>
            </div>
            <button className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 group">
              Submit <span className="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </button>
          </form>
        </div>
      </div>

      {}
      <div className="w-1/2 flex justify-center items-center"> {}
        <Spline
          scene="https://prod.spline.design/sBPT5gLcnKIl0Lqs/scene.splinecode" 
          style={{ width: '100%', height: '100%' }} 
        />
      </div>
    </div>
  );
};

export default Contact;