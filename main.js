  img = "";
  Status ="";
  Objects =[];
  function preload() {
    img = loadImage ('bedroom.jpeg');

}


  function setup () {
 
     canvas =createCanvas ( 640 , 420);
     canvas.center();
     objectDetector =ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "status : Detecting Objects";
 }
 function draw () {
     image( img, 0,0,640,420);

     if (status   !="")
     {
       for(i=0; i<objects.length; i++)
       {
         document.getElementById("status").innerHTML =  "Status : Object Detected";

         fill("#FF0000");
         persent = floor(objects[i].confidence * 100);
         text (objects[i].label + "" +persent +"%", objects[i].x +15, objects[i].y + 15);
         noFill();
         stroke("#FF0000");
         rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height);
       }

     }
     fill("#000000");
     text("bed" , 45, 75);
     noFill();
     stroke("#000000");
     rect(30, 60,450,350);

     fill("#000000");
     text("Train" , 430 ,270);
     noFill();
     stroke("#000000");
     rect(430, 250,200,100);
 }
 
 function modelLoaded(){
   console.log("Model Loaded!")
   status=true;
   ojectDetector.detect(img,gotResult);
 }

 function gotresult(error,results) {
   if (error) {
     console.log(error);
   }
   console.log(results);
   objects = results;
 }