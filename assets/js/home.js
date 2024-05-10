// selectors
const btnClose = document.getElementsByClassName('btn-close');
const cards = document.getElementsByClassName('popup');

// event listener for closing popup
[...btnClose].forEach(btn => {
  btn.addEventListener('click', () => {
    [...cards].forEach(elem => {
      elem.style.display = 'none';
    });
  });
});

// open popup function for multiple buttons
const openPopup = () => {
  [...cards].forEach(elem => {
    elem.style = `
      display: flex;
      justify-content: center;
      align-items: center;
      `;
  });

};

const confirmOrder = (params) => {
  [...cards].forEach(elem => {
    elem.style.display = 'none';
  });

  alert(`Thank you for purchasing our ${params} Plan.`);
};