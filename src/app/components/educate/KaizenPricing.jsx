import React from 'react';
import { FaCheck } from 'react-icons/fa';

const KaizenPricing = () => {
  return (
    <section id="pricing">
    <div className="bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 py-5">
          Choose your <span className="text-purple-500">Plan</span>
        </h1>
        <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
          Select a plan that offers powerful tools to simplify your financial journey and unlock your potential.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Pro
                <span className="sr-only"> Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">30$</strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <FaCheck className="size-5 text-indigo-700" />
                <span className="text-gray-700">3+ users</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheck className="size-5 text-indigo-700" />
                <span className="text-gray-700">50+ messages per day</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheck className="size-5 text-indigo-700" />
                <span className="text-gray-700">Email support</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheck className="size-5 text-indigo-700" />
                <span className="text-gray-700">Help center access</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheck className="size-5 text-indigo-700" />
                <span className="text-gray-700">Phone support</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheck className="size-5 text-indigo-700" />
                <span className="text-gray-700">Community access</span>
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get Started
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Starter
                <span className="sr-only"> Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">0$</strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <FaCheck className="size-5 text-indigo-700" />
                <span className="text-gray- 700">1 user</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheck className="size-5 text-indigo-700" />
                <span className="text-gray-700">10 messages per day</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheck className="size-5 text-indigo-700" />
                <span className="text-gray-700">Email support</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheck className="size-5 text-indigo-700" />
                <span className="text-gray-700">Help center access</span>
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default KaizenPricing;