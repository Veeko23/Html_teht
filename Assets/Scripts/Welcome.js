var loadingScreenShown = localStorage.getItem('loadingScreenShown');
    
if (!loadingScreenShown) {
    var loadingScreen = document.getElementById('loading-screen');
    var welcomeMessage = document.createElement('p');
    welcomeMessage.id = 'welcome-message';
    welcomeMessage.textContent = 'Welcome';
    document.body.appendChild(welcomeMessage);

    window.addEventListener('load', function () {
        setTimeout(function () {
            loadingScreen.style.opacity = '0';
            welcomeMessage.style.opacity = '0';
            setTimeout(function () {
                loadingScreen.style.display = 'none';
                welcomeMessage.style.display = 'none';

                localStorage.setItem('loadingScreenShown', 'true');
            }, 1000);
        }, 1000);
    });
} else {
    var loadingScreen = document.getElementById('loading-screen');
    var welcomeMessage = document.getElementById('welcome-message');
    loadingScreen.style.display = 'none';
    
}