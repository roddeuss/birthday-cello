// Function to release balloons
function releaseBalloons() {
    const balloonContainer = document.getElementById('balloon-container');
    
    // Add 10 balloons
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`; // Random horizontal position
        balloon.style.animationDelay = `${Math.random() * 2}s`; // Random delay to make the animation more dynamic
        balloon.style.backgroundImage = 'url("balloon.png")'; // Your balloon image
        balloonContainer.appendChild(balloon);
    }
}
