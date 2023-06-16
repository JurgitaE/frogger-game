class Obstacle {
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        this.randomise = Math.floor(Math.random() * 30 + 30);
        this.carType = Math.floor(Math.random() * numberCars);
    }
    draw() {
        if (this.type === 'turtle') {
            if (frame % this.randomise === 0) {
                if (this.frameX >= 1) {
                    this.frameX = 0;
                } else {
                    this.frameX++;
                }
            }
            ctx1.drawImage(turtle, this.frameX * 70, this.frameY * 70, 70, 70, this.x, this.y, this.width, this.height);
        } else if (this.type === 'log') {
            ctx1.drawImage(log, this.x, this.y, this.width, this.height);
        } else {
            ctx2.drawImage(
                car,
                this.frameX * this.width,
                this.carType * this.height,
                grid * 2,
                grid,
                this.x,
                this.y,
                this.width,
                this.height
            );
        }
    }
    update() {
        this.x += this.speed * gameSpeed;
        if (this.speed > 0) {
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
                this.carType = Math.floor(Math.random() * numberCars);
            }
        } else {
            this.frameX = 1;
            if (this.x < 0 - this.width) {
                this.x = canvas.width + this.width;
                this.carType = Math.floor(Math.random() * numberCars);
            }
        }
    }
}

function initObstacles() {
    // lane 1
    for (let i = 0; i < 2; i++) {
        let x = i * 350;
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, 'car'));
    }
    // lane 2
    for (let i = 0; i < 2; i++) {
        let x = i * 300;
        carsArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, 'car'));
    }
    // lane 3
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        carsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2, grid, 2, 'car'));
    }

    // lane 4
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2, 'log'));
    }
    // lane 5
    for (let i = 0; i < 3; i++) {
        let x = i * 200;
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'turtle'));
    }
}
initObstacles();

function handleObstacles() {
    for (let i = 0; i < carsArray.length; i++) {
        carsArray[i].draw();
        carsArray[i].update();
    }
    for (let i = 0; i < logsArray.length; i++) {
        logsArray[i].draw();
        logsArray[i].update();
    }

    // Collision with cars
    for (let i = 0; i < carsArray.length; i++) {
        if (collision(frogger, carsArray[i])) {
            ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 150, 150);
            resetGame();
        }
    }
    // collision with logs/turtles
    if (frogger.y < 250 && frogger.y > 100) {
        safe = false;

        for (let i = 0; i < logsArray.length; i++) {
            if (collision(frogger, logsArray[i])) {
                frogger.x += logsArray[i].speed * gameSpeed;
                safe = true;
            }
        }
        if (!safe) {
            for (let i = 0; i < 30; i++) {
                ripplesArray.unshift(new Particle(frogger.x, frogger.y));
            }
            resetGame();
        }
    }
}
