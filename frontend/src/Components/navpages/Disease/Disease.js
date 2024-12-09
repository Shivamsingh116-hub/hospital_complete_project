import React, { useState, useEffect } from 'react';
import diseaseData from './Diseasedata';  // Import disease data from the diseaseData.js file
import './Disease.css';  // Optional: For custom styling
import Footer from '../Footer/Footer';

const Disease = () => {
  const [diseases, setDiseases] = useState([]);  // State to store the list of diseases

  useEffect(() => {
    // Here, we're directly using the imported data (diseaseData) to set the state
    setDiseases(diseaseData);
  }, []);  // Empty dependency array to fetch the data once when the component mounts

  return (
    <div className='disease-component'>


      <div className="disease-container">
        <h1>Disease Information</h1>
        {diseases.length === 0 ? (
          <p>Loading diseases data...</p>
        ) : (
          <div className="disease-list">
            {diseases.map((disease, index) => (
              <div key={index} className="disease-card">
                <h2>{disease.name}</h2>
                <h3>Symptoms:</h3>
                <ul>
                  {disease.symptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom}</li>
                  ))}
                </ul>
                <h3>Causes:</h3>
                <ul>
                  {disease.causes.map((cause, idx) => (
                    <li key={idx}>{cause}</li>
                  ))}
                </ul>
                <h3>Treatment:</h3>
                <p>{disease.treatment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='footer'> <Footer /></div>

    </div>
  );
};

export default Disease;
