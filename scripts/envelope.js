// Fungsi untuk membuka amplop
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const message = document.getElementById('message');
    const birthdaySong = document.getElementById('birthdaySong');

    // Play the birthday song
    birthdaySong.play();

    // Animate the envelope flap to open
    envelope.querySelector('.flap').style.transform = 'rotateX(180deg)';

    // After the animation, hide the envelope and show the message
    setTimeout(() => {
        // Hide the envelope
        envelope.style.display = 'none';
        
        // Show the birthday message
        message.classList.remove('hidden');
        const note = document.querySelector('.note');
        note.classList.add('animate__slideInUp');
        
        // Generate balloons
        releaseBalloons();
    }, 600); // Adjust this timeout if needed based on the duration of the envelope animation
}
