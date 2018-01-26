var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

<<<<<<< HEAD
function addElementToBeginningOfArray(a, b) {
 var c = [b, ...a]
  return c
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(b)
  return a
}

function addElementToEndOfArray(a, b) {
 var c = [...a, b]
  return c
}

function destructivelyAddElementToEndOfArray(a, b) {
  a.push(b)
  return a
}

e = [1, 2, 3]
 
function accessElementInArray(e){
  return e[2]
  
}

function destructivelyRemoveElementFromBeginningOfArray(e){
  e.shift() ;
  return e
}

function removeElementFromBeginningOfArray(e){
  return e.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(e){
  e.pop() ;
  return e
}

function removeElementFromEndOfArray(e){
  return e.slice(0,2)
}
=======
const a = [1]
var b = 'foo'

function addElementToBeginningOfArray(a, b) {
 a.unshift(b)
  return a
}
>>>>>>> 339755cf5d428b2ba1cc6f160474d25c0ed2bed0
