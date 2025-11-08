import dayjs from 'dayjs';
import {openingHours} from '../../utils/opening-hours.js';
import {hoursClick} from './hours-click.js';

const hours = document.getElementById('hours');

export function hoursLoad ({date, dailySchedules}) {
    const opening = openingHours.map((hour) => {
    // limpa lista de horarios 
    hours.innerHTML = '';

    // Aqui voce obtem os horarios indisponiveis do dia
    const unavailableHours = dailySchedules.map((schedule) =>
        dayjs(schedule.when).format('HH:mm')) 

    

    const [scheduleHour] = hour.split(':');


    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs());
     const available = !unavailableHours.includes(hour) && !isHourPast;

     return {
        hour,
        available
     }
});
 opening.forEach(({hour, available}) => {
    const li = document.createElement('li');
    li.classList.add('hour');
    li.classList.add(available ? 'hour-available' : 'hour-unavailable');


    li.textContent = hour;

    if(hour === "09:00") {
        hourHeaderAdd('Manhã');
    }else if(hour=== "13:00") {
        hourHeaderAdd('Tarde');
    }else if(hour=== "19:00") {
        hourHeaderAdd('Noite');
    }

    hours.append(li);
 });
 
 hoursClick(); //chama a funcao de click dos horarios

}

function hourHeaderAdd (title) {
    const header = document.createElement('li');
    header.classList.add('hour-period');
    header.textContent = title;
    hours.append(header);
}