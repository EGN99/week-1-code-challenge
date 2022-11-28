// for speed below 70, print okay
//for each increase of 5km/s award 1 demerit point upto 12 points.


let speed=84;
let demeritPoints;
if (speed<70) {
    demeritPoints="OK"
} else if (speed>70 && speed<=75){
  demeritPoints="Points:1"
} else if (speed>75 && speed<=80){
    demeritPoints="Points:2"
} else if (speed>80 && speed<=85){
    demeritPoints="Points:3"
} else if (speed>85 && speed<=90){
    demeritPoints="Points:4"
} else if (speed>90 && speed<=95){
        demeritPoints="Points:5"
} else if (speed>95 && speed<=100){
        demeritPoints="Points:6"
} else if (speed>100 && speed<=105){
        demeritPoints="Points:7"
} else if (speed>105 && speed<=110){
        demeritPoints="Points:8"
} else if (speed>110 && speed<=115){
        demeritPoints="Points:9"
} else if (speed>115 && speed<=120){
        demeritPoints="Points:10"
} else if (speed>120 && speed<=125){
        demeritPoints="Points:11"
} else if (speed>125 && speed<=130){
        demeritPoints="Points:12"
}else if (speed>130){
//if the  driver is awarded more than 12 points, the program prints "License Suspended"
    demeritPoints= "License suspended"
}

console.log (speedDetector);
