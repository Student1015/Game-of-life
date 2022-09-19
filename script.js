var clickCount = 0;
function clickHandler(evt){
   clickCount++;
   console.log(evt);
   var str = "Thanks for clicking " + clickCount;
   this.innerText = str;
}

var p = document.getElementById("pElement");
p.addEventListener("click", clickHandler);

function bodyClick(evt){
    console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
 }
 window.onclick = bodyClick;
 //This is the same as window.addEventListener("click", bodyClick);
