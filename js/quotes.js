// 12 quotes
const quotes = [
  {
    quote: "Timing is everything.",
    author: "Michelle",
  },
  {
    quote: "Legs of an antelope, heart of an eagle.",
    author: "Nadia",
  },
  {
    quote: "You snooze, you lose.",
    author: "Peter",
  },
  {
    quote: "Laughter is the best medicine.",
    author: "Cider",
  },
  {
    quote: "Stay on brand!",
    author: "Jackson",
  },
  {
    quote: "Seize the day.",
    author: "JJoony",
  },
  {
    quote: "I was born under a lucky star.",
    author: "Spica",
  },
  {
    quote: "Promises are like pie crusts - they're made to be broken.",
    author: "Rebecca",
  },
  {
    quote: "A fool and their Bells are soon parted.",
    author: "Christine",
  },
  {
    quote: "You can't have wise folks if you don't have fools too.",
    author: "Francois",
  },
  {
    quote: "Today's adults are yesterday's children",
    author: "Azamman",
  },
  {
    quote: "Let bygones be bygones.",
    author: "Jasmine",
  },
];

const quote = document.querySelector(".quote_text");
const author = document.querySelector(".quote_author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
