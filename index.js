// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}
function destructivelyPrependCat(name) {
  return cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  return cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
  return cats.shift(name);
}
function appendCat(name) {
  return [...cats, name];
}
function prependCat(name) {
  let newCats = [name, ...cats];
  return newCats;
}
function removeLastCat() {
  let newCats = cats.slice(0, cats.length - 1);
  return newCats;
}
function removeFirstCat() {
  let newCats = cats;
  return newCats.slice(1);
}