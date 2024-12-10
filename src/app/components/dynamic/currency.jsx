import React from 'react';

const Currency = () => {
  return (
    <section id="currency" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-center text-gray-900 py-5">Currency Cross Rates</h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            A Currency Cross Rate is like your cheat sheet for trading currencies without needing the USD! 🌍 It shows you how much one currency is worth compared to another, making it super easy to swap cash when you&apos;re traveling or investing.
          </p>
        </div>
        <div className="w-full h-[600px]"> {}
          <iframe 
            src="https://www.widgets.investing.com/live-currency-cross-rates?theme=lightTheme&roundedCorners=true&pairs=1,3,2,4,7,5,8,6,9,10,49,11" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowTransparency="true" 
            marginWidth="0" 
            marginHeight="0"
          ></iframe>
        </div>
        <div className="poweredBy text-center mt-2" style={{fontFamily: "Arial, Helvetica, sans-serif"}}>
          Powered by <a href="https://www.investing.com?utm_source=WMT&amp;utm_medium=referral&amp;utm_campaign=LIVE_CURRENCY_X_RATES&amp;utm_content=Footer%20Link" target="_blank" rel="nofollow">Investing.com</a>
        </div>
      </div>
    </section>
  );
};

export default Currency;