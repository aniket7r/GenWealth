"use client";
import React from "react";

const Calendar = () => {
  return (
    <div id="calendar" className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <iframe 
            src="https://sslecal2.investing.com?ecoDayBackground=%23f7f9fa&columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone,filters&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=8&lang=1" 
            width="500"  
            height="350" 
            frameBorder="0" 
            allowTransparency="true" 
            marginWidth="0" 
            marginHeight="0"
          ></iframe>
          <div className="poweredBy" style={{fontFamily: "Arial, Helvetica, sans-serif"}}>
            <span style={{fontSize: "11px", color: "#333333"}}>
              Real Time Economic Calendar provided by <a href="https://www.investing.com/" rel="nofollow" target="_blank" style={{fontSize: "11px", color: "#06529D", fontWeight: "bold"}} className="underline_link">Investing.com</a>.
            </span>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">
            Economic Calendar
          </h1>
          <p className="text-base font-normal text-gray-500">
            An Economic Calendar is your hype squad for financial events! 📅 It keeps you in the know about upcoming economic reports, earnings releases, and market-moving news. Whether you&apos;re looking to catch the latest job reports or inflation stats, this calendar helps you stay ahead of the game. Get ready to make informed moves and ride the market waves like a pro! 🌊
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;