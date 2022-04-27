function setup() {
  createCanvas(460, 460);
  frameRate(1);
}

function draw() {
  background('#2e3532');
  var step = 20;
  
  // rectMode(CENTER);
  // noStroke();
  // fill('#29262E')
  // rect(300,300,400,400,10)
  
  for(var x=20;x<=420;x=x+step){
    for(var y=20;y<=420;y=y+step) {
      noStroke();
      fill('#ddd92a')
      var ran = random();
      if(ran<0.25) {
        fill('#b8b08d')
        triangle(x+step,y+step,x,y+step,x+step,y)
      } else if(ran<0.5) {
        fill('#f29559')
        triangle(x,y,x,y+step,x+step,y)
      } else if(ran<0.75) {
        triangle(x,y,x+step,y,x+step,y+step)
      } else {
        triangle(x,y,x,y+step,x+step,y+step)
      }
    }
  }
}
