const body = document.querySelector('body');
const button = document.querySelector('.button');
const anchor = document.querySelector('a');
const pocong =
  'url(https://4.bp.blogspot.com/-aO3xYZpTOpw/WC8ah0S_f4I/AAAAAAAAAHE/2hBS2i8BAfQdsy5QwNMbGc_4eAJJMzScwCLcB/s1600/hantu%2Bpocong%2Bmenyeramkan.jpg)';
const colors = [
  'Salmon',
  'Coral',
  'Teal',
  'Maroon',
  'Hotpink',
  'Orange',
  'Chartreuse',
  pocong,
];
const darkColor = ['Salmon', 'Coral', 'Teal', 'Maroon', pocong];
const lightColor = ['Hotpink', 'Orange', 'Chartreuse'];
body.style.backgroundColor = 'Salmon';
button.addEventListener('click', changeBackground);
// button.addEventListener('click', changeBorderColor);

function changeBackground() {
  const colorIndex = colors[Math.floor(Math.random() * colors.length)];
  body.style.background = colorIndex;
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundPosition = 'center';
  body.style.backgroundSize = 'auto 100%';

  for (let i of darkColor) {
    if (colorIndex == i) {
      anchor.style.borderColor = 'White';
      anchor.style.color = 'White';
      break;
    } else {
      anchor.style.borderColor = 'Black';
      anchor.style.color = 'Black';
    }
  }
}
