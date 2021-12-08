import React, { useState } from 'react';
import './App.css';

const PENANCE_OPTIONS = [
  'ride your bike for 1,000 miles while singing "Baby Shark"',
  'close your eyes and count from 1 to 99,863',
  'tell the same knock knock joke to the next 500 people you see',
  'put paste all over your hands and press them together',
  'tell someone to hide your car keys and not tell you where they are until at least 3 years have passed'
];

const SIN_OPTIONS = [
  'went on a 3,000 mile flight',
  'had a campfire or used the fire pit',
  'ran the heater all day/night',
  'ran the A/C all day/night'
];

function App() {
  const [sin, setSin] = useState('');
  const [penance, setPenance] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (sin) {
      const index = Math.floor(Math.random() * PENANCE_OPTIONS.length);
      console.log(index)
      setPenance(PENANCE_OPTIONS[index]);
    }
  };

  return (
    <div className="app">
      <main>
        <h1>Carbon Qualms</h1>
        <div className='sin-and-penance'>
          <form onSubmit={handleSubmit}>
            <label>Select your carbon footprint sin and receive your penance:
              <select value={sin} onChange={(e) => setSin(e.target.value)}>
                <option />
                {
                  SIN_OPTIONS.map((sin) => {
                    return <option key={sin} value={sin}>{sin}</option>
                  })
                }
              </select>
            </label>
            <button type="submit">Confess your sin</button>
          </form>       
          {penance && sin &&
            <p className="penance">{penance}</p>
          }
        </div>
        
        <div className='campfire'>
          <div className='red-1'></div>
          <div className='orange-1'></div>
          <div className='yellow-1'></div>
          <div className='red-2'></div>
          <div className='red-3'></div>
          <div className='yellow-1'></div>

          <div className='orange-1'></div>
          <div className='red-1'></div>
          <div className='orange-1'></div>
          <div className='yellow-1'></div>
          
          <div className="wood-1"></div>
          <div className="wood-2"></div>
          <div className="ground"></div>
        </div>
  
  
      </main>
      <footer>
        <p>If you want to do more than just confess your sins to the internet, nature.org has a <a href="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/" target="_blank" rel="noopener noreferrer">carbon footprint calculator</a> and also has great suggestions on what you can do to reduce your carbon footprint.</p>
      </footer>
    </div>
      
  );
}

export default App;
