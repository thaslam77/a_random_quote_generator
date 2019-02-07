/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

let quotes = [
  {
    quote: "We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.",
    source: "J.K. Rowling",
    citation: "Speech",
    year: 2016
  },
  {
    quote: "There is no greater threat to the critics and cynics and fearmongers than those of us who are willing to fall because we have learned how to rise.",
    source: "Brené Brown, Ph.D. LMSW",
    citation: "Publication",
    year: 2017
  },
  {
    quote: "It’s the possibility of having a dream come true that makes life interesting.",
    source: "Paulo Coelho",
    citation: "Publication",
    year: 1988
  },
  {
    quote: "It is always the simple that produces the marvelous.",
    source: "Amelia Barr",
    citation: "Publication",
    year: ""
  },
  {
    quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    source: "Walt Whitman",
    citation: "Pulications",
    year: ""
  }
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote(ary){
  let randIndex;
  let message;

    randIndex = Math.floor(Math.random() * ary.length);
    return ary[randIndex];
}


/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  console.log(randomQuote);

  randomQuote = randomQuote.quote;


  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = randomQuote;
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
