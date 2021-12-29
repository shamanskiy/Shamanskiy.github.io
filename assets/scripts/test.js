function runAnimation() {
    const movingBox = document.getElementById("moving-box");
    const background = document.getElementById("backdrop");
    const debug = document.getElementById("debug");
    let position = 0;

    //debug.innerHTML = parseInt(movingBox.style.width,10);
    let timer = setInterval(animate,5)
    function animate() {
        position++;
        movingBox.style.top = position + "px";
        movingBox.style.left = position + "px";
        //debug.innerHTML = position;
        
        if (position >= 350) {
            clearInterval(timer);
            movingBox.style.top = "0px";
            movingBox.style.left = "0px";
        } 
    }
}