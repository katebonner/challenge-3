// GET REFRENCES TO THE #generate ELEMENT
var generateBtn = document.querySelector("#generate");

// WRITE PASSWORD TO #password INPUT
function writePassword() {

  // ASSIGN PASSWORD CRITERA
  var passwordCritera = {
    passLength: 7,
    lowerCase: false,
    upperCase: false,
    numericalCharacters: false,
    specialCharacters: false
  }
  
  while (passwordCritera.passLength <= 8) {
    // LENGTH: 7 < x < 129 CHARACTERS
    passwordCritera.passLength = window.prompt("How long would you like your password to be? (please enter a number within the inclusive range of 8 to 128)");

    if (passwordCritera.passLength >= 8) {
      break;
    }
    
    while (passwordCritera.passLength == null) {
      return;
    }
  }


    
  //LOOP THROUGH CHARACTER REQUIRMENTS UNTIL AT LEAST ONE IS SELECTED
  while (!(passwordCritera.lowerCase) && !(passwordCritera.upperCase) && !(passwordCritera.numericalCharacters) && !(passwordCritera.specialCharacters)) {

    // REQUIRE AT LEAST 1 CHARACTER TYPE IS SELECTED
    window.alert("Please confirm at least one of the following character requirements:");

    // CONFIRM: LOWERCASE CHARACTERS
    passwordCritera.lowerCase = window.confirm("Would you like to include lowercase characters?");

    // CONFIRM: UPPERCASE CHARACTERS
    passwordCritera.upperCase = window.confirm("Would you like to include uppercase characters?");

    // CONFIRM: NUMERICAL CHARACTERS
    passwordCritera.numericalCharacters = window.confirm("Would you like to include numerical characters?");

    // CONFIRM: SPECIAL CHARACTERS 
    passwordCritera.specialCharacters = window.confirm("Would you like to include special characters?");

    // EDGE CASE: 0 CHARACTER REQUIREMENTS WERE CONFIRMED
    if (!(passwordCritera.lowerCase) && !(passwordCritera.upperCase) && !(passwordCritera.numericalCharacters) && !(passwordCritera.specialCharacters)) {
      window.alert("No character requirements have been confirmed.")
    }
  }

  // CHARACTER ARRAYS
  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numbersArr = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialArr = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", ",", ".", "?"];
    
  // PASSWORD ARRAY
  var passwordArr = [];


  // RANDOMLY PUSH CHARACTER ARRAYS TO PASSWORD ARRAY
  var z = 0;
  var zMax = passwordCritera.passLength;

    while (z < zMax) {

      if (passwordCritera.lowerCase) {
        var i = Math.floor(Math.random()* (lowerCaseArr.length));
        passwordArr.push(lowerCaseArr[i]);
        z += 1;
        if (z >= zMax) {
          break;
        }
      }
  
      if (passwordCritera.upperCase) {
        var j = Math.floor(Math.random()* (upperCaseArr.length));
        passwordArr.push(upperCaseArr[j]);
        z += 1;
        if (z >= zMax) {
          break;
        }
      }
  
      if (passwordCritera.numericalCharacters) {
        var k = Math.floor(Math.random()* (numbersArr.length));
        passwordArr.push(numbersArr[k]);
        z += 1;
        if (z >= zMax) {
          break;
        }
  
      }
  
      if (passwordCritera.specialCharacters) {
        var m = Math.floor(Math.random()* (specialArr.length));
        passwordArr.push(specialArr[m]);
        z += 1;
        if (z >= zMax) {
          break;
        }
      }
    }

    // JOIN COMPONENTS OF PASSWORD ARRAY TO A STRING
    var password = passwordArr.join("");
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    return password;
}

// ADD EVENT LISTENER TO GENERATE A BUTTON
generateBtn.addEventListener("click", writePassword);
