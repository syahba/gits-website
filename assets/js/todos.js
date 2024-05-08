// selectors
const input = document.getElementById('task');
const inputBtn = document.getElementById('btn-task');
const container = document.getElementById('list');

const todos = JSON.parse(localStorage.getItem('todos')); // get data from local storage

window.addEventListener('DOMContentLoaded', () => {
  // show existing data when loaded
  if (todos) {
    todos.forEach(value => {
      createTask(value);
    });
  };
});

inputBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value && !todos.find(v => v === input.value)) {
    const data = todos ? [...todos, input.value] : [input.value]; // existing data validation
    localStorage.setItem('todos', JSON.stringify(data)); // save new data

    createTask(input.value); // create new html element

    alert('Success create task');
  } else {
    alert('Task cannot be empty or duplicate'); // input data error handler
  };
});

const createTask = (params) => {
  const div = document.createElement('div');
  div.className = 'list-item';
  div.innerHTML = `
    <i class="fa-regular fa-check-square" style="color: #fa6400;" id=${params} onclick="completeTask('${params}')"></i>
    <p class="task">${params}</p>
    <i class="fa fa-trash" style="color: #fa6400;" onclick="deleteTask('${params}')"></i>
    `;

  container.appendChild(div); // insert child to to do list
};

const deleteTask = (params) => {
  const data = todos.filter(v => v !== params); // filter out deleted task
  localStorage.setItem('todos', JSON.stringify(data)); // replace saved data

  container.innerHTML = ''; // clear container for new items
  data.forEach(value => { // loop new datas
    createTask(value);
  });

  alert('Success delete task');
};

const completeTask = (params) => {
  const i = document.getElementById(params); // get checkbox element

  if (i.parentNode.classList[1]) { // check if item completed
    i.parentNode.classList.remove('checked');
    i.classList.replace('fa-solid', 'fa-regular');
  } else {
    i.parentNode.classList.add('checked');
    i.classList.replace('fa-regular', 'fa-solid');
  };
};