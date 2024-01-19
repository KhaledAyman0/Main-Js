var cir =document.getElementById("cir");
var upbtn =document.getElementById("upbtn");
var downbtn =document.getElementById("downbtn");

var rotatevalue = cir.style.transform;
var rotatesum;
upbtn.onclick = function() {
    rotatesum = rotatevalue + " rotate(-90deg)";
    cir.style.transform =  rotatesum;
    rotatevalue = rotatesum;
}
downbtn.onclick = function() {
    rotatesum = rotatevalue + " rotate(90deg)";
    cir.style.transform =  rotatesum;
    rotatevalue = rotatesum;
}