// selectors
const input = document.getElementById('task');
const inputBtn = document.getElementById('btn-task');
const container = document.getElementById('list');

window.addEventListener('DOMContentLoaded', () => {
  const todos = JSON.parse(localStorage.getItem('todos')); // get data from local storage
  // show existing data when loaded
  if (todos) {
    todos.forEach(value => {
      createTask(value);
    });
  };
});

inputBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value) {
    const obj = { task: input.value, isCompleted: false };
    let data = [obj];
    
    const todos = JSON.parse(localStorage.getItem('todos')); // get data from local storage

    if (todos) {
      const duplicate = todos.find(v => v.task === input.value);
      if (duplicate) {
        return alert('Task cannot be duplicate');
      } else {
        data = [...todos, obj];
      }
    };

    localStorage.setItem('todos', JSON.stringify(data)); // save new data
    createTask(obj); // create new html element
  } else {
    alert('Task cannot be empty'); // empty data error handler
  };
});

const createTask = (params) => {
  const div = document.createElement('div');

  const status = params.isCompleted ? 'fa-solid' : 'fa-regular'; // check task status
  div.innerHTML = `
    <div class="task-item">
      <i class="${status} fa-check-square" id=${params.task} onclick="completeTask('${params.task}')"></i>
      <p class="task-name">${params.task}</p>
    </div>
    <i class="fa fa-trash" onclick="deleteTask('${params.task}')"></i>
  `;
  div.className = 'list-item';

  container.appendChild(div); // insert child to to do list
};

const deleteTask = (params) => {
  const todos = JSON.parse(localStorage.getItem('todos')); // get data from local storage

  const data = todos.filter(v => v.task !== params); // filter out deleted task
  localStorage.setItem('todos', JSON.stringify(data)); // replace saved data

  container.innerHTML = ''; // clear container for new items
  data.forEach(value => { // loop new datas
    createTask(value);
  });
};

const completeTask = (params) => {
  const todos = JSON.parse(localStorage.getItem('todos')); // get data from local storage
  const index = todos.findIndex(v => v.task === params);

  const i = document.getElementById(params); // get checkbox element

  if (todos[index].isCompleted) { // check if item completed
    i.parentNode.classList.remove('checked');
    i.classList.replace('fa-solid', 'fa-regular');

    todos[index].isCompleted = false;
  } else {
    i.parentNode.classList.add('checked');
    i.classList.replace('fa-regular', 'fa-solid');

    todos[index].isCompleted = true;
  };

  localStorage.setItem('todos', JSON.stringify(todos)); // replace saved data
};