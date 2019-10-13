function Elephant(name, age) {
  this.name = name;
  this.age = age;
  this.image = "elephant.png";
  this.type = "Elephant";
}

function Lion(name, age) {
  this.name = name;
  this.age = age;
  this.image = "lion.png"
  this.type = "Lion";
}

function Turtle(name, age) {
  this.name = name;
  this.age = age;
  this.image = "turtle.png"
  this.type = "Turtle";
}

var animals = [new Elephant(), new Lion(), new Turtle()];
var names = ["Mufasa", "Craig", "Teddy", "Frank", "Oscar"];

function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Elephant)
  {
    return new Elephant(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Lion)
  {
    return new Lion(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Turtle)
  {
    return new Turtle(generateRandomName(), generateRandomAge());
  }
}

function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

$(document).ready(function() {
  var animal = generateRandomAnimal();
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});
