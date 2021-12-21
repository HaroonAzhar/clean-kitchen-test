import React, {useEffect, useState} from 'react';
// import styles from './styles.module.css';
import { IDate } from '../../utils/types';

export default function DateSelector({onDateChange}:{onDateChange:(date:Date)=>void}) {

    const d = new Date();
     const month= d.getMonth() +1;
    const day= d.getDate();
    const year =  d.getFullYear();
	

    const [state, setState] = useState<IDate>({day:day,month:month,year:year })
    const handleDayChange = (value:number) =>{
      console.log("vallue", value)
       setState({...state, day: value})
       onDateChange(new Date(`${state.year}-${state.month}-${state.day}`))
    }
    const handleMonthChange = (value:number) =>{
      setState({...state, month: value})
      onDateChange(new Date(`${state.year}-${state.month}-${state.day}`))
   }
   const handleYearChange = (value:number) =>{
    setState({...state, year: value})
    
    onDateChange(new Date(`${state.year}-${state.month}-${state.day}`))
 }

    useEffect(() => {
      onDateChange(new Date(`${state.year}-${state.month}-${state.day}`)) 


    }, [state.day,state.month,state.year]);

    useEffect(() => {
       
    }, []);

    return (
        <div  data-test-id='' className='date-selector-container' >
           <label>Enter delivery date:
        <input
          type="number" 
          value={state.day}
          onChange={(e) => handleDayChange(parseInt(e.target.value))}
        />
        <input
          type="number" 
          value={state.month}
          onChange={(e) => handleMonthChange(parseInt(e.target.value))}
        />
        <input
          type="number" 
          value={state.year}
          onChange={(e) => handleYearChange(parseInt(e.target.value))}
        />
      </label> 
            
           
        </div>
    );
}
