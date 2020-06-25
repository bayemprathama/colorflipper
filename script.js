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
let colorClicked = [...colors];

body.style.backgroundColor = 'Salmon';
button.addEventListener('click', changeBackground);

function changeBackground() {
  const colorIndex =
    colorClicked[Math.floor(Math.random() * colorClicked.length)];
  for (let i of colorClicked) {
    const index = colorClicked.indexOf(i);
    if (colorClicked.length === 1) {
      colorClicked = [...colors];
    } else if (colorIndex === i) {
      colorClicked.splice(index, 1);
      break;
    }
  }
  body.style.background = colorIndex;
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundPosition = 'center';
  body.style.backgroundSize = 'auto 100%';
  if (colorIndex === pocong) {
    anchor.innerHTML = 'Mweheheh :)';
  }
  if (colorIndex !== pocong) {
    anchor.innerHTML = 'Click me & Find Black!';
  }
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
