const body = document.querySelector('body');
const button = document.querySelector('.button');
const anchor = document.querySelector('a');
const pocong = 'url(pocong.jpg)';
const audio = document.querySelector('.scream');
const colors = [
  'Salmon',
  'Teal',
  'Violet',
  'Maroon',
  'Gold',
  'Dodgerblue',
  'Chartreuse',
  pocong,
];
const darkColor = ['Dodgerblue', 'Teal', 'Maroon', pocong];
let colorClicked = [...colors];

body.style.backgroundColor = 'Royalblue';
button.addEventListener('click', changeBackground);
button.addEventListener('click', borderColor);
button.addEventListener('click', currentColor);

//set current to the first index of colors
function currentColor() {
  const current = colorClicked[0];
  return current;
}

//prevent same color
function preventDouble() {
  const index = colorClicked.indexOf(currentColor());
  const deletedColor = colorClicked.splice(index, 1);
  console.log(
    currentColor(),
    index,
    colorClicked[index],
    colorClicked,
    deletedColor
  );
  //reset color to default if length === 0
  if (colorClicked.length === 0) {
    colorClicked = [...colors];
  }
}

//change background to current color
function changeBackground() {
  preventDouble();
  //set background color
  body.style.background = currentColor();
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundPosition = 'center';
  body.style.backgroundSize = 'auto 100%';

  //set text inside the a tag
  changeButtonText(currentColor(), pocong, 'Mwehehe :p');

  //changing border color to contrast with background color
  borderColor();
}

function borderColor() {
  for (let i of darkColor) {
    if (currentColor() === i) {
      anchor.style.borderColor = 'White';
      anchor.style.color = 'White';
      break;
    } else {
      anchor.style.borderColor = 'Black';
      anchor.style.color = 'Black';
    }
  }
}

function changeButtonText(
  currentColor,
  wantedColor,
  txtIfTrue,
  defaultTxt = 'Click me & Find Black!'
) {
  if (currentColor === wantedColor) {
    anchor.innerHTML = txtIfTrue;
    anchor.style.backgroundColor = 'Black';
    audio.play();
  }
  if (currentColor !== wantedColor) {
    anchor.innerHTML = defaultTxt;
    anchor.style.backgroundColor = '';
  }
}
