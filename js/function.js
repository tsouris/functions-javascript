function add(arg, b, c = 2) {
  const a = arg * b - c;
  console.log(a);
}

console.log(add(2, 5));

function FnA() {
  console.log("FnA");
}

function FnB() {
  console.log("FnB");
}

function FnC() {
  console.log("FnC");
}

console.log("Before A");
FnA();
console.log("After A");
console.log("Before B");
FnB();
console.log("After B");
console.log("Before C");
FnC();
console.log("After C");

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

function calculateTotalPrice(items) {
  let result = 0;
  for (let i = 0; i < items.length; i++) {
    result += items[i];
  }
  return result;
}

const totalPrice = calculateTotalPrice(cart);
console.log("The total price is:", totalPrice);

const word = "javaSCRIPT";

function wordCase(wrd) {
  let convertedWord = "";
  for (let i = 0; i < wrd.length; i++) {
    if (wrd[i] === wrd[i].toUpperCase()) {
      convertedWord += wrd[i].toLowerCase();
    } else {
      convertedWord += wrd[i].toUpperCase();
    }
  }

  return convertedWord;
}

console.log(wordCase(word));


function slugfy(string) {
    // const normalisedString = string.toLowerCase();
    // const words = normalisedString.split(" ");
    // const slug = words.join("-");
    // return slug;
    return string.toLowerCase().split(" ").join("-");
}

console.log(slugfy("Top 10 benefits of React framework"));

function FnA() {
    console.log(arguments);
    const args = Array.from(arguments);
    console.log(args);
}

FnA(1, 2, 3);

const FnB = () => {
    // arguments does not exist in this function
    // console.log(arguments);
}

let clients = ["dave", "james", "nikolas" , "dennis"];

function greet(name) {
    if(clients.includes(name)) {
        console.log(`${name}, we're happy that you've returned!`);
    }
    else {
        const confirmation = confirm("Hey, do you wish to become our client?");
        if(confirmation) {
            clients.push(name)
            alert(`${name}, we are happy you are with us!`);
        }
        else {
            alert("Thats a shame, we will be waiting for you");
        }
    }

    console.log(clients);
    return;
}

const user = prompt("Enter your name").toLowerCase();
greet(user);