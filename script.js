const heart = document.querySelector('.heart');

function pulse(){
    heart.classList.toggle('pulse');
}


setInterval(pulse, 1000);