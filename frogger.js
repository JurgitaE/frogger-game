class Frogger {
    constructor() {
        this.spritewidth = 250;
        this.spriteHeight = 250;
        this.width = this.spritewidth / 5;
        this.height = this.spriteHeight / 5;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    update() {
        // console.log('update');
        if (keys[38]) {
            if (this.moving === false) {
                this.y -= grid;
                this.moving = true;
            }
        }
    }
    draw() {
        ctx3.fillStyle = 'green';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }
    jump() {
        console.log('jump');
    }
}

const frogger = new Frogger();