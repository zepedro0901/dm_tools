import React from 'react';
import "../styles/dice_d6.styles.css"

const D6 = () => {
  return (

    <div className="d6">
      <div className='side d6_1 chosen'></div>
      <div className='side d6_2'></div>
      <div className='side d6_3'></div>
      <div className='side d6_4'></div>
      <div className='side d6_5'></div>
      <div className='side d6_6'></div>
    </div>
  );
};

export default D6

