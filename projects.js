function setGradientBackground(color1, color2) 
{
    var bg = document.getElementsByClassName("customBackground")[0];

    bg.style.opacity = '1';
    //document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    bg.style.background = `
    radial-gradient(circle at 30% 40%, ${color1}, transparent 80%), 
    radial-gradient(circle at 70% 60%, ${color2}, transparent 80%)`;

    bg.style.transition = 'background 0.5s ease';
    document.body.style.color = '#1D1D1F';
}

function resetBackground() 
{
    var bg = document.getElementsByClassName("customBackground")[0];
    bg.style.opacity = '0';

    bg.style.background = '';

    document.body.style.transition = 'background 0.5s ease, color 0.5s ease'; 
    document.body.style.transition = 'all 0.5s ease'; 

    document.body.style.color = '';
}