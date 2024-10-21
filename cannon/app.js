

function ramX(tick) {
  return 800 - (tick * 4 % 800);
}

function ramFrame(tick) {
  let fno = Math.floor(tick / 3) % 4 + 1;
  return "ram-" + fno + ".png";
}

function onInit() {
  return { tick: 0, ang: 0 };
}

function onDraw(state, {drawImage, drawCircle}) {
  drawImage("cannon.png", 0, 75, 150, 200, 100);
  drawImage(ramFrame(state.tick), 0, ramX(state.tick), 150, 100, 100);
  drawCircle(200, 200, 20, "blue");
}

function onTick(state) {
  let tick = state.tick;
  return { tick: tick + 1, ang: state.ang };
}

function onMove(state, xx, yy) {
  console.log(state, xx, yy);
  return state;
}

function onClick(state, _xx, _yy) {
  let tick = state.tick;
  let py = state.py;
  let vy = state.vy;
  return {tick: tick + 1, ang: state.ang };
}
