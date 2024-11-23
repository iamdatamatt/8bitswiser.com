import { useState, useEffect } from "react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`max-w-6xl mx-auto p-8 text-center ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="flex justify-center items-center mb-8">
        <img
          src="/8-bits-wiser.svg"
          className="logo hover:scale-110 transition-transform"
          alt="8 Bits Wiser logo"
        />
      </div>

      <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        8 Bits Wiser
      </h1>

      <h2 className="text-gray-300">Technology Consulting</h2>

      <div className="space-y-2 mb-8">
        <h3 className="text-gray-200">AI/ML & Data Analytics</h3>
        <h3 className="text-gray-200">Website Development & SEO</h3>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-4">
        <h2 className="text-white/70 bg-clip-text text-transparent font-bold mb-4">Empowering Innovation Across Industries</h2>

        <div className="flex justify-center items-center gap-4 md:gap-8 overflow-x-auto px-4 pt-2 pb-1">
          <a 
            href="https://gobeacon.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:-translate-y-1 duration-300 shrink-0"
          >
            <img 
              src="/beacon.png" 
              alt="Beacon Mobility" 
              className="h-8 md:h-12 w-auto brightness-0 invert"
            />
          </a>
          <a 
            href="https://www.cincinnatigeriatricpsych.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:-translate-y-1 duration-300 shrink-0"
          >
            <img 
              src="/ncgc.png" 
              alt="The NeuroPsych Center of Greater Cincinnati" 
              className="h-8 md:h-12 w-auto brightness-0 invert"
            />
          </a>
          <a 
            href="https://github.com/iamdatamatt/sideline-sprint-website" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:-translate-y-1 duration-300 shrink-0"
          >
            <img 
              src="/sideline-sprint.png" 
              alt="Sideline Sprint" 
              className="h-8 md:h-12 w-auto brightness-0 invert"
            />
          </a>
          <a 
            href="https://datamatt.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:-translate-y-1 duration-300 shrink-0"
          >
            <img 
              src="/data-matt.png" 
              alt="Data Matt" 
              className="h-8 md:h-12 w-auto"
            />
          </a>
        </div>
      </div>

      <div className="card">
        <button
          onClick={() =>
            (window.location.href = "mailto:contact@8bitswiser.com")
          }
          className="bg-gradient-to-r from-primary to-secondary text-white 
                     px-6 py-3 rounded-lg font-semibold shadow-lg
                     hover:shadow-primary/50 hover:-translate-y-0.5 
                     transition-all duration-300"
        >
          Get in Contact
        </button>
      </div>

      <p className="copyright mt-8">© 8 Bits Wiser. All rights reserved.</p>
    </div>
  );
}
