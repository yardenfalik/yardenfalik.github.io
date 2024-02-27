const colors = ["#00b1b1e6", "#be0562e6", "#1e1157e6", "#00cfa2e6", "#6800b3e6", "#ff2b00e6", "#0300bde6"]
const children = document.getElementById('circles').children;
var intervalTime = 1000;

let screenWidth = screen.width;
let screenHeight = screen.height;

let HowManyCircle = (screenWidth / 320)*(screenHeight / 360);

for (let i = 0; i < HowManyCircle; i++) {
    let circle = document.createElement('div');
    circle.classList.add('circle');
    document.getElementById('circles').appendChild(circle);
}

setInterval(setColors, intervalTime);

console.log(screenHeight);

function setColors() 
{
    for (let i = 0; i < children.length; i++) {
        children.item(i).style.transition = 'background-color 2s ease-in-out';
        children.item(i).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));
