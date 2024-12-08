function setGradientBackground(color1, color2) 
{
    var bg = document.getElementsByClassName("customBackground")[0];

    bg.style.transition = 'background 2s ease-in-out';

    bg.animate([
        // key frames
        { opacity: bg.style.opacity },
        { opacity: 0.5 }
      ], {
        // sync options
        duration: 1000,
        iterations: 1
    }); 

    bg.style.background = `
    radial-gradient(circle at 30% 40%, ${color1}, transparent 80%), 
    radial-gradient(circle at 70% 60%, ${color2}, transparent 80%)`;
    
    bg.style.opacity = 0.5;
}

function resetBackground() 
{
    var bg = document.getElementsByClassName("customBackground")[0];

    bg.animate([
        // key frames
        { opacity: 0.5 },
        { opacity: 0 }
      ], {
        // sync options
        duration: 1000,
        iterations: 1
    });

    bg.style.opacity = 0;
}