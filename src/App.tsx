import { useState, useEffect } from 'react'
import companyLogo from '/8bitswiser.svg'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`max-w-6xl mx-auto p-8 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="flex justify-center items-center mb-8">
        <img 
          src={companyLogo} 
          className="logo hover:scale-110 transition-transform" 
          alt="8 Bits Wiser logo" 
        />
      </div>
      
      <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        8 Bits Wiser
      </h1>
      
      <h2 className="text-gray-300">
        Technology Consulting
      </h2>
      
      <div className="space-y-2 mb-8">
        <h3 className="text-gray-200">AI/ML & Data Analytics</h3>
        <h3 className="text-gray-200">Website Development & SEO</h3>
      </div>
      
      <div className="card">
        <button 
          onClick={() => window.location.href = 'mailto:contact@8bitswiser.com'}
          className="bg-gradient-to-r from-primary to-secondary text-white 
                     px-6 py-3 rounded-lg font-semibold shadow-lg
                     hover:shadow-primary/50 hover:-translate-y-0.5 
                     transition-all duration-300"
        >
          Get in Contact
        </button>
      </div>
      
      <p className="copyright mt-8">
        © {new Date().getFullYear()} 8 Bits Wiser. All rights reserved.
      </p>
    </div>
  )
}

export default App