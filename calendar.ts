

const dateInput = document.querySelector('#date');
const titleInput = document.querySelector('#title');
const colorInput = document.querySelector('#color');

const eventButton = document.querySelector('#eventButton');

const eventsContainer = document.querySelector('#eventsContainer');

type event = {
  id: number;
  date: number;
  title: string;
  color: string;
} 


  
eventButton?.addEventListener('click',(event)=> {
  console.log(dateInput.value);
}); 


function renderEvents() => {

}