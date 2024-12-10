"use client";
import React, { useEffect } from 'react';

const News = () => {
  useEffect(() => {
    const scripts = [
      {
        src: "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js",
        innerHTML: JSON.stringify({
          feedMode: "all_symbols",
          isTransparent: true,
          displayMode: "regular",
          width: "400",
          height: "550",
          colorTheme: "light",
          locale: "en"
        })
      },
      {
        src: "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js",
        innerHTML: JSON.stringify({
          feedMode: "market",
          market: "crypto",
          isTransparent: true,
          displayMode: "regular",
          width: "400",
          height: "550",
          colorTheme: "light",
          locale: "en"
        })
      }
    ];

    scripts.forEach((scriptConfig, index) => {
      const script = document.createElement('script');
      script.src = scriptConfig.src;
      script.async = true;
      script.innerHTML = scriptConfig.innerHTML;

      const widgetContainer = document.querySelectorAll('.tradingview-widget-container__widget')[index];
      widgetContainer.appendChild(script);
    });

    return () => {
      const widgetContainers = document.querySelectorAll('.tradingview-widget-container__widget');
      widgetContainers.forEach(container => {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      });
    };
  }, []);

  return (
    <section id="news">
    <div className="bg-gray-50 p-4"> {}
      <div className="flex justify-center space-x-24"> {}
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
              <span className="blue-text">Track all markets on TradingView</span>
            </a>
          </div>
        </div>
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
              <span className="blue-text">Track all markets on TradingView</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default News;