const button = document.querySelector('button');

const name = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');

const table = document.querySelector('table');
const messagesElement = document.querySelector('.messages');
const form = document.querySelector('form');

let messages = [];

function errorCheck() {
  messages = [];

  if (name.value === '') {
    messages.push('Please type the name');
  }

  if (date.value === '') {
    messages.push('Please full fill the date');
  }

  if (amount.value === '') {
    messages.push('Please type the amount');
  }

  if (isNaN(amount.value)) {
    messages.push('Please type the amount by number');
  }
}

function addTableData(data) {
  let td = document.createElement('td');

  td.textContent = data;
  return td;
}

function addDeleteButton(tr) {
  let button = document.createElement('button');
  button.textContent = 'Delete';

  button.addEventListener('click', () => {
    tr.innerHTML = '';
  });
  return button;
}

button.addEventListener('click', () => {
  let tr = document.createElement('tr');

  errorCheck();

  if (messages.length > 0) {
    messagesElement.textContent = messages.join(', ');
  } else {
    tr.appendChild(addTableData(name.value));
    tr.appendChild(addTableData(date.value));
    tr.appendChild(addTableData(amount.value));
    tr.appendChild(addDeleteButton(tr));
  }

  table.appendChild(tr);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
