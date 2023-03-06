// Fullscreen API Attack
var getFullscreenAPIAttack = document.querySelector('.fullscreenAPIAttack')
var getToast = document.querySelector('.toast')
var getToastIcon = document.querySelector('.toast__icon')
var getToastContent = document.querySelector('.toast__content')
const box = document.querySelector('.headerAPIAttack');
// var getAudioHacked = document.querySelector('.audio_hacked')
var requestId;
var direction = 1;
var position = 0;
var checkFullScreen = false


function move() {
    position += direction * 10;
    box.style.transform = "translateX(" + position + "px)";
    if (position >= window.innerWidth - box.offsetWidth || position <= 0) {
        direction = -direction;
    }
    requestId = requestAnimationFrame(move);
}

// requestId = requestAnimationFrame(move);


const audio = new Audio('./assets/audio/gameOver.mp3')


getFullscreenAPIAttack.addEventListener('click', function () {
    document.documentElement.requestFullscreen();
    // checkFullScreen = true
    document.onclick = () => {
        getToast.style.display = "flex";
        getToast.onclick = () => {
            var x = document.getElementById("myModal");
            x.style.display = "none";
            setTimeout(() => {
                getToastContent.style.display = "block"
            }, 1000);
            requestId = requestAnimationFrame(move);
            setTimeout(()=>{
                if (requestId) {
                    cancelAnimationFrame(requestId);
                    requestId = null;
                }
            }, 500);
            audio.play()
            // getAudioHacked.classList.add()
        }
    }
})
function openModalLogin() {
    var x = document.getElementById("myModal");
    if (x.style.display === "none") {
        x.style.display = "flex";
    }
    else{
        x.style.display = "none";
    }
}

getToastIcon.addEventListener('click', function (event) {
    event.stopPropagation()
    cancelAnimationFrame(requestId)
    requestId = null
    if (document.fullscreenElement !== null) {
        getToastContent.style.display = "none"
    } else {
        getToastContent.style.display = "none"
        getToast.style.display = "none"
    }
    audio.pause();
})
