import dayjs from 'dayjs';

const form = document.querySelector('.form');
const clienteName = document.getElementById('client');
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

    try {
        const name = clienteName.trim();
        
        if(!name) {
            return alert("Por favor, preencha o nome do cliente");
        }


        const hourSelected = document.querySelector('.hour-selected');

        if(!hourSelected) {
            return alert("Por favor, selecione um horario");
        }


        // Recuperar somente a hora 
        const hour = hourSelected.innerText.split(':')[0];

        const when = dayjs(selectDate.value).set('hour', hour).format('YYYY-MM-DDTHH:mm:ss');

        const id = new Date().getTime();

        console.log({name, when, id});

    } catch (error) {
        alert("Nao foi possivel realizar o agendamento")
        console.log(error);
    }
}