var button = document.querySelector('.button');
button.addEventListener('click', function() {
    changeImage();
});

document.addEventListener("DOMContentLoaded", function() {
    var listElement = document.querySelector('.list');
    var miniWindow = document.querySelector('.mini-window');
    
    listElement.addEventListener('click', function() {
        miniWindow.classList.toggle('show');
    });
});