import dayjs from 'dayjs';

const form = document.querySelector('.form');
const selectDate = document.querySelector('#date');

// Data atual parao input 

const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

//carrega a data atual 
selectDate.value = inputToday;
//Data minima para agendamento
selectDate.min = inputToday;

form.onsubmit = (event) => {
    // Previne o comportamento padrão de carregar a pagina
    event.preventDefault();
}