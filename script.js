function next() {
  let teddy = document.querySelector(".teddyimg"); // Selects the first element with class "teddy"
  if (teddy) {
    teddy.src = "teddy-3.png"; // Change the image
  }
  speak();
}

function speak() {
  let speech = new SpeechSynthesisUtterance("Happy Teddy day Khushi, Tum to is teddy se bhi zyada cute aur pyaari ho. Ohhhh My Khushi , Love You. Love You. Love You.");
  speech.lang = "hi-IN"; // Set language (change as needed)
  speech.rate = 1; // Adjust speed (0.5 = slow, 2 = fast)
  speech.pitch = 1; // Adjust pitch (0 = low, 2 = high)
  window.speechSynthesis.speak(speech);
}
