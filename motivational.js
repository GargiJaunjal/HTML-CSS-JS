function getQuote() {
  const feeling = document.getElementById("feeling-select").value;
  const quoteDisplay = document.getElementById("quote-display");
  const body = document.body;

  // Reset animation
  quoteDisplay.style.opacity = "0";

  // Reset styles
  body.classList.remove("animated-background");
  body.style.background = "";

  // Background themes
  switch (feeling) {
    case 'depression':
      body.style.background = 'linear-gradient(to right, #cfd9df, #e2ebf0)';
      break;
    case 'failure':
      body.style.background = 'linear-gradient(to right, #fceabb, #f8b500)';
      break;
    case 'loneliness':
      body.style.background = 'linear-gradient(to right, #bdc3c7, #2c3e50)';
      break;
    case 'stress':
      body.style.background = 'linear-gradient(to right, #ffecd2, #fcb69f)';
      break;
    case 'Happiness':
      body.style.background = 'linear-gradient(to right, #f6d365, #fda085)';
      body.classList.add("animated-background");
      break;
    case 'Motivation':
      body.style.background = 'linear-gradient(to right, #00c6ff, #0072ff)';
      body.classList.add("animated-background");
      break;
    default:
      body.style.background = 'linear-gradient(to right, #ffe0e9, #d6f0ff)';
  }

  // Quotes per feeling
  const quotes = {
    depression: [
      "You are stronger than you think.",
      "Every day is a new beginning. Take a deep breath and start again.",
      "This too shall pass. You’re not alone.",
      "Even the darkest night will end and the sun will rise."
    ],
    failure: [
      "Failure is not the opposite of success. It’s part of success.",
      "Every failure is a step closer to success.",
      "Don’t be afraid to fail. Be afraid not to try.",
      "Failure is simply the opportunity to begin again, this time more intelligently.",
      "Only those who dare to fail greatly can ever achieve greatly."
    ],
    loneliness: [
      "You matter. You are loved.",
      "The eternal quest of the human being is to shatter his loneliness.",
      "You are never alone. You are eternally connected with everyone.",
      "The greatest thing in the world is to know how to belong to oneself."
    ],
    stress: [
      "Inhale peace. Exhale stress.",
      "Slow down. You’re doing just fine.",
      "Tension is who you think you should be. Relaxation is who you are.",
      "Almost everything will work again if you unplug it for a few minutes… including you."
    ],
    Happiness: [
      "Keep smiling, happiness looks great on you! 😊",
      "Enjoy the moment. Happiness grows when shared. 🌈",
      "Let your joy be contagious! ✨",
      "Be happy for this moment. This moment is your life."
    ],
    Motivation: [
      "Push yourself because no one else is going to do it for you. 💪",
      "Believe in yourself and all that you are. 🚀",
      "The best view comes after the hardest climb. 🧗‍♂️",
      "Don’t watch the clock; do what it does. Keep going.",
      "The harder you work for something, the greater you’ll feel when you achieve it."
    ]
  };

  // Display random quote
  if (feeling === "") {
    quoteDisplay.textContent = "⚠️ Please select an emotion to get motivated.";
  } else {
    const selectedQuotes = quotes[feeling];
    const randomIndex = Math.floor(Math.random() * selectedQuotes.length);
    quoteDisplay.textContent = "🌟 " + selectedQuotes[randomIndex];
  }

  // Fade in quote smoothly
  setTimeout(() => {
    quoteDisplay.style.opacity = "1";
  }, 200);
}
