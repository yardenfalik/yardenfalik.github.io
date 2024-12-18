function lightMode()
{  
    document.getElementById('themeButton').innerHTML = '<img src="img/sunIcon.png" class="sunIcon">';
    document.body.className = 'lightMode';
    
    saveTheme("light");
}

function darkMode()
{
    document.getElementById('themeButton').innerHTML = '<img src="img/moonIcon.png" class="moonIcon">';
    document.body.className = 'darkMode';

    saveTheme("dark");
}

function system()
{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
    {
        document.getElementById('themeButton').innerHTML = '<img src="img/moonIcon.png" class="moonIcon">';
        document.body.className = 'darkMode';
    }
    else
    {
        document.getElementById('themeButton').innerHTML = '<img src="img/sunIcon.png" class="sunIcon">';
        document.body.className = 'lightMode';
    }
    saveTheme("system");
}

function saveTheme(theme)
{
    localStorage.setItem("theme", theme);
    ["dark", "light", "system"].forEach(id => 
        document.getElementById(id).textContent = "‎ ‎ " + id.charAt(0).toUpperCase() + id.slice(1)
    );
    document.getElementById(theme).textContent += " •";
}

function themeMenu()
{
    var menu = document.getElementById("themeMenu");
    menu.style.display = (menu.style.display == "none") ? "grid" : "none";
}

function getTheme()
{
    var theme = localStorage.getItem("theme");

    if (theme === "dark")
    {
        darkMode();
    }
    else if (theme === "light")
    {
        lightMode();
    }
    else
    {
        system();
    }
}

getTheme();