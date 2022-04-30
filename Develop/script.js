// GET REFRENCES TO THE #generate ELEMENT
var generateBtn = document.querySelector("#generate");

//GLOBAL 
var password = null;

// Write password to the #password input
function writePassword() {

// ASSIGN PASSWORD CRITERA
  var passwordCritera = {
    passLength: 7,
    lowerCase: false,
    upperCase: false,
    numericalCharacters: false,
    specialCharacters: false
  }

while (passwordCritera.passLength < 8) {
    // LENGTH: 7 < x < 129 CHARACTERS
    passwordCritera.passLength = window.prompt("How long would you like your password to be? (please enter a number within the inclusive range of 8 to 128)");

    if (passwordCritera.passLength >= 8)
    break;
  }
    
  //LOOP THROUGH CHARACTER REQUIRMENTS UNTIL AT LEAST ONE IS SELECTED
  while (!(passwordCritera.lowerCase) && !(passwordCritera.upperCase) && !(passwordCritera.numericalCharacters) && !(passwordCritera.specialCharacters)) {

    // REQUIRE AT LEAST 1 CHARACTER TYPE IS SELECTED
    window.alert("Please confirm at least one of the following character requirements:");

    // INCLUDE: LOWERCASE CHARACTERS
    passwordCritera.lowerCase = window.confirm("Would you like to include lowercase characters?");

    // INCLUDE: UPPERCASE CHARACTERS
    passwordCritera.upperCase = window.confirm("Would you like to include uppercase characters?");

    // INCLUDE: NUMERICAL CHARACTERS
    passwordCritera.numericalCharacters = window.confirm("Would you like to include numerical characters?");

    // INCLUDE: SPECIAL CHARACTERS 
    passwordCritera.specialCharacters = window.confirm("Would you like to include special characters?");

    if (!(passwordCritera.lowerCase) && !(passwordCritera.upperCase) && !(passwordCritera.numericalCharacters) && !(passwordCritera.specialCharacters)) {
      window.alert("No character requirements have been confirmed.")
    }
  }

  // CHARACTER ARRAYS

  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numbersArr = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  var specialArr = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", ",", ".", "?"];
    
  var passwordArr = [];
 
  var z = 0;
  var zMax = passwordCritera.passLength;

    while (z < zMax) {

      if (passwordCritera.lowerCase) {
        var i = Math.floor(Math.random()* (lowerCaseArr.length));
        passwordArr.push(lowerCaseArr[i]);
        console.log(z);
        console.log(zMax);
        z += 1;
        if (z > zMax) {
          break;
        }
      }
  
      if (passwordCritera.upperCase) {
        var j = Math.floor(Math.random()* (upperCaseArr.length));
        passwordArr.push(upperCaseArr[j]);
        console.log(z);
        console.log(zMax);
        z += 1;
        if (z > zMax) {
          break;
        }
      }
  
      if (passwordCritera.numericalCharacters) {
        var k = Math.floor(Math.random()* (numbersArr.length));
        passwordArr.push(numbersArr[k]);
        console.log(z);
        console.log(zMax);
        z += 1;
        if (z > zMax) {
          break;
        }
  
      }
  
      if (passwordCritera.specialCharacters) {
        var m = Math.floor(Math.random()* (specialArr.length));
        passwordArr.push(specialArr[m]);
        console.log(z);
        console.log(zMax);
        z += 1;
        if (z > zMax) {
          break;
        }
      }
    }

    // ASSIGN GENERATED PASSWORD ARRAY TO PASSWORD STRING
    var password = passwordArr.join("");
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
