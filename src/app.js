function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function handleClick(event) {
  event.preventDefault();
  let sentenceNumber = getRandomInt(sentence.length);
  let h2 = document.querySelector("h2");
  h2.innerHTML = sentence[sentenceNumber];
}

let element = document.querySelector("#newSentenceButton");
element.addEventListener("click", handleClick);

let sentence = [
  "went to the beach",
  "get a job",
  "buy a house",
  "had a crush on someone",
  "had a good memory",
  "ride a bike",
  "skate on ice",
  "ski",
  "saw snow",
  "drink alcohol",
  "I was drunk",
  "came home later than what my parents told me",
  "I didint sleep at night",
  "failed a test",
  "win a medal",
  "climb a mountain",
  "try to talk ina different language",
  "had a heartbreak",
  "had a boyfriend/girlfriend",
  "live alone",
  "buy a car",
  "get on an airplane",
  "learn to swim",
  "go to therapy",
  "did a radical change",
  "enter a cave",
  "went diving",
  "feel a lot of fear",
  "proud of myself",
  "was on an automovil accident",
  "has to ask for a visa",
  "get out of my origin country",
  "play a videogame",
  "had a pet",
  "went to my boyfriend/girlfriend house",
  "was on a strange city",
  "made a tatoo",
  "get out of my house without permission",
  "draw on a wall",
  "feel myself useful",
  "give or take a kiss",
  "saw my actual partner",
  "met someone famous",
  "was stopped by the police",
];
