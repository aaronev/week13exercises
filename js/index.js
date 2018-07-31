// In JS: Create an array of 5 strings. Make sure to capitalize some of the letters in your strings.

var arr = ['asdf', '23rsdfs', 'gfewc', 'danlwuji8u', 'hotdog']

// In JS: Loop through the array. Change each string to lowercase, and then add them to a new array.

var newArr = arr.map(el => el.toLowerCase())

// In JS: Loop through the new array (all lowercase strings) and log the first and last character of each string to the console.

newArr.map(el => console.log(el[0], el[el.length - 1]))

// In JS: Create a variable and store your name in it. Using the split method and a loop, log each letter of your name to the console.

var me = "aaron".split('')

me.map(el => console.log(el))

// In JS: Using the join method, put your name back together and replace all occurrences of one letter with another. (ie: replace all a's with y's)

var replacedMe = me.map(el => {
  if (el == 'a') {
    return 'e'
  } else return el
}).join('')

console.log(replacedMe)

// In JS: Create a function that will get the user's input, test it against the standard regular expression for emails, and log the result in the console.

var getEmailFromUser = function(event) {
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var userInput = document.getElementById('email')
  console.log(userInput.match(reg))

}

// In JS: Make the function "listen" to the button using addEventListener().



// Once you have completed these exercises add them to Github.