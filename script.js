const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

const yusufkoc = new Image();
yusufkoc.src = './adamlar/yusufkoc.png';

const audio = document.getElementById('apokilli');
let score = 0
const mouse = {
    x: undefined,
    y: undefined
}
const bird = new Bird();
// const wall = new Wall();

let wallArray = [];
for (let i = 0; i < 20; i++) {
    wallArray.push(new Wall())
}
let x = 1;
let distanceBetweenWall = 0;
let randomDistance = Math.random() * 100 + 100;

let isGameFinish = false;

const scoreB = new ScoreBoard();

function update() {
    audio.play();
    if (isGameFinish) return ;
    
    requestAnimationFrame(update);
    c.clearRect(0, 0, canvas.width, canvas.height);
    bird.draw();
    bird.update();
    bird.didBirdHitTheWall();

    scoreB.draw();
    // generating wall
    for (let i = 0; i < x; i++) {
        wallArray[i].draw();
        wallArray[i].update();
        wallArray[i].isWallPassTheBird()
        wallArray[i].birdCrashTheWall()
    
    }
    if (distanceBetweenWall > randomDistance) {
        x += 1
        distanceBetweenWall = 0;
        if (x > 10) {
            wallArray.splice(0,1);
            x-=1
            wallArray.push(new Wall())
        }
    }else
        distanceBetweenWall += 1;
    
    
    // wall.draw();
    // wall.update();
    
}update();