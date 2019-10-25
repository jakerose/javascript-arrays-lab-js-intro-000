var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var push = kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  var unshift = kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  var shift = kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  var shift = kittens.shift()
  return kittens
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {

}

function removeFirstKitten() {

}
