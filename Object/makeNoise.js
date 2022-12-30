// Create a function called makeNoise that takes in an object and returns
// the response from calling the noise method.

var animal;
var makeNoise;

var animal= {
    type: "cat",
    name: "kitty",
    noise() { console.log("HELLO") }
 };
function makeNoise(animal){
    return animal.noise()
}


