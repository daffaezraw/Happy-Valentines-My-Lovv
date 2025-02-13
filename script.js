document.getElementById('heartButton').addEventListener('click', function() {
    const heartContainer = document.getElementById('heartContainer');
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.fontSize = '2rem';
    heart.style.animation = 'float 3s ease-in-out infinite';
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
});
