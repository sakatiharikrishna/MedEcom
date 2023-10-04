import React from 'react';
import { drugDetails } from './mockData';
const DrugDetails = (props) => { 
  const { id, name } = props.match.params;
  const selectedDrug = drugDetails.find((drug) => drug.id.toString() === id);
  console.log(name);

  if (!selectedDrug) {
    return <div>No drug found for the provided drugId.</div>;
  }
  
  return (
    <div style={{padding:30,textAlign:'justify'}}>
      <h3 style={{color:'#15ACA5',padding:5}}> {selectedDrug.name}</h3>
      <img src={selectedDrug.image} alt='imge' height={'200px'} />
      <p>{selectedDrug.description}</p>
      <h3><span className='bi bi-chevron-double-right'></span> Side Effects</h3>
      <p>{selectedDrug.sideEffects}</p>
      <h3><span className='bi bi-chevron-double-right'></span> Dosage</h3>
      <p>{selectedDrug.dosage}</p>
    </div>
  );
};

export default DrugDetails;