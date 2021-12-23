import React, {useEffect, useState} from 'react';
import './styles/index.css';


export default function TimeSelector({availableTimeSlots, onSlotSelection}:{availableTimeSlots:string[], onSlotSelection: (value:string)=>void}) {

      const d = new Date();
      const month= d.getMonth() +1;
      const day= d.getDate();
      const year =  d.getFullYear();
      const selectedTime = (value:string)=>{
       // set the state 
       onSlotSelection(value)
    }

    return (
        <div  data-testid='' className='date-selector-container' >
             <label>Select a delivery Time:
       
       <select data-testid='ts-select' onChange={e=>selectedTime(e.target.value) } >
           {availableTimeSlots.map((slot, index)=>{
               return (
                <option data-testid='ts-option'   key={index} value={`${slot}`}>{slot}</option>
               )
           })}
    
  </select>
  
    </label>
           
        </div>
    );
}
