const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;

// global variables
const grid = 80;
let up = false
let left = false
let right = false
let down = false
let keys = [];
let score = 0;
let collisionCount = 0;
let frame = 0;
let gameSpeed = 0.4;
let egg_count = 0

const particlesArray = [];
const maxParticles = 300
const ripplesArray = []
const carsArray = []
const logsArray = []

// images
const background_lvl2 = new Image();
background_lvl2.src = 'background.png'

const penguinSprite = new Image();
penguinSprite.src = 'penguin.png';

const rectIceSprite = new Image();
rectIceSprite.src = 'ice.png';

const squareIceSprite = new Image();
squareIceSprite.src = 'squareice.png';

// Easter Egg Images

// Start Game
function off() {
    document.getElementById("overlay").style.display = "none";
    if (egg_count < 5) {
        var audio = document.getElementById("audio");
        audio.play();
    }
}
//   Easter Egg
$('#secret').click(function () {
    egg_count++;
    console.log(egg_count)
    if (egg_count >= 5) {
        alert("Unlocked extreme mode prepare to die")
        background_lvl2.src = 'lavabackground.png'

        penguinSprite.src = 'penguin.png';

        rectIceSprite.src = 'lava.png';

        squareIceSprite.src = 'lavasquare.png';
        document.body.style.backgroundImage = "url('doom.jpg')";
                gameSpeed = 4.5;
        var audio = document.getElementById("audio");
        audio.pause();
        audio.currentTime = 0
        var audio = document.getElementById("easter");
        audio.play();
    }
})