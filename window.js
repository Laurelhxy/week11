"use strict";
onload=function getSize() {
    let w=this.document.documentElement.clientWidth;
let h=this.document.documentElement.clientHeight;
this.document.getElementById("w_h").innerHTML="<h1> width: "+w+"<br  />"+ "hegiht:"+ h +"</h1>";
window.addEventListener("resize",getSize)
this.document.body.style.background="black";
document.getElementById("w_h").style.color = "white"
}