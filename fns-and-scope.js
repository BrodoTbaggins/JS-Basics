//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

let isTyler = name => {
  if(name === "Tyler"){
    return true;
  }else{
    return false;
  }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName(){
  let userName = prompt("Please enter your name");
  if(userName != null){
    return userName;
  } else {
    userName = prompt("Please double check your entry and re-enter your name");
    return userName;
  }
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var userName = getName();
  alert("Welcome, " + userName);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Parameters are temporary variables that are passed into functions while arguments are the actual variables.  Parameters are placeholders for arguments.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // False, null, undefined, NaN, 0, "".  You can check if something is falsy by seeing if the value in evaluates as false when evaluated as a boolean



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(){
  return "Austin";
}
  


//Now save the function definition of myName into a new variable called newMyName

let newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
return function(){
  return "Austin";
}
}
//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();