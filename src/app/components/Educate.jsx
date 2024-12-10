"use client"; 
import React from "react";
import Link from 'next/link';

const DottedButton = () => {
  return (
    <Link href="./components/educate">
      <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Learn More
      </button>
    </Link>
  );
};

const Educate = () => {
  return (
    <div id="educate" className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 py-5">
            Knowledge
            <br className="md:hidden" />
            <span className="text-purple-500">
              {' '}is the key to success
              <br className="md:hidden" />
            </span>
          </h1>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto mb-4"> {}
            At Alchem Bills, we provide you with the tools and knowledge to navigate the world of finance. Let&apos;s keep it 100—learning how to turn your savings into investments is key. It&apos;s all about stacking that bread and growing your wealth effectively. Don&apos;t sleep on this opportunity!
          </p>
          <DottedButton /> {}
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
          {}
          <video 
            controls 
            className="rounded-lg shadow-lg w-full" 
            height={400} 
            width={800}
          >
            <source src="https://file.io/oQ0Xd8fNtxIs" type="video/mp4" /> {}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Educate;