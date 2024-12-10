import React from 'react';
import {FaRocket, FaShieldAlt, FaChild, FaBookOpen, FaTools} from 'react-icons/fa';

const KaizenFeatures = () => {
  return (
    <section id="features"className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl text-4xl font-bold text-center font-bold text-gray-900 py-5">Revolutionary Features</h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
          Explore features designed to make finance fun and easy for everyone. Get ready to level up your money skills!
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
              <FaRocket className="text-indigo-600 transition-all duration-500 group-hover:text-white w-8 h-8" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">Easy to Learn</h4>
            <p className="text-sm font-normal text-gray-500">Simple concepts and engaging content make it easy for kids to grasp financial basics.</p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
              <FaShieldAlt className="text-pink-600 transition-all duration-500 group-hover:text-white w-8 h-8" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">Expert Reviewed Info</h4>
            <p className="text-sm font-normal text-gray-500">All content is vetted by finance professionals to ensure accuracy and reliability.</p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
              <FaChild className="text-teal-600 transition-all duration-500 group-hover:text-white w-8 h-8" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">Child Safe</h4>
            <p className="text-sm font-normal text-gray-500">Designed with child safety in mind, ensuring a secure learning environment.</p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
              <FaTools className="text-orange-600 transition-all duration-500 group-hover:text-white w-8 h-8" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">Interactive Learning Tools</h4>
            <p className="text-sm font-normal text-gray-500">Engaging activities and quizzes that make learning about finance fun and interactive.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KaizenFeatures;