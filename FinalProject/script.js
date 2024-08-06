let getStartedButton = document.querySelector('.get-started');

function handleClick(){ 
    alert("No results were found!")
}
    getStartedButton.addEventListener('click', handleClick);

    let welcomeMessage = document.getElementById('welcomeMessage');
    let hours = new Date().getHours();
    function checkTime(){ 
        if (hours < 12) {
            welcomeMessage.textContent = 'Good Morning! Find Your Next Game, Anytime, Anywhere';
        } else if (hours < 17) {
            welcomeMessage.textContent = 'Good Afternoon! Find Your Next Game, Anytime, Anywhere';
        } else {
            welcomeMessage.textContent = 'Good Evening! Find Your Next Game, Anytime, Anywhere';
        }
    };

    window.addEventListener('DOMContentLoaded', checkTime);
    