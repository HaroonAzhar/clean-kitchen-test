import { Order, TimeSlotCountMap } from './../types';
import {DeliveryTimeSlots} from '../../../../utils/constants'

function compareDateWithISOStringToBeEqual(date:Date, isoString:string): boolean {
    console.log('its a date1',  date.toISOString().substring(0,10))
    console.log('its a date2', isoString)
    

    const rES= date.toISOString().substring(0,10)
    console.log('its a date3', rES === isoString)

    return rES === isoString

}

function calculateAvailableDates(orders:Order[], selectedDate:Date): string[] {
  let availableTimesSlots:  string[];
   let orderCountPerTime:  TimeSlotCountMap; 
    // orderCountPerTime = {
    //     '10:30': 0,
    //     '12:30': 0,
    //     '18:30': 0,
    // }
    orderCountPerTime = {}

    console.log(" the order ccount----- Iniitial", orderCountPerTime);
//    orderCountPerTime=[]
   availableTimesSlots = [];
   const deliveryBoyCapacity = selectedDate.getDay()=== 0? 4:2;
//    console.log("capaitty fr todayy", deliveryBoyCapacity)
// console.log(" the order ccount-----", orderCountPerTime);
// console.log(" the order ccount----- ordeer", orders);

    orders.forEach((order)=>{
        // console.log(" the order ccount", order.time);
        // console.log(" the order ccount chec", orderCountPerTime[order.time]);
           if (!compareDateWithISOStringToBeEqual(selectedDate,order.date )) return
           console.log(" the order ccount oo", orderCountPerTime);
           console.log(" the order ccount oo.00", order.time);
           console.log(" the order ccount 1", orderCountPerTime[order.time]);
          
        (orderCountPerTime[order.time])?  orderCountPerTime[order.time] += 1 :orderCountPerTime[order.time] =  1;
        
        
        console.log(" the order ccount 2", orderCountPerTime[order.time]);
        
    
    })
    console.log(" the order ccount-----22", orderCountPerTime);

     DeliveryTimeSlots.forEach((timeSlot)=>{
        console.log("checks0",orderCountPerTime )
        console.log("checks1",timeSlot )
         console.log("checks",orderCountPerTime[timeSlot] )
        //  console.log("checks",orderCountPerTime[timeSlot] <= deliveryBoyCapacity )
         if( !orderCountPerTime[timeSlot] || orderCountPerTime[timeSlot]< deliveryBoyCapacity){
             availableTimesSlots.push(timeSlot)
            
         } 
     })

//    console.log("befoore", orderCountPerTime);
//    console.log("befoore2", availableTimesSlots);
    


  return availableTimesSlots;
}

export {calculateAvailableDates}