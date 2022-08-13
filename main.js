status1="";
objectinput="";
function preload(){

}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide()
}
function draw(){
image(video,0,0,600,500)
}
function start(){
objectDetector = ml5.objectDetector('cocossd',modelloaded);
document.getElementById("statusq").innerHTML="Status : Detecting Object";
objectinput = document.getElementById("Obj_input").value;
}
function modelloaded(){
    console.log("modelloaded");
    status1= true;
}