function calculateTotal() {
    // Get the quantity and price of each selected product
        var quantities = [];
        var prices = [];
        var total = 0;

        // Product 1
        var quantity1 = parseInt(document.getElementById("quantity1").value);
        var price1 = 250; // Assuming price is $10 per item
        quantities.push(quantity1);
        prices.push(price1 * quantity1);

        // Product 2
        var quantity2 = parseInt(document.getElementById("quantity2").value);
        var price2 = 230; // Assuming price is $15 per item
        quantities.push(quantity2);
        prices.push(price2 * quantity2);

        // Product 3
        var quantity3 = parseInt(document.getElementById("quantity3").value);
        var price3 = 20; // Assuming price is $20 per item
        quantities.push(quantity3);
        prices.push(price3 * quantity3);

        // Product 4
        var quantity4 = parseInt(document.getElementById("quantity4").value);
        var price4 = 300; // Assuming price is $25 per item
        quantities.push(quantity4);
        prices.push(price4 * quantity4);

        // Product 5
        var quantity5 = parseInt(document.getElementById("quantity5").value);
        var price5 = 75; // Assuming price is $30 per item
        quantities.push(quantity5);
        prices.push(price5 * quantity5);

        // Product 6
        var quantity6 = parseInt(document.getElementById("quantity6").value);
        var price6 = 55; // Assuming price is $30 per item
        quantities.push(quantity6);
        prices.push(price6* quantity6);


        // Calculate the total price
        for (var i = 0; i < quantities.length; i++) {
            total += prices[i];
        }

        // Display the total price
        document.getElementById("total").innerHTML = "Total Price: $" + total;
    }
    function isValidMobileNumber(mobileNumber) {
        // Regular expression to match 10 digits
        var mobileNumberRegex = /^\d{10}$/;
        if (!mobileNumberRegex.test(mobileNumber)) {
            return "Please enter a valid 10-digit mobile number.";
        }
        return "";
    }

    // Function to validate the quantity
    function isValidQuantity(quantity) {
        // Check if the quantity is a non-negative integer
        var parsedQuantity = parseInt(quantity);
        if (isNaN(parsedQuantity) || parsedQuantity < 0 || !Number.isInteger(parsedQuantity)) {
            return "Please enter a valid non-negative integer for the quantity.";
        }
        return "";
    }
    function isValidCardName(cardName) {
        // For example, check if the card name is not empty and contains only letters and spaces
        var cardNameRegex = /^[A-Za-z ]+$/;
        if (!cardNameRegex.test(cardName)) {
            return "Please enter a valid card name containing only letters and spaces.";
        }
        return "";
    }
    function isValidCardNumber(cardNumber) {
        // Implement card number validation logic here
        // For this example, let's assume the card number must be exactly 16 digits long
        var cardNumberRegex = /^\d{16}$/;
        if (!cardNumberRegex.test(cardNumber)) {
            return "Please enter a valid 16-digit card number.";
        }
        return "";
    }
    function isValidExpYear(expYear) {
        // Implement expiration year validation logic here
        // For example, check if the year is a valid future year (not in the past)
        var currentYear = new Date().getFullYear();
        var enteredYear = parseInt(expYear);
    
        if (isNaN(enteredYear) || enteredYear < currentYear) {
            return "Please enter a valid future expiration year.";
        }
        return "";
    }
    
    
    

    

    function validateForm() {
        var isValid = true;
        var errorMessage = "";
    
        
        var mobile_number = document.getElementById("mobile_number").value;
        var mobileNumberErrorMessage = isValidMobileNumber(mobile_number);
        if (mobileNumberErrorMessage) {
            errorMessage = mobileNumberErrorMessage;
            isValid = false;
        }
         var cardName =document.getElementById("cardName").value;
         var cardNameErrorMessage=isValidCardName(cardName);
         if(cardNameErrorMessage){
            errorMessage=cardNameErrorMessage;
            isValid=false;
         }
         var cardNumber =document.getElementById("cardNumber").value;
         var cardNumberErrorMessage=isValidCardNumber(cardNumber);
         if(cardNumberErrorMessage){
            errorMessage=cardNumberErrorMessage;
            isValid=false;
         }
         var expYear =document.getElementById("expYear").value;
         var expYearErrorMessage=isValidExpYear(expYear);
         if(expYearErrorMessage){
            errorMessage=expYearErrorMessage;
            isValid=false;
         }
    
    
        // Additional quantity validation
        var quantity1 = parseInt(document.getElementById("quantity1").value);
        var quantity2 = parseInt(document.getElementById("quantity2").value);
        var quantity3 = parseInt(document.getElementById("quantity3").value);
        var quantity4 = parseInt(document.getElementById("quantity4").value);
        var quantity5 = parseInt(document.getElementById("quantity5").value);
        var quantity6 = parseInt(document.getElementById("quantity6").value);
    
        var quantityErrorMessages = [
            isValidQuantity(quantity1),
            isValidQuantity(quantity2),
            isValidQuantity(quantity3),
            isValidQuantity(quantity4),
            isValidQuantity(quantity5),
            isValidQuantity(quantity6)
        ];
    
        for (var i = 0; i < quantityErrorMessages.length; i++) {
            if (quantityErrorMessages[i]) {
                errorMessage = quantityErrorMessages[i];
                isValid = false;
                break;
            }
        }
    
        // Check for all fields being null
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var cardName = document.getElementById("cardName").value;
        var cardNumber =document.getElementById("cardNumber").value;
        var expYear = document.getElementById("expYear").value;
        var addressOptional = document.getElementById("addressOptional").value;
    
        if (
            name === "" &&
            mobile_number === "" &&
            address === "" &&
            cardName === "" &&
            cardNumber === "" &&
            expYear === "" &&
            addressOptional === "" &&
            (quantity1 + quantity2 + quantity3 + quantity4 + quantity5 + quantity6) === 0
        ) {
            errorMessage = "Please fill in all the required fields and select at least one product.";
            isValid = false;
        } else {
            // If there are non-null values, check for individual errors
            if (name === ""){
                errorMessage = "Please enter your name.";
                isValid = false;
            }
            if(mobile_number===""){
                errorMessage="Please enter a mobile number";
                isValid=false;
            }
            if (address=== ""){
                errorMessage="Please enter the address";
                isValid=false;
            }
            
            if (cardName === "") {
                errorMessage = "Please enter the card name.";
                isValid = false;
            }
            if (cardNumber === "") {
                errorMessage = "Please enter the card number.";
                isValid = false;
            }
            if (expYear === "") {
                errorMessage = "Please enter the expiration year.";
                isValid = false;
            }
        
            if ((quantity1 + quantity2 + quantity3 + quantity4 + quantity5 + quantity6) === 0) {
                errorMessage = "Select at least one product!";
                isValid = false;
            }
        }
    
        if (!isValid) {
            // Display the error message to the user
            alert(errorMessage);
        }
    
        return isValid;
    }
    
        
        function showOrderSummary() {
            var isValidForm = validateForm();
            if (!isValidForm) {
                // If there are validation errors, do not proceed to display the order summary
                return;
            }
            var name = document.getElementById("name").value;
            var mobile_number = document.getElementById("mobile_number").value;
            var address = document.getElementById("address").value;
            var cardName = document.getElementById("cardName").value; 
            var cardNumber= document.getElementById("cardNumber").value;
            var expYear = document.getElementById("expYear").value;
            var addressOptional = document.getElementById("addressOptional").value;
        
            var quantity1 = parseInt(document.getElementById("quantity1").value);
            var quantity2 = parseInt(document.getElementById("quantity2").value);
            var quantity3 = parseInt(document.getElementById("quantity3").value);
            var quantity4 = parseInt(document.getElementById("quantity4").value);
            var quantity5 = parseInt(document.getElementById("quantity5").value);
            var quantity6 = parseInt(document.getElementById("quantity6").value);
        
            
            var price1 = 250; 
            var price2 = 230; 
            var price3 = 20; 
            var price4 = 300; 
            var price5 = 75; 
            var price6 = 55; 

            var total1 = price1 * quantity1;
            var total2 = price2 * quantity2;
            var total3 = price3 * quantity3;
            var total4 = price4 * quantity4;
            var total5 = price5 * quantity5;
            var total6 = price6 * quantity6;

            var total = total1 + total2 + total3 + total4 + total5 + total6;

            var summary = "Dear " + name + ", you have ordered: \n\n";

            if (quantity1 > 0) {
                summary += quantity1 + " Marshall Middleton Blutooth Speaker at a cost of $" + total1 + "\n";
            }
            if (quantity2 > 0) {
                summary += quantity2 + " SHURE MV7 Podcast Microphone at a cost of $" + total2 + "\n";
            }
            if (quantity3 > 0) {
                summary += quantity3 + " Standard Shape Tortex Guitar Picks .60mm Gauge - Orange (12-pack) at a cost of $" + total3 + "\n";
            }
            if (quantity4 > 0) {
                summary += quantity4 + " Hercules Stands BS200BPLUS EZ Grip Symphony Stand at a cost of $" + total4 + "\n";
            }
            if (quantity5 > 0) {
                summary += quantity5 + " MPK Midi Keyboard at a cost of $" + total5 + "\n";
            }
            if (quantity6 > 0) {
                summary += quantity6 + " CAHAYA Classical and Accoustic Guitar Case at a cost of $" + total6 + "\n";
            }

            summary += "\nYour total bill is $" + total + ".";

            alert(summary);
        }

        function changeFontSize(type) {
            let selectors = [".detailStyle", ".storeStyle", "label", ".productTitle", ".productPrice","#name", "#mobile_number", 
            "#address","#cardName","#cardNumber","#expYear","#addressOptional", "#total" ];
            if (type === "reset") {
                selectors.forEach(selector => {
                    let elements = document.querySelectorAll(selector);
        
                    elements.forEach(element => {
                        element.style.fontSize = ""; 
                    });
                });
            } else {
            selectors.forEach(selectors => {
                let elements = document.querySelectorAll(selectors);
        
                elements.forEach(element => {
                    let fontSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
                    fontSize = parseFloat(fontSize);
        
                    if (type === "increase") {
                        element.style.fontSize = (fontSize + 5) + "px";
                    } else {
                        element.style.fontSize = (fontSize - 5) + "px";
                    }
                });
            });
            }    }   
        