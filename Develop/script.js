// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // PASSWORD CRITERA OBJECT
  var passwordCritera = {
    passLength: null,
    lowerCase: false,
    upperCase: false,
    numericalCharacters: false,
    specialCharacters: false
  }

      // LENGTH: 7 < x < 129 CHARACTERS
      passwordCritera.passLength = window.prompt("How long would you like your password to be? (please enter a number within the inclusive range of 8 to 128)");
      console.log(passwordCritera.passLength);
      
  //LOOP THROUGH CHARACTER REQUIRMENTS UNTIL AT LEAST ONE IS SELECTED
  while (!(passwordCritera.lowerCase) && !(passwordCritera.upperCase) && !(passwordCritera.numericalCharacters) && !(passwordCritera.specialCharacters)) {

    // REQUIRE AT LEAST 1 CHARACTER TYPE IS SELECTED
    window.alert("Please confirm at least one of the following character requirements:");

    // INCLUDE: LOWERCASE CHARACTERS
    passwordCritera.lowerCase = window.confirm("Would you like to include lowercase characters?");
    console.log(passwordCritera.lowerCase);

    // INCLUDE: UPPERCASE CHARACTERS
    passwordCritera.upperCase = window.confirm("Would you like to include uppercase characters?");
    console.log(passwordCritera.upperCase);

    // INCLUDE: NUMERICAL CHARACTERS
    passwordCritera.numericalCharacters = window.confirm("Would you like to include numerical characters?");
    console.log(passwordCritera.numericalCharacters);

    // INCLUDE: SPECIAL CHARACTERS 
    passwordCritera.specialCharacters = window.confirm("Would you like to include special characters?");
    console.log(passwordCritera.specialCharacters);

    if (!(passwordCritera.lowerCase) && !(passwordCritera.upperCase) && !(passwordCritera.numericalCharacters) && !(passwordCritera.specialCharacters)) {
      window.alert("No character requirements have been confirmed.")
    }

  }
  
  // GENERATE PASSWORD
  var generatePassword = function() {
    //INSERT LOGIC
    generatedPassword = [];
    return generatedPassword;
  }
  // ASSIGN GENERATED PASSWORD TO PASSWORD TEXT OBJECT
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
