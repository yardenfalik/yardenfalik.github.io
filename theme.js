function lightMode() 
{
    themeButton = document.getElementById('themeButton');

    if (document.body.className === 'lightMode') 
    {
        themeButton.innerHTML = '<img src="img/moonIcon.png" class="moonIcon">';
        document.body.className = 'darkMode';
        return;
    }

    themeButton.innerHTML = '<img src="img/sunIcon.png" class="sunIcon">';
    document.body.className = 'lightMode';
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
{
    themeButton.innerHTML = '<img src="img/moonIcon.png" class="moonIcon">';
    document.body.className = 'darkMode';
}
else {
    themeButton.innerHTML = '<img src="img/sunIcon.png" class="sunIcon">';
    document.body.className = 'lightMode';
}