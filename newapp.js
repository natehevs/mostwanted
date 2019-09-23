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
      // console.log(displayPerson);
      break;
    case "no":
      // TODO: search by traits
      searchResults = searchByTrait(people);
 
      break;
      default:
    return app(people);
      break;
  }
  
  mainMenu(searchResults, people, searchResults);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people, searchResults, foundPerson, personInfo){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  if (searchResults.length === 1) {
    alert(displayPerson(person[0]));
    prompt("To see this person's family or descendants type 'family' or 'descendants'.");
  }

  else if(searchResults.length > 1) {
    prompt("Would you like to identify some personal traits to help narrow your search? Type 'yes' or 'no'.");
    if ("yes") {
    }
    else {
      return app(people);
    }
  }
  else  {

    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their  'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

   switch(displayOption){
    break;
    case "family":
     displayFamily                  // TODO: get person's family
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
    return mainMenu(person, people, searchResults); // ask again
  }
}

function searchByName(people){
  let firstName = prompt("What is the person's first name?", chars);
  let lastName = prompt("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person)  {
    if(person.firstName === firstName && person.lastName === lastName){
      return true;  
      } 
    else{
      return false;
    }
  
  })
  return foundPerson;
}

function searchByTrait(people, person, foundPerson) {
  let searchTrait = prompt("What trait would you like to search by? Type 'gender', 'date of birth', 'height', 'weight', 'eye color', or 'occupation'.");
  let searchResults;
  switch(searchTrait){
    case "gender":
      searchResults = searchByGender(people);
      break;
    case "date of birth":
      searchResults = searchByDob(people);
      break;
    case "height":
      searchResults = searchByHeight(people);
      break;
    case "weight":
      searchResults = searchByWeight(people);
      break;
    case "eye color":
      searchResults = searchByEyeColor(people);
      break;
    case "occupation":
      searchResults = searchByOccupation(people);
      break;
      default:
    return app(people);
      break;
  }
}

function searchByGender(people, person, searchResults) {
let genderOfPerson = prompt("What is the person's gender? Type 'male' or 'female'");
let foundPerson = people.filter(function(person){
   if (person.gender === genderOfPerson){
    return true;
  }
  else  { 
    return false;
   }
  });

      if (foundPerson.length === 1) {
        alert(displayPerson(foundPerson[0]));
      }

      else if (foundPerson.length > 1) {
        alert("There were too many results that matched your search please choose another trait to identify.");
      return searchByTrait(foundPerson);
      }
      else {
        return app(people);
      }

  console.log(foundPerson);
  return foundPerson;
}

function searchByDob(people, person, searchResults) {
let dobOfPerson = prompt("What is the person's date of birth? Example: month/day/year");
let foundPerson = people.filter(function(person){
   if (person.dob === dobOfPerson){
    return true;
  }
  else{ 
    return false;
   }
  });

      if (foundPerson.length === 1) {
        alert(displayPerson(foundPerson[0]));
      }

      else if (foundPerson.length > 1) {
        alert("There were too many results that matched your search please choose another trait to identify.");
      return searchByTrait(foundPerson);
      }
      else {
        return app(people);
      }

  console.log(foundPerson);
  return foundPerson;
}

function searchByHeight(people, person, searchResults) {
let heightOfPerson = prompt("What is the person's height?");
let foundPerson = people.filter(function(person){
   if (person.height === heightOfPerson){
    return true;
  }
  else{ 
    return false;
   }
  });
  
      if (foundPerson.length === 1) {
        alert(displayPerson(foundPerson[0]));
      }

      else if (foundPerson.length > 1) {
        alert("There were too many results that matched your search please choose another trait to identify.");
      return searchByTrait(foundPerson);
      }
      else {
        return app(people);
      }

  console.log(foundPerson);
  return foundPerson;
}

function searchByWeight(people, person, searchResults){
let weightOfPerson = prompt("How much does the person weigh?");
let foundPerson = people.filter(function(Person){
   if (person.weight === weightOfPerson){
    return true;
  }
  else{ 
    return false;
   }
  });
  
      if (foundPerson.length === 1) {
        alert(displayPerson(foundPerson[0]));
      }

      else if (foundPerson.length > 1) {
        alert("There were too many results that matched your search please choose another trait to identify.");
      return searchByTrait(foundPerson);
      }
      else {
        return app(people);
      }

  console.log(foundPerson);
  return foundPerson;
}

function searchByEyeColor(people, person, searchResults){
let eyeColorOfPerson = prompt("What is the person's eyecolor? Type 'brown', 'blue', 'black', 'hazel' or 'green'.");
let foundPerson = people.filter(function(Person){
   if (person.eyeColor === eyeColorOfPerson){
    return true;
  }
  else{ 
    return false;
   }
  });
  
      if (foundPerson.length === 1) {
        alert(displayPerson(foundPerson[0]));
      }

      else if (foundPerson.length > 1) {
        alert("There were too many results that matched your search please choose another trait to identify.");
      return searchByTrait(foundPerson);
      }
      else {
        return app(people);
      }

  console.log(foundPerson);
  return foundPerson;
}

function searchByOccupation(people, person, searchResults){
  let occupationOfPerson = prompt("What is the person's occupation? Type 'programmer', 'assistant', 'landscaper', 'nurse', 'architect', 'doctor' or 'politician'.");
  let foundPerson = people.filter(function(person){
   if (person.occupation === occupationOfPerson){
    return true;
  }
  else{ 
    return false;
   }
  });

    if (foundPerson.length === 1) {
      alert(displayPerson(foundPerson[0]));
    }

    else if (foundPerson.length > 1) {
      alert("There were too many results that matched your search please choose another trait to identify.");
      return searchByTrait(foundPerson);
    }
    else {
        return app(people);
      }

console.log(foundPerson);
return foundPerson;
}



function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
                       // helper function to pass in as default promptFor validation 
function chars(input){
  return true;         // default validation only
}

function displayPerson(person){

  let personInfo = ("First Name: " + person.firstName + "\n");
  personInfo += ("Last Name: " + person.lastName + "\n");
  personInfo += ("Gender:" + person.gender + "\n");
  personInfo += ("Age:" + person.dob + "\n");
  personInfo += ("Height:" + person.height + "\n");
  personInfo += ("Weight:" + person.weight + "\n");
  personInfo += ("Eye Color:" + person.eyeColor + "\n");
  personInfo += ("Occupation:" + person.occupation + "\n");
  // personInfo += ("Parents:" + person.parents + "\n");
  // personInfo += ("Current Spouse:" + person.currentSpouse + "\n");

  return personInfo;
}

function displayFamily(person, people, searchResults){
let familyInfo = ("currentSpouse" + person.spouse + "\n");
familyInfo += ("kids" + findKids + "\n");
FamilyInfo += ("parents" + person.parents + "\n");
familyInfo += ("siblings" + findSiblings + "\n");
}
function findKids(person, searchResults, people){
let foundKids = people.filter(function(person){
  if  (foundKids.parents === foundperson){
    return foundKids;
  }
});
}
function findSiblings(person, people, searchResults){
let siblings = people.filters(function(el){
  if (el.parents[0]= person.parents[0]){
    return siblings;
  }
  });
}
function displayDescendants(person){

}