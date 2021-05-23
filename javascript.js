/* KMRE JS Code*/

/* Original Values */
var original_size = "150px";
var original_opacity = "1";
var original_color = "orange";

/* button1 = Grow*/
document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";
});

/* button2 = Color*/
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.background = "blue";
});

/* button3 = Fade*/
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = ".5";
});

/* button4 = Reset*/
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.height = original_size;
    document.getElementById("box").style.width = original_size;
    document.getElementById("box").style.opacity = original_opacity;
    document.getElementById("box").style.background = original_color;
});