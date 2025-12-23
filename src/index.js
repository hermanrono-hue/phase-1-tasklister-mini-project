// fom select
const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

// submit listener
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  //form data
  const input = document.querySelector('#new-task-description');
  const task = input.value.trim(); // spaces del

  if (task !== '') {
    buildToDo(task); //todo
    input.value = ''; // Clear the input after adding
  }
});
//item add
function buildToDo(task) {
  const li = document.createElement('li');
  li.textContent = task;
  taskList.appendChild(li);
}