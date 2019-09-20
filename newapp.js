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
  let searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
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
  if (searchResults === 1) {
    return foundPerson;
  }
  else (searchResults > 1) {
    prompt("Would you like to identify some personal traits to help narrow your search? Type 'yes' or 'no'.");
  }
  else if(!person){
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
  let firstName = prompt("What is the person's first name?", chars);
  let lastName = prompt("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // for(let i = 0; i < data.length; i++){
  //   console.log(data[i].firstName + " " + data[i].lastName);
  // }
  // TODO: find the person using the name they entered
  return foundPerson;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}





// app();
// mainMenu();
// searchByName();
// searchByTrait();
// displayPeople();
// displayPerson();
// promptFor();
// yesNo();
// chars();