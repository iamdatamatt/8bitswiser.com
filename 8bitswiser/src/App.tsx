import { useState } from 'react'
import companyLogo from '/8bitswiser.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
          <img src={companyLogo} className="logo" alt="8 Bits Wiser logo" />
      </div>
      <h1>8 Bits Wiser</h1>
      <h2>Technology Consulting</h2>
      <h3>AI/ML & Data Analytics</h3>
      <h3>Website Development & SEO</h3>
      <div className="card">
        <button onClick={() => window.location.href = 'mailto:contact@8bitswiser.com'}>
          Get in Contact
        </button>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} 8 Bits Wiser. All rights reserved.
      </p>
    </>
  )
}

export default App
