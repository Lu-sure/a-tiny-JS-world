/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
const dog = {
   species: 'dog',
   name: 'Easy',
   gender: 'female',
   age: '2',
   legs: 4,
   hands: 0,
   saying: {text: 'woof-woof!'},
   friendly: 'everyone'
 };

 const cat = {
   species: 'cat',
   name: 'Roxy',
   gender: 'female',
   age: '1',
   legs: 4,
   hands: 0,
   saying: {text: 'meow!!'},
   friendly: 'Makar, Alex, Ivanka'
 };

 const man = {
   species: 'human',
   name: 'Kolia',
   gender: 'male',
   age: '26',
   legs: 2,
   hands: 2,
   saying: {text: 'Let`s start at 9 a.m!'},
   friendly: 'Love, Macha, Easy, Ariy'
 };

 const woman = {
   species: 'human',
   name: 'Love',
   gender: 'female',
   age: '26',
   legs: 2,
   hands: 2,
   saying: {text: 'Fine, ok!'},
   friendly: 'Easy, Kolia, Masha, Serg'
 };

 const catWoman = {
   species: 'cat+human',
   name: 'Tigr',
   gender: 'female',
   age: '21',
   legs: 2,
   hands: 2,
   saying: cat.saying,
   friendly: 'Easy'
 };

const inhabitants = [dog, cat, man, woman, catWoman];
const getPrintText = function (obj) {
   const values = Object.values(obj); 
   const trueValues = values.map(function (value) {
      if (typeof value === 'object') {
         return getPrintText(value);
      }
      return value;
   })
   return trueValues.join('; ');
}

// ======== OUTPUT ========
for (let i=0; i<inhabitants.length; i++) {
   print(getPrintText(inhabitants[i]));
};
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
