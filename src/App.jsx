import './App.css';
import { useState } from 'react';
import axios from 'axios';
import client from './Utils/client';

function App() {

  const [selectedHadith, setSelectedHadith] = useState('');

  const [hadith, setHadith] = useState([]);
  
  const handleSelection = (event) => {
    setSelectedHadith(event.target.value);
  }
 
  
  const getRandomHadith = () => {
    const randomNumber = Math.floor(Math.random() * 1500) + 1;

    client.get(`/books/${selectedHadith}/${randomNumber}`).then(({data}) => {
        console.log(data.data);
        setHadith(data.data);
    }).catch((error) => {
      console.error(error);
    })
  }

  return (
    <div className="App container">
      <div className="title mt-5">
        <h1>Random Hadith Online</h1>
      </div>

      <div className="search">
        <div className="select mt-5 w-100">
          <select className='form-control' name="hadith" onChange={handleSelection} value={selectedHadith}>
            <option selected>Pilih Hadith</option>
            <option value="abu-daud">HR. Abu Daud</option>
            <option value="bukhari">HR. Bhukari</option>
            <option value="darimi">HR. Darimi</option>
            <option value="ibnu-majah">HR. Ibnu Majah</option>
            <option value="malik">HR. Malik</option>
            <option value="muslim">HR. Muslim</option>
            <option value="nasai">HR. Nasai</option>
            <option value="tirmidzi">HR. Tirmidzi</option>
          </select>

          <button className="btn btn-primary mt-3" onClick={getRandomHadith}>Cari</button>
        </div>
      </div>

      {hadith.name != null ? (

        <div className="card-container">
          <div className="card w-100 mt-5">
              <div className="card-header fw-bold text-start">
                  {hadith.name} No {hadith.contents?.number}
              </div>
            <div className="card-body">
              <p className='card-text text-start'>{hadith.contents?.arab}</p>
              <p className='card-text text-start'>Artinya :</p>
              <p className='card-text text-start'>{hadith.contents?.id}</p>
            </div>
          </div>
        </div>
      ) : null}

    </div>
  );
}

export default App;
