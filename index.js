/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ======== #2
// const properties = ['species', 'name', 'lastName', 'gender', 'age', 'legs', 'paws', 'hands', 'saying', 'friendly'];

class Inhabitant {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // this.friendly = friendly;
  }

  getPrintText() {
    // return properties.map(prop => this[prop]).join('. ');
    return `My name is ${this.name}. I\'m ${this.age} years old.`
  }

}

class Human extends Inhabitant {
  constructor(name, lastName, age, saying) {
    super(name, age);
    this.name = `${name} ${lastName}`;
    this.species = 'human';
    this.saying = saying;
  }

  getPrintText() {
    return `${this.species}: ${super.getPrintText()} \"${this.saying}\"`;
  }
}

class Woman extends Human {
  constructor(name, lastName, age, saying) {
    super(name, lastName, age, saying);
    this.gender = 'female';
  }

  beBeautiful() {
    return `\"I\'m loved by ${randomInhabitant})) \"`;
  }
}

class Man extends Human {
  constructor(name, lastName, age, saying) {
    super(name, lastName, age, saying);
    this.gender = 'male';
  }

  beGentleman() {
    return `\"I like you very much. Just as you are.\"`;
  }
}

class Pet extends Inhabitant {
  constructor(name, age) {
    super(name, age);
  }

  beTooMuchNice() {
    return `.. sleeping softly on the knees`;
  }
}

class Cat extends Pet {
  constructor(name, gender, age) {
    super(name, age);
    this.saying = 'meow!';
    this.species = 'cat';
    this.gender = gender;
  }

  getPrintText() {
    return `${this.species}: ${super.getPrintText()} \"${this.saying}\"`
  }
}

class Dog extends Pet {
  constructor(name, gender, age) {
    super(name, age);
    this.saying = 'woof-woof!';
    this.species = 'dog';
    this.gender = gender;
  }

  getPrintText() {
    return `${this.species}: ${super.getPrintText()} \"${this.saying}\"`
  }
}

function specialize_with(o, S, prop) { { o[prop] = S[prop] } }

class CatWoman extends Woman {
  constructor(name, lastName, age, saying) {
    super(name, lastName, age, saying);
    specialize_with(this, new Cat(), 'saying');
  }

}

const johnny = new Man('Johnny', 'Depp', 57, 'Hate my ex!');
const love = new Woman('Love', 'Beautiful', 26, 'Love everyone!');
const roxy = new Cat('Roxolana', 'female', 1);
const easy = new Dog('Easy', 'female', 2,);
const catWoman = new CatWoman('Selina', 'Kyle', 21, 'I\'m cat!');
const inhabitants = [roxy, easy, johnny, love, catWoman];
let randomInhabitant = inhabitants[Math.floor(Math.random() * (inhabitants.length))].name;

print(love.getPrintText());
print(love.beBeautiful());
print(johnny.getPrintText());
print(johnny.beGentleman());
print(roxy.getPrintText());
print(roxy.beTooMuchNice());
print(easy.getPrintText());
print(easy.beTooMuchNice());
print(catWoman.getPrintText());
