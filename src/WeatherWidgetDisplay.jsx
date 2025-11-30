import React, { useEffect } from 'react';

const WeatherWidgetDisplay = ({ href, label1, label2 }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    script.id = 'weatherwidget-io-js';

    // Remove existing script if it exists to avoid duplicates
    const existingScript = document.getElementById('weatherwidget-io-js');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      if (document.getElementById('weatherwidget-io-js')) {
        document.getElementById('weatherwidget-io-js').remove();
      }
    };
  }, [href]); // Rerun effect if href changes

  return (
    <div>
      <h1 className="meteorologia-title">{label1}</h1>
      <a
        className="weatherwidget-io"
        href={href}
        data-label_1={label1}
        data-label_2={label2}
        data-icons="Climacons Animated"
        data-mode="Forecast"
        data-days="5"
        data-theme="pure"
      >
        {label1} {label2}
      </a>
    </div>
  );
};

export default WeatherWidgetDisplay;
