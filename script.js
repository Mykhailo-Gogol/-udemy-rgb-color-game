// let firstName = prompt('Please enter your first name?')
// let surName = prompt('Please enter your sur name?')
// let age = prompt('Please enter your current age')
// let fullName = firstName + ' ' + surName

// alert('Your full name is ' + fullName)
// alert('Your current age is ' + age)

// let currentAge = prompt('Please enter your current age')
// let ageInDays = currentAge * 365.25
// alert('Your age in days is ' + ageInDays + ' days!')

// let x = 5
// let y = 9
// Boolean = x !== y
// alert('x !== y' + ' is ' + Boolean)

// let x = 10
// let y = 'a'
// Boolean = y === 'b' || x >= 10
// alert(Boolean)

// let x = 3
// let y = 8
// Boolean = !(x == '3' || x === y) && !(x != 8 && x <= y)
// alert(Boolean)

// let str = ''
// let msg = 'hello!'
// let isFunny = 'false'
// Boolean = (str || msg) && isFunny
// alert(Boolean)

// let age = Number(prompt('Please enter your age here:'))

// // First game

// let secretNumber = 8
// let guess = Number(prompt('Guess a number'))

// if (guess === secretNumber) {
//     alert('You got it right.')
// } else if (guess < 8) {
//     alert('Too low. Guess again')
// } else {
//     alert('Too high. Guess again')
// }

// let counter = -10

// while (counter < 20) {
//     console.log(counter)
//     counter++
// }

// let counter = 10

// while (counter <= 40) {
//     console.log(counter)
//     counter += 2
// }

// let counter = 300

// while (counter <= 333) {
//     if (counter % 2 !== 0) {
//         console.log(counter)
//     }
//     counter += 1
// }

// let counter = 5

// while (counter <= 50) {
//     if (counter % 3 === 0 && counter % 5 === 0) {
//         console.log(counter)
//     }
//     counter += 1
// }

// // ANNOY-o-Matic

// let answer = prompt("Are we there yet?(Type 'yes' or 'no')")
// while (answer.indexOf('yes') === -1) {
//     answer = prompt('Are we there yet?')
// }

// alert('We made it')

// for (let count = 1; count < 6; count++) {
//     console.log(count)
// }

// let str = 'hello'

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// for (let i = 0; i < 16; i += 8) {
//     console.log(i)
// }

// let str = 'eheewlwlfo'

// for (let i = 1; i < str.length; i += 2) {
//     console.log(str[i])
// }

// // For Loops
// console.log('Print all numbers between -10 and 19')
// for (let i = -10; i < 20; i++) {
//     console.log(i)
// }
// console.log('Print all even numbers between 10 and 40')
// for (let i = 10; i <= 40; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
// console.log('Print all odd numbers between 300 and 333')
// for (let i = 300; i <= 333; i += 1) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }
// console.log('Print all numbers between 5 and 50')
// for (let i = 5; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 10 === 0) {
//         console.log(i)
//     }
// }

// Functions
// function doSomething() {
//     console.log('Hello World')
// }

// doSomething()

// function singASong() {
//     console.log('Hello Hello')
//     console.log('Hello Hello')
//     console.log('You say Goodbye')
//     console.log('And I say Hello')
//     console.log("I don' t know why you say Goodbye I say Hello")
// }

// singASong();
// singASong();

// function square(num) {
//     console.log(num * num)
// }

// square(100);
// square(2);
// square(12);

// function sayHello(name) {
//     console.log('Say hello to ' + name)
// }

// sayHello('John');

// function area(height, width) {
//     console.log(height * width)
// }
// area(10, 20)

// function greeting(person1, person2, person3) {
//     console.log('Hi there ' + person1)
//     console.log('Hi there ' + person2)
//     console.log('Hi there ' + person3)
// }
// greeting('John', 'Paul', 'Jones')

// function test(x, y) {
//     return y - x
// }
// test(10, 40)

// function test(x) {
//     return x * 2
//     console.log(x)
//     return x / 2
// }

// test(40)

// Test
// function even(x) {
//     if (x % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// even(41)
// even(40)
// even(333)
// even(8)

// Test 2

// function factorial(num) {
//     let result = 1
//     for (let i = 2; i <= num; i++) {
//         result *= i
//     }
//     return result
// }

// Test 3
// function kebabToString(str) {
//     newStr = str.replace(/-/g, '_')
//     return newStr
// }

// Scope
// let x = 30
// function number() {
//     x = 40
//     console.log(x)
// }
// Scope 2
// let x = 20

// function number() {
//     let x = 30
//     console.log(x)
// }

// Scope 3
// let x = 8

// function doMath() {
//     x += 1
//     if (x % 5 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// x += 1

// Scope 4
// function hi() {
//     let name = 'John'
//     console.log(name)
// }
// function bye() {
//     console.log(name)
// }

// Higher Order Functions

// function sing() {
//     console.log('You say Goodbye')
//     console.log('And I say Hello')
// }
// setInterval(sing, 5000)
// clearInterval(10)

//

// setInterval(function () {
//     console.log('You say Goodbye')
//     console.log('And I say Hello')
// }, 2000)

// Basic Arrays

// let friends = ['John', 'Paul', 'Jones', 'Jimmy']
// friends[3] = 'Robert'
// friends[4] = 'John Bohnam'
// console.log(friends)

// let nums = [1, 23, 34, 45]
// console.log(nums.length)

// const array1 = ['a', 'b', 'c']

// array1.forEach((element) => console.log(element))

// JS Objects

// let someObject = {
//     friends: [{ name: 'M' }, { name: 'J' }, { name: 'A' }],
//     color: 'blue',
//     isEvil: true,
// }

// console.log(someObject.friends[0].name)

// let movies = [
//     { title: 'Iron Man', rating: '5', hasWatched: true },
//     { title: 'Thor', rating: '4.5', hasWatched: true },
//     { title: 'Hulk', rating: '4', hasWatched: false },
// ]

// movies.forEach(function (movie) {
//     var result = 'You have '
//     if (movie.hasWatched) {
//         result += 'watched '
//     } else {
//         result += 'not seen '
//     }
//     result += movie.title + ' - '
//     result += movie.rating + ' stars'
//     console.log(result)
// })

// DOM Select Manipulate

// h1
// let h1 = document.querySelector('h1')

// h1.style.color = 'pink'

// body

// let body = document.querySelector('body')

// let isBlue = false

// setInterval(function () {
//     if (isBlue) {
//         body.style.background = '#eee'
//     } else {
//         body.style.background = '#fff'
//     }
//     isBlue = !isBlue
// }, 1000)

// let tag = document.getElementById('highlight')

// let tags = document.getElementsByClassName('bolded')

// let tags = document.getElementsByTagName('li')

// let first_h1 = document.querySelector('.bolded')

// console.log(first_h1)

// let all_h1 = document.querySelectorAll('.bolded')

// console.log(all_h1)

// DOM Manipulation

// let button = document.querySelector('button');
// let paragraph = document.querySelector('p');

// button.addEventListener('click', function () {
//   paragraph.textContent = 'Someone click on me'
// });

// let h1 = document.querySelector('h1');

// h1.addEventListener('click', function () {
//   alert('Someone click on me')

// })
// h1.addEventListener('click', function () {
//   h1.style.background = 'orange'
// })



// let buttonColor = document.querySelector('.color');
// buttonColor.addEventListener('click', function () {
//   document.body.classList.toggle('grey');
// })

// Score keeper project

// let p1Button = document.querySelector('#p1');
// let p2Button = document.getElementById('p2');
// let p1Display = document.getElementById('p1Span');
// let p2Display = document.getElementById('p2Span');
// let resetButton = document.getElementById('reset');
// let numInput = document.querySelector('input');
// let winningScoreDisplay = document.querySelector('p span');
// let p1Score = 0;
// let p2Score = 0;
// let gameOver = false;
// let winningScore = 5;



// p1Button.addEventListener('click', function () {
//   if (!gameOver) {
//     p1Score++;
//     p1Display.textContent = p1Score;
//     if (p1Score === winningScore) {
//       p1Display.classList.add('winner');
//       gameOver = true;
//     }
//   }
// })

// p2Button.addEventListener('click', function () {
//   if (!gameOver) {
//     p2Score++;
//     p2Display.textContent = p2Score;
//     if (p2Score === winningScore) {
//       p2Display.classList.add('winner');
//       gameOver = true;
//     }
//   }
// })

// resetButton.addEventListener('click', function () {
//   reset();
// })

// function reset() {
//   p1Score = 0;
//   p2Score = 0;
//   p1Display.textContent = 0;
//   p2Display.textContent = 0;
//   p1Display.classList.remove('winner');
//   p2Display.classList.remove('winner');
//   gameOver = false
// }

// numInput.addEventListener('change', function () {
//   winningScoreDisplay.textContent = this.value;
//   winningScore = Number(this.value);
//   reset();
// })

// var lis = document.querySelectorAll('li');

// for (let i = 0; i < lis.length; i++) {
//   lis[i].addEventListener('mouseover', function () {
//     this.classList.add('selected')
//   });
//   lis[i].addEventListener('mouseout', function () {
//     this.classList.remove('selected')
//   });
//   lis[i].addEventListener('click', function () {
//     this.classList.toggle('done')
//   })
// }

// The Great RGB Color Game

let colors = generateRandomColors(6);

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.getElementById('message');
let h1 = document.querySelector('h1');
let resetButton = document.getElementById('reset')
let easyBtn = document.getElementById('easy');
let hardBtn = document.getElementById('hard')

easyBtn.addEventListener('cleck', function () {

});

resetButton.addEventListener('click', function () {
  // reset heading color
  h1.style.backgroundColor = '#232323';
  resetButton.textContent = 'New Colors';
  // generate all new colors
  colors = generateRandomColors(6);
  // pick a new random color from arr
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // change colr of squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  };
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add eventlisteners to squares
  squares[i].addEventListener('click', function () {
    // grab color of picked square
    let clickedColor = this.style.backgroundColor;
    // compare color to picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!'
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = 'Play Again'
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again'
    };
  });
};

function changeColors(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {

    //change all colors to match given color 
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  // do random
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  //make an array
  let arr = [];
  // repeat num times
  for (let i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor())
  }
  // returs that arr
  return arr;
}

function randomColor() {
  // pick a red
  let r = Math.floor(Math.random() * 256);
  // pick a green
  let g = Math.floor(Math.random() * 256);
  // pick a blue
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}