const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generatedPasswordOneEl = document.getElementById('generated-password-1');
const generatedPasswordTwoEl = document.getElementById('generated-password-2');

// Define Password Length
let passwordLength = 15;

// Get Random Character
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

// Generate Password
function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter();
    }
    return randomPassword;
}
// Display Passwords
function getGeneratedPasswords() {
    generatedPasswordOneEl.textContent = generateRandomPassword();
    generatedPasswordTwoEl.textContent = generateRandomPassword();
}

