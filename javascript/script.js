//
//Titel
//
var i = 0;
function changeTitle(){
    var titels = [
        "Stranger things",
        "sTranger things",
        "stRanger things",
        "strAnger things",
        "straNger things",
        "stranGer things",
        "strangEr things",
        "strangeR things",
        "stranger Things",
        "stranger tHings",
        "stranger thIngs",
        "stranger thiNgs",
        "stranger thinGs",
        "stranger thingS"
    ]

    document.title = titels[i];
    i = (i + 1) % titels.length;
}
setInterval(changeTitle,300)



window.onload = function() {

    var faviconIndex = 0;
    var favicon = document.getElementById('favicon');
  
    setInterval(function() {
            favicon.href = "assets/favicon/image (" + faviconIndex + ").png";
            faviconIndex++;
            faviconIndex %= 51;
      }, 51);

      const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
})
}

//
//Karakters pagina
//

function HideCharacter(actorName, CharacterName){
  var actor = document.getElementById(actorName);
  var character = document.getElementById(CharacterName);
  actor.style.position = 'relative'
  actor.style.opacity = '1';
  character.style.position = 'absolute'
  character.style.opacity = '0';
}

function HideActor(actorName, CharacterName){
  var actor = document.getElementById(actorName);
  var character = document.getElementById(CharacterName);
  actor.style.position = 'absolute'
  actor.style.opacity = '0';
  character.style.position = 'relative'
  character.style.opacity = '1';
}

//
//Verhaal pagina
//

var x = false;

function blurFunction(seizoen) {
  if(x){
    document.getElementById("spoiler_" + seizoen).style.filter = "blur(0px)";
    x = false;
  }   
  else{
    document.getElementById("spoiler_" + seizoen).style.filter = "blur(5px)";
    x = true
  }
}

//
//Shop pagina
//

var totaalprijs = 0;

var aantal_1 = 0;
var aantal_2 = 0;
var aantal_3 = 0;
var aantal_4 = 0;
var aantal_5 = 0;
var aantal_6 = 0;
var aantal_7 = 0;
var aantal_8 = 0;
var aantal_9 = 0;
var aantal_10 = 0;
var aantal_11 = 0;
var aantal_12 = 0;

function cartFunction(item_number, prijs){
  var item = document.getElementById(item_number);
  var empty = document.getElementById("empty");
  var cart = document.getElementById("shopping_cart");
  
  item.style.display = "grid";
  empty.style.display = "none"; 
  cart.style.backgroundColor = "rgba(255, 0, 0, 0.4)";

  window[("aantal_" + item_number)] += 1;
  totaalprijs += prijs;
  document.getElementById("totaalprijs").innerHTML = "€" + totaalprijs + ",-";
  document.getElementById("aantal_" + item_number).innerHTML = window["aantal_" + item_number];

  setTimeout(() => {  cart.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; }, 200);

}


var y = true;

function shopping_cart_Function(){
  var shopping_cart = document.getElementById("shopping_cart_inhoud");
  
  if(y){
      shopping_cart.style.display = "block";
    y = false;
  }   
  else{
    shopping_cart.style.display = "none";
    
    y = true;
  }
}

function removeFunction(item_number, prijs){
  var item = document.getElementById(item_number);
  
  totaalprijs -= prijs;

  window["aantal_" + item_number] -= 1;
  document.getElementById("totaalprijs").innerHTML = "€" + totaalprijs + ",-";

  document.getElementById("aantal_" + item_number).innerHTML = window["aantal_" + item_number];

  if (window["aantal_" + item_number] == 0){
    item.style.display= "none";
  }
}

