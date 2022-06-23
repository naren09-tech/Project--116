noseX=0;
noseY=0;

function preload(){
    nosemus=loadImage("https://i.postimg.cc/Jz131hqg/OIP.jpg");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet is initilazied");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX);
        console.log("noseY="+noseY);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(nosemus,noseX-25,noseY+10,50,30);
}
function takeSanpshot(){
    save("myfilterImage.png");
}