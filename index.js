var kittens = ["Milo" , "Otis" , "Garfield"] //define your array here

function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  return kittens
}

function appendKitten(name)
{
    var newKittens = kittens
    return newKittens
}

function prependKitten(name)
{
  var newKittens = kittens
  return newKittens
}

function removeLastKitten()
{
  var newKittens
  return kittens
}

function removeFirstKitten()
{
  return kittens.slice(1 , kittens.length)
}
// Add your functions and code here
