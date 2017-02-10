'use strict';
function Image(picture, name){
  this.picture = picture;
  this.clicks = 0;
  this.shown = 0;
  this.name = name;
}
var nameArray = [];
nameArray.push(new Image('img/bag.jpg', 'bag'));
nameArray.push(new Image('img/banana.jpg', 'banana'));
nameArray.push(new Image('img/bathroom.jpg', 'bathroom'));
nameArray.push(new Image('img/boots.jpg', 'boots'));
nameArray.push(new Image('img/breakfast.jpg', 'breakfast'));
nameArray.push(new Image('img/bubblegum.jpg', 'bubblegum'));
nameArray.push(new Image('img/chair.jpg', 'chair'));
nameArray.push(new Image('img/cthulhu.jpg', 'cthulhu'));
nameArray.push(new Image('img/dog-duck.jpg', 'dogDuck'));
nameArray.push(new Image('img/dragon.jpg', 'dragon'));
nameArray.push(new Image('img/pen.jpg', 'pen'));
nameArray.push(new Image('img/pet-sweep.jpg', 'petSweep'));
nameArray.push(new Image('img/scissors.jpg', 'scissors'));
nameArray.push(new Image('img/shark.jpg', 'shark'));
nameArray.push(new Image('img/sweep.png', 'sweep'));
nameArray.push(new Image('img/tauntaun.jpg', 'tauntaun'));
nameArray.push(new Image('img/unicorn.jpg', 'unicorn'));
nameArray.push(new Image('img/usb.gif', 'usb'));
nameArray.push(new Image('img/water-can.jpg', 'waterCan'));
nameArray.push(new Image('img/wine-glass.jpg', 'wineGlass'));
function random(){
  return Math.round(Math.random() * (nameArray.length - 1));
}
function randomControler(){
  var one = random();
  var two = random();
  var three = random();
  if(one === two){
    two = random();
  }
  else if(one === three || two === three){
    three = random();
  }
  return [one, two, three];
}
function renderImages(){
  var choice = randomControler();
  var gameEl = document.getElementById('image-game');
  for(var i = 0; i < choice.length; i++){
    var imageEl = document.createElement('img');
    var getEl = nameArray[choice[i]];
    imageEl.setAttribute('src', getEl.picture);
    imageEl.setAttribute('id', getEl.name);
    imageEl.setAttribute('class', 'medium');
    gameEl.appendChild(imageEl);
    getEl.shown++;
  }
  return choice;
}
function unrenderImages(choice){
  var parentEl = document.getElementById('image-game');
  for(var i = 0; i < choice.length; i++){
    var childEl = document.getElementById(nameArray[choice[i]].name);
    parentEl.removeChild(childEl);
  }
}
function createClickEvent(choice){
  var firstEl = document.getElementById(nameArray[choice[0]].name);
  var one = function(event){
    nameArray[choice[0]].clicks++;
    console.log('chosen first picture');
    unrenderImages(choice);
  };
  var secondEl = document.getElementById(nameArray[choice[1]].name);
  var two = function(event){
    nameArray[choice[1]].clicks++;
    console.log('chosen second picture');
    unrenderImages(choice);
  };
  var thirdEl = document.getElementById(nameArray[choice[2]].name);
  var three = function(event){
    nameArray[choice[0]].clicks++;
    console.log('chosen third picture');
    unrenderImages(choice);
  };
  firstEl.addEventListener('click', one, false);
  secondEl.addEventListener('click', two, false);
  thirdEl.addEventListener('click', three, false);
}
function gameControler(){
  var i = 0;
  do{
    var choice = renderImages();
    console.log(choice);
    createClickEvent(choice);
    i++;
  }
  while(i < 3);
}
gameControler();
// var context = document.getElementById('busmallChart').getContext('2d');
// var chartArray = [100, 200, 300, 50, 10];
// var chartColors = ['blue', 'red', 'yellow', 'orange', 'green'];
// var chartOptions = {
//   responsive: false,
//   scales: {
//     yAxes: [{
//       ticks: {
//         beginAtZero: true
//       }
//     }]
//   }
// };
// var chartData = {
//   labels: nameArray,
//   datasets: [{
//     label: '# of votes for each color',
//     data: chartArray,
//     backgroundColor: chartColors
//   }]
// };
// var myFirstChart = new Chart(context, {
//   type: 'bar',
//   data: chartData,
//   options: chartOptions
// });
