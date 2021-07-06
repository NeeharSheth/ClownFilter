nose_x= 0;
nose_y=0;

function preload(){
clown_image= loadImage("https://i.postimg.cc/hvT7PvS9/clown.png");
}

function setup(){
    canvas= createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300)
video.hide();

posenet= ml5.poseNet(video, modelLoaded);
posenet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("posenet is loaded :D");
}

function draw(){
image(video,0,0,300,300);
/*fill(255,20,30);
stroke(255,20,30);
circle(nose_x,nose_y,22);*/
image(clown_image,nose_x,nose_y,30,30);
}

function take_snapshot(){
    save("filtered_clown.png");
}

function gotPoses(result){
if(result.length>0){
    console.log(result);
    nose_x= result[0].pose.nose.x.toFixed(2)-12;
    nose_y= result[0].pose.nose.y.toFixed(2)-10;
    console.log("nose x is"+nose_x, "nose y is"+nose_y);
}
}