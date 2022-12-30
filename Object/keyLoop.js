// Create a function called keyLoop that takes in an object and loops through
// each of the key values. If any of the key values are equal to "monkey", then
// return "There's a monkey!", otherwise return "There's no monkey here!".

var keyLoop;


function keyLoop (animal){
    var arr = Object.values(animal);
    for(var i = 0; i<arr.length; i++){
    if(arr[i] === "monkey"){
      return "There's a monkey!";
    }
else{
    return "There's no monkey here!" ;
    }
}
}
