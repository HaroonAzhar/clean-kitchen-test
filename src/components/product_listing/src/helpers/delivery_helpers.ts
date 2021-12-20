import { Order, TimeSlotCountMap } from './../types';
import {DeliveryTimeSlots} from '../../../../utils/constants'

function CalculateAvailableDates(orders:Order[], selectedDate:Date): string[] {
  let availableTimesSlots:  string[];
   let orderCountPerTime: TimeSlotCountMap; 
   availableTimesSlots = [];
   const DeliveryBoyCapacity = selectedDate.getDay()=== 0? 4:2;
    DeliveryTimeSlots.forEach((timeSlot)=>{
        orderCountPerTime[timeSlot] += 1 ;
    })

     DeliveryTimeSlots.forEach((timeSlot)=>{
       if(orderCountPerTime[timeSlot] < DeliveryBoyCapacity) availableTimesSlots.push(timeSlot) ;
     })




  return availableTimesSlots;
}

export {CalculateAvailableDates}