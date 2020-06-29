

function generate() {
    let complexity = prompt('How long would you like your password to be');
    const passwordValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'' !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let password = "";

    for (i = 0; i <= complexity; i++) {
        password = password + passwordValues.charAt(Math.floor(Math.random() * Math.floor(passwordValues.length -1)));
        
    }
    document.getElementById("textBox").value = password;
}