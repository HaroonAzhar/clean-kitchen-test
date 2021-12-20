import React, {useEffect, useState} from 'react';
// import styles from './styles.module.css';
import DateSelector from '../date_selector'
import TimeSelector from '../time_slector'
import { GetAllOrders } from "../../utils/api_requests";
import {CalculateAvailableDates} from "./src/helpers/delivery_helpers"
import { ProductListingState } from './src/types';

export default function ProductListng() {
    // const [selectedDate, setSelectedDate] = useState(Date())
    const [state, setState] = useState<ProductListingState>({ })
  
    const orders = GetAllOrders() 

    useEffect(() => {

        //initial render
        //get orders
        orders.then(orders => {
            // setUser(data.user);
            // setPosts(data.posts);
            console.log("orders =",orders)


          });
        
      

    }, []);

    useEffect(() => {
       
    }, []);

    return (
        <div  data-test-id='' className='product-listing-container' >
            <h2> Very Cool Prroducct </h2>

            <img src={"https://picsum.photos/seed/phone/500/500"}></img>

            <DateSelector onDateChange={(e)=>setState({...setState, selectedDate:e })}  />
            <h1>{`${state.selectedDate}`}</h1>
            <TimeSelector/>

           
        </div>  
    );
}
