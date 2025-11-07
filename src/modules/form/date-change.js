
import { schedulesDays } from "../schedules/load";

const selectDate = document.getElementById('date');


// recarregar a lista de horarios 

selectDate.onchange = () => {
    schedulesDays();

}