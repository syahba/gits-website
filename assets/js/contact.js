const submit = document.getElementById('btn-submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  const form = document.getElementsByClassName('input-item');

  const validation = [...form].find(v => v.value === ''); // check for empty value

  if (!validation) {
    const message = `Hi, ${form[0].value} (${form[1].value})! Thank you for your message: ${form[2].value}`;
    alert(message);
  } else {
    alert('Input field cannot be empty.');
  };
});