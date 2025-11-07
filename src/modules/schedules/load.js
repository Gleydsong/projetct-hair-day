import {hoursLoad} from '../form/hours-load.js';


const selectDate = document.querySelector('#date');
export function schedulesDays () {
    
    const date = selectDate.value;
    hoursLoad({date})
}