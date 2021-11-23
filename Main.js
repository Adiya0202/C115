function preload(){
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
if (results.length > 0){
    console.log(results);
    console.log("the x value of nose is "+results[0].pose.nose.x);
    console.log("the y value of nose is "+results[0].pose.nose.y);
}
}
function modelLoaded(){
    console.log("poseNet model is initialized");
}
function draw(){
image(video,0,0,300,300);
}
function pic_take(){
save("filter_library_pic.png");
}