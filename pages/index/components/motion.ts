import { Anchor, Box, TAU } from 'zdog';

export const setupAnimation = (canvas: HTMLCanvasElement, ring: any, plane: any) => {
  const root = new Anchor();

  const rootRing = new Anchor({
    addTo: root
  });

  const rootPlane = new Anchor({
    addTo: root
  });

  const offsetRing = new Anchor({
    addTo: rootRing,
    scale: 1.7
  });

  for (const { x, y } of ring.boxes) {
    new Box({
      addTo: offsetRing,
      color: ring.colors[0],
      rightFace: ring.colors[1],
      bottomFace: ring.colors[2],
      stroke: 0,
      width: 1,
      height: 1,
      depth: 1,
      translate: {
        x: x - 5,
        y: y - 5
      }
    });
  }

  const offsetPlane = new Anchor({
    addTo: rootPlane
  });

  const centerPlane = new Anchor({
    addTo: offsetPlane
  });

  for (const { color, boxes } of plane) {
    for (const { x, y } of boxes) {
      new Box({
        addTo: centerPlane,
        color,
        stroke: 0,
        width: 1,
        height: 1,
        depth: 1,
        translate: {
          x: x - 5,
          y: y - 4
        }
      });
    }
  }

  const context = canvas.getContext("2d");
  const { width, height } = canvas;
  const zoom = 7;

  context.lineJoin = "round";
  context.lineCap = "round";

  const render = () => {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.scale(zoom, zoom);
    root.renderGraphCanvas(context);
    context.restore();
  };

  root.updateGraph();
  render();

  let frame = null;
  let ticker = 5;
  const cycle = 500;

  const radius = 18;

  offsetRing.translate.x = radius * -1;
  offsetPlane.translate.x = radius;
  offsetPlane.rotate.y = TAU / 4;

  root.rotate.y = 0.5;
  root.translate.y = 4;

  const update = (t: number) => {
    const a = t * TAU;
    rootRing.rotate.y = a * -1;
    rootPlane.rotate.y = a * 2;
    centerPlane.rotate.x = a * 3 * -1;
    root.rotate.x = Math.sin(a);
  };

  update(ticker / cycle);

  root.updateGraph();
  render();

  const animate = () => {
    ticker = (ticker + 1) % cycle;

    update(ticker / cycle);
    root.updateGraph();
    render();

    frame = requestAnimationFrame(animate);
  };

  frame = requestAnimationFrame(animate);
};