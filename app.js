"use strict"
//NOTES****
//Create a working app to search a database to find criminals.
  //Create search by name function
    //find person using name they entered
    //use ID to link to names?
  //search by trait function
    //gender
    //weight
    //height
    //date of birth should be AGE
      //take current year- date of birth possibly?
    //eye color
    //occupation
  //display options/main menu

function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case "yes":
      searchResults = searchByName(people);
      console.log(displayPerson);
      break;
    case "no":
      // TODO: search b traits
      searchResults = searchbyheight(people);
      console.log(displayPerson)
      break;
      default:
    app(people); 
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  if(!person){
    alert("Could not find that individual.");
    return app(people);
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson;
}

//TODO: SEARCH BY TRAITS FUNCTION
function searchByTrait(people){
  alert ("These are the following traits we identify people with: Gender, eyecolor, height, age, weight, occupation. The next prompt will ask how many of these traits do you know.")
  let numberOfTraits = prompt("How many traits can you identify the person with? The traits include:Gender, eyecolor, height, age, weight, occupation. Answer with a number 1 - 6.")
  let whichTraits = prompt("Which traits would you like to identify the person with? Traits include:Gender, eyecolor, height, age, weight, occupation.")
  let gender = prompt("What is the person's gender?");
  let eyeColor = prompt("What is the person's eye color?");
  let height = prompt("What is the person's height?");
  let age = prompt("What is the person's age?");
  let weight = prompt("What is the person's wight?");
  let occupation = prompt("What is the peron's occupation?");

  let foundPerson = people.filter(function(person){
    if () {

    }
    else () {

    }
    else if () {

    }
  }
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    let response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
function searchbyheight(people){
let weightOfPerson = prompt("how much dose the person weight",chars);
let foundPerson = people.filter(function(Person){
   if (person.wieght === weightofperson){
    return true;
  }
  else{ 
    return false
   }
  })
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
// let traitArray = [["male", "female"][ "brown", "black", "hazel", "blue", "green"]["58", "59", "61", "62", "63", "65", "66", "67", "69", "70", "71", "72", "74", "76"][]]
app();
mainMenu();
searchByName();
searchByTrait();
displayPeople();
displayPerson();
promptFor();
yesNo();
chars();

