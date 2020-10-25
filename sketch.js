function setup() {
  createCanvas(900,500);
  createSprite(400, 200, 50, 50);

}

function draw() {
  background(0);  
  ellipse(0, 50, 33, 33); 

push(); // Start a new drawing state
translate(50, 0);
strokeWeight(10);
fill(204, 153, 0);
ellipse(0, 50, 33, 33);
pop();

ellipse(100, 50, 33, 33);


ellipse(0, 50, 33, 33);

push();
strokeWeight(10);
fill(204, 153, 0);
ellipse(33, 50, 33, 33);
push();
stroke(0, 102, 153);
ellipse(66, 50, 33, 33);
pop();

pop();

ellipse(100, 50, 33, 33);

for (var j =40; j <=width-10;j=j+50){
 // plinkos.push(new plinko(j,75));
  }
  for (var j =15; j <=width-10;j=j+50){
//plinkos.push(new plinko(j,175));
}

 drawSprites();
}                                                        