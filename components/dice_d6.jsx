import React from 'react';
import "../styles/dice_d6.styles.css"

const D6 = () => {
  return ( 
    <div className="d6">
     <div className='side d6_1'>1</div>
     <div className='side d6_2'>2</div>
     <div className='side d6_3'>3</div>
     <div className='side d6_4'>4</div>
     <div className='side d6_5'>5</div>
     <div className='side d6_6'>6</div>
    </div>
  );
};

export default D6

