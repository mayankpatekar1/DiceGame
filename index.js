

document.querySelector(".img1").setAttribute("src","images/dice1.png");
document.querySelector(".img2").setAttribute("src","images/dice1.png");




var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource = "imagees/dice" + randomNumber1 +".png";
// document.querySelectorAll(".img1")[0].setAttribute("src","randomImageSource");



if (randomNumber1== 1){

document.querySelector(".img1").setAttribute("src","images/dice1.png");

}
else if (randomNumber1==2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");

}
else if (randomNumber1==3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");

}
else if (randomNumber1==4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");

}
else if (randomNumber1==5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");

}
else {
    document.querySelector(".img1").setAttribute("src","images/dice6.png");

}




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "imagees/dice" + randomNumber2 +".png";
// document.querySelectorAll(".img2")[1].setAttribute("src","randomImageSource2");



if (randomNumber2== 1){

document.querySelector(".img2").setAttribute("src","images/dice1.png");

}
else if (randomNumber2==2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");

}
else if (randomNumber2==3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");

}
else if (randomNumber2==4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");

}
else if (randomNumber2==5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");

}
else {
    document.querySelector(".img2").setAttribute("src","images/dice6.png");

}



if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw !!!!";
}
