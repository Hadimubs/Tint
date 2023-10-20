function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
v=createCapture(VIDEO);
v.hide();
x="";
}
function draw(){
image(v,0,0,640,480);
tint(x);
}
function take_snapshot(){
save("r.png");
}
function f(){
x=document.getElementById("p").value;
}