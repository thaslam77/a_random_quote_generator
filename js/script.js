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

let quotes = [  //Created and array of "quote" objects and named the array "quotes" (with the recommended properties).
  {
    quote: "We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.",
    source: "J.K. Rowling",
    citation: "Speech",
    year: 2016,
    catergory: "Politics"
  },
  {
    quote: "There is no greater threat to the critics and cynics and fearmongers than those of us who are willing to fall because we have learned how to rise.",
    source: "Brené Brown, Ph.D. LMSW",
    citation: "Publication",
    catergory: "Business"

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
    catergory: "Politics"

  },
  {
    quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    source: "Walt Whitman",
    citation: "Publication",
    catergory: "Business"

  }
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote(array){ //Created a function to take in one parameter (named `array`).  In this case parameter will take in an array.
  let randIndex;
    randIndex = Math.floor(Math.random() * array.length);  //Created the variable `randIndex` to store random number.
                                                           //Using Math.random() method to multiply the number returned from the .length property of the array
                                                           //to generate a random number and also assuring that the result will be no more than (or equal)
                                                           //the length of the array (by using the Math.floor() method).
    return array[randIndex];  //This final part of the function returns a random quote object (which in this case, to the getRandomQuote() function).
                              //Now that `randIndex` has stored a generated random number, that value is used to "index" an item in the "quotes" array (of objects).
                              //This is acheived by using array and wrapping/storing the `randIndex` variable in brackets ( [ ] ) known as "box notation"
                              // --->  array[randIndex]
}

function randomBackgroundColor() { //Created function `randomBackgroundColor` to generate a random background color and return the rgb color value.
    let x = Math.floor(Math.random() * 256);  //Created variable "x", "y" and "z" to store a random value from 0 - 256.
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";  //Created variable "bgColor" to string value which returns a random background color to webpage (i.e, rbg(66, 134, 244))
    //console.log(bgColor);
    return bgColor;
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

function printQuote() { //Created the function `printQuote()` that called when a click event occurs.  The button that invokes that function call has the "id" name "loadQuote"
                        //that's located in `index.html` file (line 16).
  let message = ''; // Created a variable named "message" which currently holds an empty string.  This varibale will be used to store/concatenate HTML and properties from the "quotes" array.
  let randomQuote = getRandomQuote(quotes);  //Created a variable "randomQuote" which stores the random/returned "quote" object from the "quotes" array.
                                             //Note: the random quote is stored in the variable "randomQuote" after the `getRandomQuote()` function runs passing the "quotes" array.

  let newGeneratedQuote = getRandomQuote(quotes);
    if (randomQuote.quote != newGeneratedQuote.quote){
      let newbgColor = randomBackgroundColor();
      document.body.style.background = newbgColor;
}



    message += '<p class="quote">' + randomQuote.quote + '</p>';  //Storing/concatenating ( += ) HTML, "quote" and "source" properties from the "quotes" array into the "message" variable.
                                                                  //Overall referencing HTML Template (provided in assignment) and dot syntax (randomQuote.quote) to access/concatenate
                                                                  //the "quote" properties into the "message" varibale.
    message += '<p class="source">' + randomQuote.source;
      if (randomQuote.citation) {  //Using conditional statement to see "if" a citation property exists in quote object.
        message += '<span class="citation">' + randomQuote.citation + '</span>';  // "if" a citation property exists concatenate the addtional HTML string and
                                                                                  //the "quote" propety (randomQuote.citation) in the "message" variable.
          if (randomQuote.year) {  //Using 2nd conditional statement to see "if" a year property exists in quote object.
          message += '<span class="year">' + randomQuote.year + '</span>';// "if" a "year" property exists concatenate this addtional HTML string also and
          }                                                         //the "quote" propety (randomQuote.year) in the "message" variable.

             if (randomQuote.catergory) {  //Using 3rd conditional statement to see "if" a catergory property exists in quote object.
             message += '<span class="year">' + randomQuote.catergory + '</span></p>';// "if" a "year" property exists concatenate this addtional HTML string also and
                                                                                      //the "quote" propety (randomQuote.catergory) in the "message" variable.

        } else { //Using an "else" statement the determine if a "citation/year" property exists.  The "else" statement will only run if the 2nd conditional `if(randomQuote.year)` is "false".
          message += '</p>' //This <p> tag is necessary to properly close the concatenating HTML string if needed.
        }
      }
  const outputDiv = document.getElementById('quote-box');  //Created a variable "outputDiv" to store the targeted DOM element.
                                                         // `getElementById` is used to target the element id with the name "quote-box" in the html document (index.html)
                                                         // This will allow JavaScript code to display the random "quote(s)" to the web page.
  outputDiv.innerHTML = message; //Storing the complete/concatenated HTML string (stored in the "message" variable)
                                 //into "outputDiv" to display the concatenated HTML string (using the the element property `.innerHTML`).

}

window.setInterval(printQuote, 20000);  //Set a timing method `setInterval()` to call the `printQuote` function (every 20 second) to print a new quote to the page.

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
