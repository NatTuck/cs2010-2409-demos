
function rocketHeight(tick) {
  return tick * 5;
}

function onDraw(tick, {drawImage}) {
  drawImage('rocket.png', 400, rocketHeight(tick), 100, 100);
}
