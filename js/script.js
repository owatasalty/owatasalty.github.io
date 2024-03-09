var gif = document.getElementById("gif")

gif.addEventListener('click', jump);
var pos = 0;
var id = setInterval(frame, 10);

function jump() {
    if (gif.src.match("maidon.gif")) {
        gif.src = "images/jump.png";
        setTimeout(()=>{ gif.src = "images/maidon.gif"},350);
    }
    else {
        gif.src = "images/maidon.gif";
    }
}