/* Produto 1 */

//Movement Animation to happen
const card1 = document.querySelector(".card1");
const container1 = document.querySelector(".container1");

//Items
const title1 = document.querySelector(".title1");
const sneaker1 = document.querySelector(".sneaker1 img");
const purchase1 = document.querySelector(".purchase1");
const description1 = document.querySelector(".info1 h3");
const sizes1 = document.querySelector(".sizes1");

//Moving Animation Event
container1.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container1.addEventListener("mouseenter", (e) => {
    card1.style.transition = "none";
    //Popout
    title1.style.transform = "perspective(900px) translateZ(150px)";
    sneaker1.style.transform = "perspective(270px) translateY(30px) translateZ(200px) rotateZ(0deg)";
    description1.style.transform = "perspective(900px) translateZ(125px)";
    sizes1.style.transform = "perspective(900px) translateZ(100px)";
    purchase1.style.transform = "translateZ(75px)";
});
//Animate Out
container1.addEventListener("mouseleave", (e) => {
    card1.style.transition = "all 0.5s ease";
    card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title1.style.transform = "translateZ(0px)";
    sneaker1.style.transform = "translateZ(0px) rotateZ(-365deg)";
    description1.style.transform = "translateZ(0px)";
    sizes1.style.transform = "translateZ(0px)";
    purchase1.style.transform = "translateZ(0px)";
});

/* Produto 2 */

//Movement Animation to happen
const card2 = document.querySelector(".card2");
const container2 = document.querySelector(".container2");

//Items
const title2 = document.querySelector(".title2");
const sneaker2 = document.querySelector(".sneaker2 img");
const purchase2 = document.querySelector(".purchase2");
const description2 = document.querySelector(".info2 h3");
const sizes2 = document.querySelector(".sizes2");

//Moving Animation Event
container2.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container2.addEventListener("mouseenter", (e) => {
    card2.style.transition = "none";
    //Popout
    title2.style.transform = "perspective(900px) translateZ(150px)";
    sneaker2.style.transform = "perspective(270px) translateY(20px) translateZ(200px) rotateZ(0deg)";
    description2.style.transform = "perspective(900px) translateZ(125px)";
    sizes2.style.transform = "perspective(900px) translateZ(100px)";
    purchase2.style.transform = "translateZ(75px)";
});
//Animate Out
container2.addEventListener("mouseleave", (e) => {
    card2.style.transition = "all 0.5s ease";
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title2.style.transform = "translateZ(0px)";
    sneaker2.style.transform = "translateZ(0px) rotateZ(-365deg)";
    description2.style.transform = "translateZ(0px)";
    sizes2.style.transform = "translateZ(0px)";
    purchase2.style.transform = "translateZ(0px)";
});