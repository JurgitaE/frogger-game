class Obstacle {
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
        let x = i * 350;
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid, grid, 1, 'car'));
    }
}
initObstacles();

function handleObstacles() {
    for (let i = 0; i < carsArray.length; i++) {
        carsArray[i].draw();
        carsArray[i].update();
    }
}
