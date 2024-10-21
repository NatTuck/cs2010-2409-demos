

function ramX(tick) {
  return 800 - (tick * 4 % 800);
}

function ramFrame(tick) {
  let fno = Math.floor(tick / 3) % 4 + 1;
  return "ram-" + fno + ".png";
}

function onDraw(state, {drawImage}) {
  drawImage(ramFrame(state.tick), ramX(state.tick), 150 + state.py, 100, 100);
}

function onTick(state) {
  let tick = state.tick;
  let py = state.py + state.vy;
  let vy = state.vy - 1;
  if (py < 0) {
    py = 0;
    vy = 0;
  }
  return {tick: tick + 1, py: py, vy: vy};
}

function onClick(state, _xx, _yy) {
  let tick = state.tick;
  let py = state.py;
  let vy = state.vy;
  return {tick: tick + 1, py: py, vy: vy + 10};
}
