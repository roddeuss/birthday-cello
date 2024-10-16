document.addEventListener("DOMContentLoaded", function() {
    const birthdayCake = document.getElementById('birthdayCake');
    const blowMessage = document.getElementById('blowMessage');
    const wishMessage = document.getElementById('wishMessage');

    let lilinMati = false; // Flag to track if the candle has been blown out

    // Function to blow out the candle
    function blowOutCandle() {
        if (!lilinMati) {
            // Change the cake image to the blown-out candle image
            birthdayCake.src = 'kue-dengan-lilin-padam.png';
            // Show the wish message
            wishMessage.classList.remove('hidden');
            blowMessage.style.display = 'none'; // Hide the blow candle message
            lilinMati = true; // Set the flag to true
        }
    }

    // Event listener for blowing out the candle when the cake is clicked
    birthdayCake.addEventListener('click', blowOutCandle);
});
