import {hoursLoad} from '../form/hours-load.js';
import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js';
import { schedulesShow } from '../schedules/show.js';

const selectDate = document.querySelector('#date');
export async function schedulesDays() {
    
    const date = selectDate.value;
    // Busca na API os agendamentos 
    const dailySchedules = await scheduleFetchByDay({date});

    // Exibe os agendamentos do dia
    schedulesShow({dailySchedules});
    
    // Carrega os horarios disponiveis
    hoursLoad({date, dailySchedules});
}