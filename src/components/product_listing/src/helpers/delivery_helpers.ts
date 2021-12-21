import { Order, TimeSlotCountMap } from './../types';
import {DeliveryTimeSlots} from '../../../../utils/constants'

function compareDateWithISOStringToBeEqual(date:Date, isoString:string): boolean {
    

    const rES= `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    return rES === isoString

}

function calculateAvailableDates(orders:Order[], selectedDate:Date): string[] {
  let availableTimesSlots:  string[];
   let orderCountPerTime:  TimeSlotCountMap; 
    orderCountPerTime = {}
    availableTimesSlots = [];
    const deliveryBoyCapacity = selectedDate.getDay()=== 0? 4:2;

    orders.forEach((order)=>{
        
        if (!compareDateWithISOStringToBeEqual(selectedDate,order.date )) return
        (orderCountPerTime[order.time])?  orderCountPerTime[order.time] += 1 :orderCountPerTime[order.time] =  1;
        
    })
   

     DeliveryTimeSlots.forEach((timeSlot)=>{
         if( !orderCountPerTime[timeSlot] || orderCountPerTime[timeSlot]< deliveryBoyCapacity){
             availableTimesSlots.push(timeSlot)
            
         } 
     })


  return availableTimesSlots;
}

export {calculateAvailableDates}