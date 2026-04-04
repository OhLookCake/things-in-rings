(function () {
    var toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    function update() {
        var isDark = document.documentElement.dataset.theme === 'dark';
        toggle.textContent = isDark ? 'Light' : 'Dark';
    }

    toggle.addEventListener('click', function () {
        var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        localStorage.setItem('theme', next);
        update();
    });

    update();
})();
