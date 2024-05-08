// selectors
const btnClose = document.getElementById('btn-close');
const card = document.getElementById('popup');

// event listener for closing popup
btnClose.addEventListener('click', () => {
  card.style.display = 'none';
});

// open popup function for multiple buttons
const openPopup = () => {
  card.style = `
    display: flex;
    justify-content: center;
    align-items: center;
    `;
};

const confirmOrder = (params) => {
  card.style.display = 'none';

  alert(`Thank you for purchasing our ${params} Plan.`);
};