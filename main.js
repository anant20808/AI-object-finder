function preload(){

}
function setup(){
canvas=createCanvas(300,400);
canvas.center();
video = createCapture(VIDEO);
}
function draw(){
image(video,0,0,300,400)
}
