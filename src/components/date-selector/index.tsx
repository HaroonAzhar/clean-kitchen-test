import React, {useEffect, useState} from 'react';
// import styles from './styles.module.css';


interface Date {
    day: number,
    month: number,
    year: number
}

export default function DateSelector() {

    const d = new Date();
     const month= d.getMonth() +1;
    const day= d.getDate();
    const year =  d.getFullYear();
	

    const [state, setState] = useState<Date>({day:day,month:month,year:year })

    useEffect(() => {

    }, []);

    useEffect(() => {
       
    }, []);

    return (
        <div  data-test-id='' className='date-selector-container' >
           <label>Enter ddelivery date:
        <input
          type="number" 
          value={state.day}
          onChange={(e) => setState({...state, day: parseInt(e.target.value) }) }
        //   setState({...state, loading: true});
        />
        <input
          type="number" 
          value={state.month}
          onChange={(e) => setState({...state, day: parseInt(e.target.value) }) }
        //   setState({...state, loading: true});
        />
        <input
          type="number" 
          value={state.year}
          onChange={(e) => setState({...state, day: parseInt(e.target.value) }) }
        //   setState({...state, loading: true});
        />
      </label> 
            
           
        </div>
    );
}
