//Movement Animation to happen
const card = document.querySelector('.card');
const card1 = document.querySelector('.card1');
const container = document.querySelector('.container');
const container1 = document.querySelector('.container1');
//Items
const title = document.querySelector('.title');
const title1 = document.querySelector('.title1');
const sneaker = document.querySelector('.sneaker img');
const sneaker1 = document.querySelector('.sneaker1 img');
const purchase = document.querySelector('.purchase');
const purchase1 = document.querySelector('.purchase1');
const description = document.querySelector('.info h3');
const description1 = document.querySelector('.info1 h3');
const sizes = document.querySelector('.sizes');
const sizes1 = document.querySelector('.sizes1');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container1.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  //Popout
  title.style.transform = 'translateZ(150px)';
  sneaker.style.transform = 'translateZ(200px) rotateZ(45deg)';
  description.style.transform = 'translateZ(125px)';
  sizes.style.transform = 'translateZ(100px)';
  purchase.style.transform = 'translateZ(75px)';
});
container1.addEventListener('mouseenter', (e) => {
  card1.style.transition = 'none';
  //Popout
  title1.style.transform = 'translateZ(150px)';
  sneaker1.style.transform = 'translateZ(200px) rotateZ(-45deg)';
  description1.style.transform = 'translateZ(125px)';
  sizes1.style.transform = 'translateZ(100px)';
  purchase1.style.transform = 'translateZ(75px)';
});
//Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = 'translateZ(0px)';
  sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
  description.style.transform = 'translateZ(0px)';
  sizes.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';
});
container1.addEventListener('mouseleave', (e) => {
  card1.style.transition = 'all 0.5s ease';
  card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title1.style.transform = 'translateZ(0px)';
  sneaker1.style.transform = 'translateZ(0px) rotateZ(0deg)';
  description1.style.transform = 'translateZ(0px)';
  sizes1.style.transform = 'translateZ(0px)';
  purchase1.style.transform = 'translateZ(0px)';
});
