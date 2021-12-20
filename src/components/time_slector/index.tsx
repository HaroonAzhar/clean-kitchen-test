import React, {useEffect, useState} from 'react';
// import styles from './styles.module.css';







export default function TimeSelector() {

    const d = new Date();
     const month= d.getMonth() +1;
    const day= d.getDate();
    const year =  d.getFullYear();
	

    // const [state, setState] = useState<Date>({day:day,month:month,year:year })

    const SelectedTime = (value:string)=>{
        console.log(value)
    }

    useEffect(() => {

    }, []);

    useEffect(() => {
       
    }, []);

    return (
        <div  data-test-id='' className='date-selector-container' >
             <label>Select a delivery Time:
       <select onChange={e=>SelectedTime(e.target.value) } 
 >
    <option value="Orange">Orange</option>
    <option value="Radish">Radish</option>
    <option value="Cherry">Cherry</option>
  </select>
  
    </label>
           
        </div>
    );
}
