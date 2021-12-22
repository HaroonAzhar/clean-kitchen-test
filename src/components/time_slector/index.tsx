import React, {useEffect, useState} from 'react';
// import styles from './styles.module.css';







export default function TimeSelector({availableTimeSlots}:{availableTimeSlots:string[]}) {

      const d = new Date();
      const month= d.getMonth() +1;
      const day= d.getDate();
      const year =  d.getFullYear();
      const selectedTime = (value:any)=>{
        console.log("wwwww",value)
        console.log("wwwww2",value.value)
    }

    return (
        <div  data-testid='' className='date-selector-container' >
             <label>Select a delivery Time:
       
       <select data-testid='ts-select' onChange={e=>selectedTime(e.target) } >
           {availableTimeSlots.map((slot, index)=>{
               return (
                <option data-testid='ts-option'   key={index} value={`${slot}`}>{slot}</option>
                // {onClick={(e)=>console.log("AYYYYYY", e)}} onClick={(e)=>selectedTime(e.target)}
               )
           })}
    
  </select>
  
    </label>
           
        </div>
    );
}
