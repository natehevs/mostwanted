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


/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case "yes":
      searchResults = searchByName(people);
      console.log(displayPerson);
      break;
    case "no":
      // TODO: search by traits
      searchResults = searchByTrait(people);
      prompt("Please enter any known traits.");
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
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
  // TODO: find the person using the name they entered
  return foundPerson;
}

//TODO: SEARCH BY TRAITS FUNCTION
function searchByTrait(people){
  let gender = prompt("What is the person's gender?");
  let eyeColor = prompt("What is the person's eye color?");
  let height = prompt("What is the person's height?");
  let age = prompt("What is the person's age?");
  let weight = prompt("What is the person's wight?");
  let occupation = prompt("What is the peron's occupation?");

  let foundPerson = people.filter(function(person)){
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


// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

app();
mainMenu();
searchByName();
searchByTrait();
displayPeople();
displayPerson();
promptFor();
yesNo();
chars();

