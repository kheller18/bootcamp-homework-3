// function to generate random password
function generate() {
    
    // promting the user for a password length between 8-128 characters
    let passwordLength = prompt('Password length (8-128)');

    // error handling to ensure the user selects a password length greater than 8 but less than 128 characters 
    if (passwordLength < 8 || passwordLength > 128) {
        do {
            alert("The number of characters you chose was less than 8 or exceed 128");
            passwordLength = prompt('Password length (8-128)');
        }
        while (passwordLength < 8 || passwordLength > 128)   
    }

    // prompting the user for character type selections
    let uppercase = confirm("Include uppercase letters (Cancel / OK)?");
    let lowercase = confirm("Include lowercase letters (Cancel / OK)?");
    let numbers = confirm("Include numbers (Cancel / OK)?");
    let specialCharacters = confirm("Include special characters (Cancel / OK)?");

    // error handling to ensure the user selects at least one character type 
    if (uppercase == false && lowercase == false && numbers == false && specialCharacters == false) {
        do {
            alert("No character types selected. Please select at least one character type?");
            uppercase = confirm("Include uppercase letters (Cancel / OK)?");
            lowercase = confirm("Include lowercase letters (Cancel / OK)?");
            numbers = confirm("Include numbers (Cancel / OK)?");
            specialCharacters = confirm("Include special characters (Cancel / OK)?");
        }
        while (uppercase == false && lowercase == false && numbers == false && specialCharacters == false)
    }

    // initalizing different character types in a string
    const uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowCase = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const symbols = "'' !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let passwordValues = "";
    let password = "";

    // for loop to generate a random password
    for (i = 0; i < passwordLength; i++) {
        if (uppercase == true) {
            passwordValues = passwordValues + uppCase;
        }
        if (lowercase == true) {
            passwordValues = passwordValues + lowCase;
        } 
        if (numbers == true) {
            passwordValues = passwordValues + num;
        } 
        if (specialCharacters == true) {
            passwordValues = passwordValues + symbols;
        }
        password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length -1)));
    }

    // Inputs the random password in a textbox 
    document.getElementById("textBox").value = password;
}