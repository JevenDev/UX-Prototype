let easings = [
  { id: 'canvas-linear', type: 'linear' },
  { id: 'canvas-easeIn', type: 'easeIn' },
  { id: 'canvas-easeOut', type: 'easeOut' },
  { id: 'canvas-easeInOut', type: 'easeInOut' }
];

easings.forEach(({ id, type }) => {
  new p5((sketch) => {
    let t = 0;
    let start = 50;
    let end = 550;

    sketch.setup = () => {
      const canvas = sketch.createCanvas(600, 120);
      canvas.parent(id);
    };

    sketch.draw = () => {
      sketch.background(240);
      sketch.fill(100, 100, 255);
      sketch.noStroke();

      let easedT = applyEasing(t, type);
      let x = sketch.lerp(start, end, easedT);
      sketch.ellipse(x, sketch.height / 2, 40, 40);

      t += 0.01;
      if (t > 1) {
        [start, end] = [end, start];
        t = 0;
      }
    };
  });
});

function applyEasing(t, type) {
  switch (type) {
    case 'easeIn':
      return t * t;
    case 'easeOut':
      return t * (2 - t);
    case 'easeInOut':
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    default:
      return t; // linear
  }
}