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

function onLoad () {
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));
  var hasSavedAnimal = false;
  if (animal === null) {
    document.getElementById("save-button").textContent = "Save Animal";
    animal = generateRandomAnimal();
  } else {
    document.getElementById("save-button").textContent = "Clear Animal";
    hasSavedAnimal = true;
  }
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image);
  document.getElementById("save-button").addEventListener("click", function() {
    if (hasSavedAnimal) {
      localStorage.removeItem("savedAnimal");
      document.getElementById("save-button").style.display = "none";
      document.getElementById("message").textContent = "Cleared!";
      document.getElementById("message").style.display = "block";
    } else {
      localStorage.setItem("savedAnimal", JSON.stringify(animal));
      document.getElementById("save-button").style.display = "none";
      document.getElementById("message").textContent = "Saved!";
      document.getElementById("message").style.display = "block";
    }
  });

};
