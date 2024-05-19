const colors = ["#00b1b1e6", "#be0562e6", "#1e1157e6", "#00cfa2e6", "#6800b3e6", "#ff2b00e6", "#0300bde6"]
const children = document.getElementById('circles').children;
var intervalTime = 1000;

let screenWidth = screen.width;
let screenHeight = screen.height;

let HowManyCircle = (screenWidth / 320)*(screenHeight / 360);

var yarden = `%c                              888                   
                              888                   
                              888                   
888  888  8888b.  888d888 .d88888  .d88b.  88888b.  
888  888     "88b 888P"  d88" 888 d8P  Y8b 888 "88b 
888  888 .d888888 888    888  888 88888888 888  888 
Y88b 888 888  888 888    Y88b 888 Y8b.     888  888 
 "Y88888 "Y888888 888     "Y88888  "Y8888  888  888 
     888                                            
Y8b d88P                                            
 "Y88P"`;
console.log(yarden, 'color: #1abc9c');

for (let i = 0; i < HowManyCircle; i++) {
    let circle = document.createElement('div');
    circle.classList.add('circle');
    document.getElementById('circles').appendChild(circle);
}

setInterval(setColors, intervalTime);

function setColors() 
{
    for (let i = 0; i < children.length; i++) {
        children.item(i).style.transition = 'background-color 2s ease-in-out';
        children.item(i).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
}

function lightMode() 
{
    themeButton = document.getElementById('themeButton');

    if (document.body.className === 'lightMode') 
    {
        themeButton.innerHTML = '☀️';
        document.body.className = 'darkMode';
        return;
    }

    themeButton.innerHTML = '🌙';
    document.body.className = 'lightMode';
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
