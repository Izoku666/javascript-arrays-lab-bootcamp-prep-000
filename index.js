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
  newKittens.concat(newKittens , name)
  return newKittens
}

function prependKitten(name)
{
  
}

function removeLastKitten()
{
  
}

function removeFirstKitten()
{
  
}
// Add your functions and code here
