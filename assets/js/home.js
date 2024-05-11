// selectors
const btnClose = document.getElementsByClassName('btn-close');
const cards = document.getElementsByClassName('popup');
const collage = document.querySelectorAll('.gallery-item');
const gallery = document.getElementById('gallery-scroll');
const image = document.getElementById('scroll-img');
const btnGallery = document.getElementById('btn-close-scroll');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

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

// close popup when order button clicked
const confirmOrder = (package) => {
  [...cards].forEach(elem => {
    elem.style.display = 'none';
  });

  alert(`Thank you for purchasing our ${package} package.`);
};

// popup scroll gallery
collage.forEach((img, i) => {
  img.addEventListener('click', () => {
    gallery.style = `
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    // reset button style
    const styles = activeButton(true);
    btnLeft.style = styles;
    btnRight.style = styles;

    image.src = collage[i].children[0].src;
    image.alt = `teaching-${i}`;
  });
});

// close button for gallery scroll
btnGallery.addEventListener('click', () => {
  gallery.style.display = 'none';
});

// button indicators
btnLeft.addEventListener('click', () => {
  const i = scrollControl(false);
  btnRight.style = activeButton(true);

  if (i === 0) {
    btnLeft.style = activeButton(false); // disable button ui
  };
});

btnRight.addEventListener('click', () => {
  const i = scrollControl(true);
  btnLeft.style = activeButton(true);

  if (i === collage.length - 1) {
    btnRight.style = activeButton(false); // disable button ui
  };
});

// controls next and previous button
const scrollControl = (isNext) => {
  const index = parseInt(image.alt.slice(-1));
  
  if (!(!isNext && index === 0) && !(isNext && index === collage.length - 1)) {
    const i = isNext ? index + 1 : index - 1;
    image.src = collage[i].children[0].src;
    image.alt = `teaching-${i}`;
    
    return i;
  };
};

// set ui for disable and active button
const activeButton = (status) => {
  const styles = status ? `
      color: var(--neutral);
      background-color: var(--secondary);
      border: 2px solid var(--secondary);
    ` : `
      color: #c6c6c6;
      background-color: var(--disable);
      border: 2px solid var(--disable);
    `;

  return styles;
};