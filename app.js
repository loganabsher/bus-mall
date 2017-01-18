'use strict';
//creates a template for keeping track of data
function image(picture, clicks, number){
  this.picture = picture;
  this.clicks = clicks;
  this.id = number;
}
var bag = new image('img/bag.jpg', 0);
var banana = new image('img/banana.jpg', 0);
var bathroom = new image('img/bathroom.jpg', 0);
var boots = new image('img/boots.jpg', 0);
var breakfast = new image('img/breakfast.jpg', 0);
var bubblegum = new image('img/bubblegum.jpg', 0);
var chair = new image('img/chair.jpg', 0);
var cthulhu = new image('img/cthulhu.jpg', 0);
var dogDuck = new image('img/dog-duck.jpg', 0);
var dragon = new image('img/dragon.jpg', 0);
var pen = new image('img/pen.jpg', 0);
var petSweep = new image('img/pet-sweep.jpg', 0);
var scissors = new image('img/scissors.jpg', 0);
var shark = new image('img/shark.jpg', 0);
var sweep = new image('img/sweep.png', 0);
var tauntaun = new image('img/tauntaun.jpg', 0);
var unicorn = new image('img/unicorn.jpg', 0);
var usb = new image('img/usb.gif', 0);
var waterCan = new image('img/water-can.jpg', 0);
var wineGlass = new image('img/wine-glass.jpg', 0);

var imageArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

function randomImage(imageArray){
  for(var i = 0; i < 3; i++){
    var random = Math.round(Math.random() * 19);
    console.log(random);
    var gameEl = document.getElementById('imageGame');
    var choiceEl = document.getElementById('choice');
    var randomImg = document.createElement('img');
    var buttonEl = document.createElement('button');
    randomImg.setAttribute('class', 'medium');
    randomImg.setAttribute('src', imageArray[random].picture);
    buttonEl.setAttribute('type', 'submit');
    buttonEl.setAttribute('id', (i + 1) + '_Image');
    buttonEl.setAttribute('class', 'decision');
    buttonEl.textContent = 'choice ' + (i + 1);
    gameEl.appendChild(randomImg);
    choiceEl.appendChild(buttonEl);
  }
}
randomImage(imageArray);
var choiceOne = document.getElementById('1_Image');
var choiceTwo = document.getElementById('2_Image');
var choiceThree = document.getElementById('3_Image');
console.log(choiceThree);
var imageChoice = function(event){
  event.preventDefault();
  event.stopPropagation();
  console.log('sucess');
};
choiceOne.addEventListener('submit', imageChoice, false);
// function condition(){
//   var con = start();
//   console.log(con);
  // if(con === true){
  //   do{
  //     console.log('sucess');
  //   }
  //   while(con !== true);
  // }
// }
// function start(){
//   var formEl = document.getElementById('startForm');
//   var startEl = document.createElement('button');
//   startEl.setAttribute('type', 'submit');
//   startEl.setAttribute('id', 'startButton');
//   startEl.textContent = 'Start';
//   formEl.appendChild(startEl);
//   var startEvent = function(event){
//     event.preventDefault();
//     event.stopPropagation();
//     formEl.remove(startEl);
//     return true;
//   };
//   startEl.addEventListener('submit', startEvent, false);
// }
// condition();
