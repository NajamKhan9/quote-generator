const quotes = [
  "Believe in yourself.",
  "Every moment is a fresh beginning.",
  "Dream big and dare to fail.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal.",
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Do what you can with all you have, wherever you are. – Theodore Roosevelt",
  "You are never too old to set another goal or dream a new dream. – C.S. Lewis",
  "Believe you can and you’re halfway there. – Theodore Roosevelt",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream it. Believe it. Build it.",
  "Hustle in silence and let your success make the noise.",
  "Doubt kills more dreams than failure ever will.",
  "The man who has confidence in himself gains the confidence of others.",
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "Learn as if you will live forever, live like you will die tomorrow.",
  "When you change your thoughts, remember to also change your world.",
  "It always seems impossible until it’s done.",
  "Opportunities don’t happen. You create them.",
  "Don’t be afraid to give up the good to go for the great.",
  "I find that the harder I work, the more luck I seem to have.",
  "Success usually comes to those who are too busy to be looking for it.",
  "I never dreamed about success. I worked for it.",
  "The way to get started is to quit talking and begin doing.",
  "Stop chasing the money and start chasing the passion.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "All progress takes place outside the comfort zone.",
  "If you really look closely, most overnight successes took a long time.",
  "The ones who are crazy enough to think they can change the world are the ones who do.",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "Magic is believing in yourself, if you can do that, you can make anything happen.",
  "If you can dream it, you can achieve it.",
  "Don’t wish it were easier, wish you were better.",
  "Act as if what you do makes a difference. It does.",
  "With the new day comes new strength and new thoughts."
];

// DOM elements
const quoteText = document.querySelector("#quote");
const quoteBtn  = document.querySelector("#quoteBtn");

let lastIndex = -1; // NEW — remembers the last quote index

quoteBtn.addEventListener("click", function () {
  quoteText.classList.add("fade");

  setTimeout(function () {
    let randomIndex;

    // NEW — keep picking until it's different from lastIndex
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex; // NEW — save current index for next time

    quoteText.innerText = quotes[randomIndex];
    quoteText.classList.remove("fade");
  }, 180);
});
