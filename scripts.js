const charlie = document.getElementById("charlie");
const cactus = document.getElementById("cactus");
function jump() {
        if (charlie.classList != "jump"){
    charlie.classList.add("jump");

    setTimeout(function () { 
        charlie.classList.remove("jump");
    }, 300);
  }
}
let score = 0
let isAlive = setInterval(function () {
        //get current charlie y position
    let charlieTop = parseInt(window.getComputedStyle(charlie).getPropertyValue("top"));
    console.log(charlieTop);
        //get current cactus x position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    console.log(cactusLeft);
        //detect collision 
    if (cactusLeft < 50 && cactusLeft > 0 && charlieTop >=140){
        //collision
    console.log("collision");
    alert("Game Over! Please Try Again!")
score=0
    }
    else {
        score++
        document.getElementById("score").innerText=`Score = ${score}`
    }
}, 10);

document.addEventListener("keydown", function (event) {
     jump();
});
