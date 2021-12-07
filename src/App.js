import React, { useEffect, useState } from 'react';
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
    <div classNameName="app">
      <header classNameName="app-header">
        <h1>
          Carbon Qualms
        </h1>
       <p>Confess Your Carbon Footprint Sins to Get Your Penance</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>Select Your Sin:
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
          <p>{penance}</p>
        }
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
    </div>
  );
}

export default App;
