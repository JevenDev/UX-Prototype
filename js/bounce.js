let bounceSetups = [
    { id: 'canvas-regular', gravity: 0.6, resistance: 0.75 },
    { id: 'canvas-high', gravity: 0.8, resistance: 0.9 },
    { id: 'canvas-soft', gravity: 0.4, resistance: 0.6 }
];
    // if i have time adde a fourth canvas with a ball that bounces off walls infinitely
    bounceSetups.forEach(({ id, gravity, resistance }) => {
        new p5((sketch) => {
        let y = 50;
        let velocity = 0;
        const radius = 40;
        let bounceCount = 0;
    
        sketch.setup = () => {
            const canvas = sketch.createCanvas(600, 150);
            canvas.parent(id);
        };

        // draw function
        sketch.draw = () => {
            sketch.background(240);
            sketch.fill(100, 100, 255);
            sketch.noStroke();
            sketch.ellipse(sketch.width / 2, y, radius, radius);

            velocity += gravity;
            y += velocity;

            if (y > sketch.height - radius / 2) {
            y = sketch.height - radius / 2;
            velocity *= -resistance;
            bounceCount++;
            }

            // resets after 10 bounces or if ball slows down
            if (bounceCount >= 10 || (Math.abs(velocity) < 0.1 && y >= sketch.height - radius / 2 - 1)) {
            y = 50;
            velocity = 0;
            bounceCount = 0;
            }
        };
    });
});