const ToggleButton = document.querySelectorAll(".slider")[0]
const HTMLTheme = document.getElementsByClassName("theme-dark").className

ToggleButton.addEventListener("click", () => {
    toggleTheme()
})

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('checkbox').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('checkbox').checked = true;
    }
})();