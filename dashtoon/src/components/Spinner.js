// Spinner.js
import React from 'react';
import { BarLoader } from 'react-spinners';

const Spinner = () => {
  return <div style={{width:'200px', display:'flex',justifyContent: 'center'}}><BarLoader color="#ffffff" loading={true} /></div>;
};

export default Spinner;
