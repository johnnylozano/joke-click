let joke = [];
const jokeText = document.querySelector(".joke-text");
const tellJoke = document.getElementById("tellJoke");
const getNewJoke = document.getElementById("newJoke");
const imgSetup = document.querySelector(".img-setup");
const imgPunchline = document.querySelector(".img-punchline");

const fetchJoke = async () => {
   joke = [];
   const res = await fetch("https://official-joke-api.appspot.com/random_joke");
   const data = await res.json();
   joke.push(data.setup);
   joke.push(data.punchline);
   jokeText.textContent = joke[0];
};

fetchJoke();
console.log(joke);

tellJoke.addEventListener("click", () => {
   jokeText.textContent = joke[1];
   imgSetup.classList.add("img-hidden");
   imgPunchline.classList.remove("img-hidden");
});

getNewJoke.addEventListener("click", () => {
   fetchJoke();
   imgSetup.classList.remove("img-hidden");
   imgPunchline.classList.add("img-hidden");
});