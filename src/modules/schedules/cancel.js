import { schedulesDays } from './load.js';
import { scheduleCancel } from '../../services/schedule-cancel.js';


const periods = document.querySelectorAll('.period'); 

// Gera evento de clique para cada lista manha, tarde e noite.
periods.forEach((period) => {

    period.addEventListener('click', async (event) => {
        if(event.target.classList.contains('cancel-icon')) {
            // obter li pai do elemento clicado 
            const item = event.target.closest('li');
            const {id} = item.dataset;


            if (id){
                const isConfirmed = confirm('Tem certeza que deseja cancelar este agendamento?');
                if (isConfirmed) {
                    // Aqui voce cancela o agendamento
                    const wasCancelled = await scheduleCancel({id});
                    
                    if (wasCancelled) {
                        await schedulesDays();
                        alert('Agendamento cancelado com sucesso!');
                    }
                }
            }
        }
})
})