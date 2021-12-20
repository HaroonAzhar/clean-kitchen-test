export interface Order {
    date: string,
    time: string,
    OrderID: string,
    customerId: string
}
// export interface Time {
//     time: string,
//     
// }

export interface TimeSlotCountMap {

        [timeSlot: string]: number;
    
    
}
export interface ProductListingState {

     selectedDate?:Date,
     selectedTime?: string,
     availableTimeSlot?: string[],
     orders?: Order[]
     


}
    // const [state, setState] = useState<Date>({day:day,month:month,year:year })
