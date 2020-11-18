var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var div = document.getElementById('color');

var scrWidth = Number(screen.width)-70;

if (scrWidth <992) {
    document.getElementById('canvas').width = scrWidth;
    document.body.style.overflow = 'hidden';
}

red.addEventListener("mousemove", () => {
    div.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    hex.value = "";
    color = div.style.backgroundColor;
});

blue.addEventListener("mousemove", () => {
    hex.value = "";
    div.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    color = div.style.backgroundColor;
});

green.addEventListener("mousemove", () => {
    hex.value = "";
    div.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    color = div.style.backgroundColor;
});

var hex = document.getElementById('hex');

hex.addEventListener('input', () => {
    div.style.backgroundColor = hex.value;
});

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var color = div.style.backgroundColor;
console.log(color);
var width_elm = document.getElementById('width');
var radius_elm = document.getElementById('radius');
var width = 2, radius = 40;
console.log(width);
width_elm.oninput = () => {
    width = width_elm.value;
}
radius_elm.oninput = () => {
    radius = radius_elm.value;
};



var mouseEvent;

canvas.addEventListener('touchstart', touchstart);
function touchstart(e) {
    mouseEvent = 'touchstart'
}
canvas.addEventListener('touchleave', touchleave);

function touchleave(e) {
    mouseEvent = 'touchleave';
}

canvas.addEventListener('touchmove', my_touchmove);

function my_touchmove(e) {
    console.log(mouseEvent)
    var lpx = e.touches[0].clientX - canvas.offsetLeft;
    var lpy = e.touches[0].clientY - canvas.offsetTop;
    if (mouseEvent == "touchstart") {
        console.log('passed in the mousemove condition');
        console.log(`X=${lpx} || Y=${lpy}`);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.width = width;
        ctx.arc(lpx, lpy, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}