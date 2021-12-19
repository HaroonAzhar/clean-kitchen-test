import React, {useEffect, useState} from 'react';
// import styles from './styles.module.css';
import DateSelector from '../date-selector'
import TimeSelector from '../time-slector'

export default function ProductListng() {

    useEffect(() => {

    }, []);

    useEffect(() => {
       
    }, []);

    return (
        <div  data-test-id='' className='product-listing-container' >
            <h2> Very Cool Prroducct </h2>

            <img src={"https://picsum.photos/seed/phone/500/500"}></img>

            <DateSelector/>
            
            <TimeSelector/>

           
        </div>  
    );
}
