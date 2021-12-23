import React, {useEffect, useState} from 'react';
import  './styles/index.css';
import DateSelector from '../date_selector'
import TimeSelector from '../time_slector'
import { GetAllOrders } from "../../utils/api_requests";
import {calculateAvailableDates} from "./src/helpers/delivery_helpers"
import { Order } from '../../utils/types';

export default function ProductListng() {
     const[selectedDate,setSelectedDate] = useState<Date>(new Date)
     const[selectedTimeSlot,setSelectedTimeSlot] = useState<string>('')
     const[availableTimeSlots,setAavailableTimeSlots] = useState<string[]>([])
     const [ orrders, setOrders ] = useState< Order[]>([]);
  
    const orders = GetAllOrders() 

    useEffect(() => {
        orders.then(orders => {
            setOrders(orders)
          });

    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {

          const answers = calculateAvailableDates(orrders, selectedDate)
          setAavailableTimeSlots(answers)
       
    }, [selectedDate, orrders]);



    return (
        <div  className='pl-container' >
            <h2> Very Cool Prroducct </h2>
          
            <img src={"https://picsum.photos/seed/phone/500/500"}></img>
            <div className='pl-ds-container'>
            <DateSelector onDateChange={(e)=>{setSelectedDate(e)}}  />
            </div>
            <div className='pl-ts-container'>
            <TimeSelector  availableTimeSlots={availableTimeSlots} onSlotSelection={(e)=>{setSelectedTimeSlot(e)}} />
            </div>
            
           
        </div>  
    );
}
