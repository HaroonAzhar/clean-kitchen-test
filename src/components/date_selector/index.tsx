import React, {useEffect, useState} from 'react';
// import styles from './styles.module.css';
import { IDate } from '../../utils/types';
import { DateSelectorProps } from './src/types';


// 

export default function DateSelector(prop:DateSelectorProps) {

    const d = new Date();
     const month= d.getMonth() +1;
    const day= d.getDate();
    const year =  d.getFullYear();
	

    const [state, setState] = useState<IDate>({day:day,month:month,year:year })

    useEffect(() => {
        

    }, []);

    useEffect(() => {
       
    }, []);

    return (
        <div  data-test-id='' className='date-selector-container' >
           <label>Enter delivery date:
        <input
          type="number" 
          value={state.day}
          onChange={(e) => setState({...state, day: parseInt(e.target.value) }) }
        //   setState({...state, loading: true});
        />
        <input
          type="number" 
          value={state.month}
          onChange={(e) => setState({...state, month: parseInt(e.target.value) }) }
        //   setState({...state, loading: true});
        />
        <input
          type="number" 
          value={state.year}
          onChange={(e) => setState({...state, year: parseInt(e.target.value) }) }
        //   setState({...state, loading: true});
        />
      </label> 
            
           
        </div>
    );
}