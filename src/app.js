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
  "went to the beach I,...",
  "got a job...",
  "bought a house was when I... ",
  "had a crush on someone...",
  "had a good memory...",
  "rode a bike...",
  "skated on ice...",
  "went skiing...",
  "saw snow...",
  "drank alcohol...",
  "was drunk...",
  "came home later than what my parents told me...",
  "I didn't slept the hole night...",
  "failed a test...",
  "won a medal (not a participation one)...",
  "climbed a mountain...",
  "try to talk in a different language...",
  "had a heartbreak...",
  "broke someones heart...",
  "had a boyfriend/girlfriend...",
  "lived alone...",
  "had sex...",
  "bought a car...",
  "got on an airplane...",
  "learned to swim...",
  "went to therapy...",
  "did a radical change...",
  "got a radical haircut...",
  "had an orgasm...",
  "entered a cave...",
  "went diving...",
  "went skydiving...",
  "felt a lot of fear...",
  "felt proud of myself...",
  "was on an automovil accident...",
  "had to ask for a visa...",
  "got out of my home country...",
  "played a videogame...",
  "got a pet...",
  "went to my boyfriend/girlfriend house...",
  "was on a strange city...",
  "got a tattoo...",
  "got out of my house without permission...",
  "made a grafitti...",
  "felt myself useful...",
  "kissed someone...",
  "got my first kiss...",
  "saw my actual partner...",
  "met someone famous...",
  "was stopped by the police...",
  "grabbed someones butt...",
  "went camping...",
  "went to a job interview...",
  "went to a concert...",
  "broke a bone...",
  "got into a fist fight...",
];
