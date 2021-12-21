import React, {useEffect, useState} from 'react';
// import styles from './styles.module.css';
import DateSelector from '../date_selector'
import TimeSelector from '../time_slector'
import { GetAllOrders } from "../../utils/api_requests";
import {calculateAvailableDates} from "./src/helpers/delivery_helpers"
import { Order } from './src/types';

export default function ProductListng() {
    // const [selectedDate, setSelectedDate] = useState(Date())
    // const [state, setState] = useState<ProductListingState>({
    //     selectedDate: new Date(),
    //     availableTimeSlot: []
    //  })
     const[selectedDate,setSelectedDate] = useState<Date>(new Date)
     const[availableTimeSlots,setAavailableTimeSlots] = useState<string[]>([])
     const [ orrders, setOrders ] = useState< Order[]>([]);
  
    const orders = GetAllOrders() 

    useEffect(() => {

        //initial render
        //get orders
        orders.then(orders => {
            // setUser(data.user);
            // setPosts(data.posts);
            // console.log("orders =",orders)

            // setState({...state, orders:orders})
            setOrders(orders)

            


          });
          
         
        
      

    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {

        // console.log("about t set slots", state.orders )
        // console.log("about t set slots 2", state.selectedDate)
        // if(state.selectedDate){
        //     orders.then( response => {

        //         // return response.json();
                
        //  })
        // }
        const answers = calculateAvailableDates(orrders, selectedDate)
                // setState({...state, availableTimeSlot: answers})
                setAavailableTimeSlots(answers)
        
        // if(state.orders && state.selectedDate){
        //     // console.log("about t set slots")
        //     let answers = await 
           
        // // console.log("answers", answers)
        // setState({...state, availableTimeSlot: answers})
        // }
        
        
       
    }, [selectedDate, orrders]);



    return (
        <div  data-test-id='' className='product-listing-container' >
            <h2> Very Cool Prroducct </h2>

            <img src={"https://picsum.photos/seed/phone/500/500"}></img>

            <DateSelector onDateChange={(e)=>{setSelectedDate(e)}}  />
            <h1>{`${selectedDate}`}</h1>

            <TimeSelector availableTimeSlots={availableTimeSlots} />

           
        </div>  
    );
}
