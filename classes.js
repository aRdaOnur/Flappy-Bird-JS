class Bird {
    constructor() {
        this.x = 400;
        this.y = 20;
        this.gravity = 0.3;
        this.speedY = 0
    }
    draw() {
        // c.fillStyle = 'white';
        // c.fillRect(this.x,this.y,50,50);
        c.drawImage(yusufkoc, this.x,this.y, 70, 70);
    }
    update() {
        
        // c.fillStyle = 'white';
        c.drawImage(yusufkoc, this.x,this.y, 70, 70);
        // c.fillRect(this.x,this.y,50,50);
        this.y -= this.speedY;
        this.speedY -= this.gravity;
    }
    didBirdHitTheWall() {
        if (this.y < 0 || this.y > canvas.height - 50) {
            console.log('kus meftaa');
            isGameFinish = true;
        }
    }
}

class Wall {
    constructor() {
        this.ratio = Math.random() * 6 + 1;
        this.topWall = {
            x: window.innerWidth-100,
            y: 0,
            height: window.innerHeight/this.ratio,
        }
        this.downWall = {
            x: window.innerWidth-100,
            y: window.innerHeight/this.ratio+220,
            height: window.innerHeight,
        }
        this.width = 100
        this.speedX = 3;
        this.passed = true;

    }
    draw() {
        c.fillStyle = 'black';
        c.fillRect(this.topWall.x, this.topWall.y, this.width, this.topWall.height);
        c.fillRect(this.downWall.x, this.downWall.y, this.width, this.downWall.height);
        
    }
    update() {
        c.fillStyle = 'black';
        c.fillRect(this.topWall.x, this.topWall.y, this.width, this.topWall.height);
        c.fillRect(this.downWall.x, this.downWall.y, this.width, this.downWall.height);
        this.topWall.x -= this.speedX;
        this.downWall.x -= this.speedX;
    }
    isWallPassTheBird() {
        if (this.passed){
            if (this.topWall.x  < 390) {
                console.log('gecti');
                score+=1
                this.passed = false;    

            }
        }
    }
    birdCrashTheWall() {
        if (this.topWall.x <= bird.x + 50 && bird.x + 50 <= this.width + this.topWall.x && 
            this.topWall.height >= bird.y)  {
                isGameFinish = true;
        }
        
        else if (this.downWall.x <= bird.x + 50 && bird.x + 50 <= this.width + this.downWall.x &&
            this.downWall.y <= bird.y+50) {
                isGameFinish = true;
            }
            
        
    }
}

class ScoreBoard {
    constructor() {
        
    }
    draw() {
        c.font = 'bold 60px Arial';

        c.fillStyle = 'black';
        
        c.fillText(`score  ${score}`, 50, 100);
        
    }
}