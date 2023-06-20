const image = document.getElementById('hidden');
const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

const size = 50;
let x = 0;
let y = 0;

c.drawImage(image, x, y, size, size); // A kép bal felső sarka (0,0) koordinátára kerül
c.drawImage(image, x + size, y + size, size, size);