"use client"; 
import React, { useEffect } from 'react';

const Ticker = () => {
  useEffect(() => {

    const existingScript = document.getElementById('tradingview-ticker-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'tradingview-ticker-script'; 
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          },
          {
            "description": "TSLA",
            "proName": "NASDAQ:TSLA"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "regular",
        "colorTheme": "light",
        "locale": "en"
      });
      document.querySelector('.tradingview-widget-container__widget').appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container my-5"> {}
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
  );
};

export default Ticker;