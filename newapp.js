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
  let searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'") 
  let searchResults;
  searchType.toLowerCase()
  switch(searchType){
    case "yes":
      searchResults = searchByName(people);
      
      break;
    case "no":
      
      searchResults = searchByTrait(people);
 
      break;
      default:
    return app(people);
      break;
  }
  
  mainMenu(searchResults, people);
}


function mainMenu(person, people){

  
  if (person.length === 1) {
    alert(displayPerson(person[0]));
  }

  else if(person.length > 1) {
    prompt("Would you like to identify some personal traits to help narrow your search? Type 'yes' or 'no'.");
    if ("yes") {
    }
    else {
      return app(people);
    }
  }
  else  {

    alert("Could not find that individual.");
    return app(people); 
  }

  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":

    break;
    case "family":
    
      displayFamily(people, person[0]);
    break;
    case "descendants":
    
    break;
    case "restart":
    app(people); 
    break;
    case "quit":
    return; 
    default:
    return mainMenu(person, people, searchResults); 
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

function chars(input){
  return true;         
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

  return personInfo;
}

function displayFamily(people, person){
let familyInfo = "";

  if (person.currentSpouse != null){
  familyInfo += ("currentSpouse" + getName(person.currentSpouse, people) + "\n");
  }


let kids = findKids(people, person);
  for(let i = 0; i < kids.length; i++){
    familyInfo += ("Child: " + kids[i].firstName + " " + kids[i].lastName + "\n");
   }

let siblings = findSiblings(people, person);
  for(let i = 0; i < siblings.length; i++){
    familyInfo += ("Siblings" + siblings[i].firstName + " " + siblings[i].lastName + "\n");
    }
    if (person.parents.length > 1){
     familyInfo += ("parents" + getName(person.parents[0], people) + " " +  getName(person.parents[1], people) + "\n"); 
   }else if (person.parents.length === 1){
    familyInfo += ("parents" + getName(person.parents[0], people) + "\n");
   }


  
  alert(familyInfo);
}

function getName (id, people){
  let personFound = people.filter(function (person){
    if (id === person.id){
      return true;
    }
    else{
      return false;
    }
  });
  return personFound[0].firstName + " " + personFound[0].lastName;
}

function findKids(people, person){
let foundKids = people.filter(function(personItteration){
  if  (person.id === personItteration.parents[0]  || person.id === personItteration.parents[1]){
    return true;
  }
  else {
    return false;
  }
});
return foundKids;
}
function findSiblings(people, person){
let foundSiblings = people.filter(function(el){
  if (el.parents[0] === person.parents[0]){
    return true;
  }
  else {
    return false;
  }
  });
return foundSiblings;
}


//goal to find children and grandchildren

// function displayDescendants(person){
//   let descendants = findKids(person, people x)
//     if (x > 0) {
//       console.log (x);
//       return descendants(x + 1);
//     }
//     else {
//       return x;
  //   }
  // }