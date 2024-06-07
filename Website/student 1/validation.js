document.getElementById("submitButton").addEventListener('click',function(){
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const occupation = document.getElementById('occupation').value;
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    const email = document.getElementById('email').value;

if (!name || !age || !occupation || !email) {
        alert('Fields cannot be blank.');
        event.preventDefault();
    } else if (!genderMale && !genderFemale) {
        alert('Please select a gender.');
        event.preventDefault();
    }  else if (!isValidName(name)) {
        alert('Name cannot contain numerical values.'); 
        event.preventDefault();  
    } else if (!isValidEmail(email)) { // Highlighted change in yellow
        alert('Invalid email address ending format.'); // Highlighted change in yellow
        event.preventDefault();  
    } else {
        location.href = 'genres.html';
        alert("Dear " + name +  ", Thank you for using MovieLens,"+
         "The recommended results will be shown in a while")

    }
});


function isValidName(name) {
    return !/\d/.test(name);
}
function isValidEmail(email) {
    return email.endsWith("mail.com"); // Check if the email ends with "mail.com"
}


function redirect(){
    
    
    const price = document.getElementById("price").value
    if(price==""){
        alert("Field cannot be blank")
    }
    else{

        location.href = 'gallery.html';
        alert("Opening Gallery Page")
    }
}
function redirect() {
    // Get the price input element
    var priceInput = document.getElementById("price");

    // Get the entered price value
    var priceValue = priceInput.value.trim();

    // Check if the entered price is numerical
    if (!/^\d+(\.\d+)?$/.test(priceValue)) {
        // If the entered value is not numerical, show an error message
        alert("Price can only be numerical.");
        // Prevent form submission
        return false;
    }

    // Convert the priceValue to a floating-point number
    var priceFloat = parseFloat(priceValue);

    // Check if the entered price is a positive number
    if (isNaN(priceFloat) || priceFloat <= 0) {
        // If the entered value is not a positive number, show an error message
        alert("Please enter a valid positive price.");
        // Prevent form submission
        return false;
    } else {
        // If the entered value is valid, navigate to the next page
        window.location.href = "gallery.html"; // Replace 'next_page.html' with the URL of your next page
        // Prevent form submission (optional, as we're navigating away from the current page)
        return false;
    }
}

