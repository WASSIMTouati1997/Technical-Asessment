// Create a function called getKeys that takes in the animal object and returns all
// of the key names.

var animal;
var getKeys;


var animals = {name: 'Leo', race: 'dog', age: 5};
function getKeys(animals){
    return (Object.keys(animals));
}