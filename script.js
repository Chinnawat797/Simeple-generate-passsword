function generatePassword(){
    const length = parseInt(document.getElementById('length').value);
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";

    if(isNaN(length) || length < 4 || length > 32){
        document.getElementById('length').value = "";
        alert("Please enter a valid length (4-32).");
        return;
    }

    for(i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        document.getElementById('length').value = "";
        password += characters[randomIndex];
        
    }

    document.getElementById('display').value = password;
   
}


