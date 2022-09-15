function handleClick(event) {
  event.preventDefault();
  alert(sentence[1]);
  let h2 = document.querySelector("h2");
  h2.innerHTML = sentence[2];
}

let element = document.querySelector("#newSentenceButton");
element.addEventListener("click", handleClick);

let sentence = ["went to the beach", "get a job", "buy a house"];
