video = "";
status= "";

function preload(){
    console.log("loadVideo");
    video=createVideo('video.mp4');
   
    console.log("video is loaded");
}

function setup(){
    canvas=createCanvas(580,450);
    canvas.center();
    video.hide();
}

function draw(){
    image(video,0,0,580,450);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="status: detecting the objects";
}

function modelloaded(){
console.log("model is loaded");
status=true;
video.loop();
video.speed(1);
video.volume(1);
}