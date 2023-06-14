class Obstacle {
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height - height;
        this.speed = speed;
        this.type = type;
    }
    draw() {
        ctx1.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.x += this.speed * gameSpeed;
    }
}

function initObstacles() {
    // lane 1
    for (let i = 0; i < 2; i++) {
        carsArray.push(new Obstacle());
    }
}
