const users = [
    {
        "name": "John Doe",
        "email": "john.doe@yahoo.com",
        "password": "password1",
        "address": "123 Main St",
        "zip_code": "12345",
        "phone_number": "123-456-7890"
    },
    {
        "name": "Jane Smith",
        "email": "jane.smith@yahoo.com",
        "password": "password2",
        "address": "456 Elm St",
        "zip_code": "23456",
        "phone_number": "234-567-8901"
    },
    {
        "name": "Michael Johnson",
        "email": "michael.johnson@yahoo.com",
        "password": "password3",
        "address": "789 Oak St",
        "zip_code": "34567",
        "phone_number": "345-678-9012"
    },
    {
    "name": "David Le",
        "email": "david.le872@yahoo.com",
        "password": "password4",
        "address": "123 Atl St",
        "zip_code": "30033",
        "phone_number": "000-000-9111"
        
    },
    {

        "name": "Monkey D. Luffy",
        "email": "lucy872@yahoo.com",
        "password": "password6",
        "address": "420 Go Merry",
        "zip_code": "31010",
        "phone_number": "404-102-1145"
    },
    {
        "name": "Zoro Roronoa",
        "email": "lostchild872@yahoo.com",
        "password": "password7",
        "address": "101 Lost St",
        "zip_code": "101010",
        "phone_number": "988-709-0101"
    },
    {
        "name": "Sanji Vinsmoke",
        "email": "chefkiss872@yahoo.com",
        "password": "password8",
        "address": "765 Baratie St",
        "zip_code": "31075",
        "phone_number": "759-084-1934"
    },
    {
        "name": "Usopp Sogeking",
        "email": "usopp.captain872@yahoo.com",
        "password": "password9",
        "address": "910 Giant St",
        "zip_code": "30098",
        "phone_number": "678-059-0087"
    },
    {
        "name": "Soul King",
        "email": "musiclife872@yahoo.com",
        "password": "password10",
        "address": "789 Music St",
        "zip_code": "30792",
        "phone_number": "780-800-8415"
    }
];

function testLogin() {
        const emailLog = document.getElementById("email").value;
        const passwordLog = document.getElementById("password").value;

 let loggedIn = false;
// .ForEach connects to all the value (one method of an array that connects all user,pass, etc)

// used === due to same value, same type essentially like one unique ID 
// => ( this is referring to Greater than or equal to)
// forEach() method calls a function for each element within the array [doesn't work for empty elements]
    users.forEach(user => {
        // &&(an Operator) is letting know it's a combination of two boolean to see if both expression return true 
        if (user.email === emailLog && user.password === passwordLog) {
            loggedIn = true;
            
        }
    });

    if (loggedIn) { 
        console.log("Logged in, SUGOIIIII");
    } else { alert ('Failed to log in bro')
       // console.log("Failed to log in");
    }

    

//     let popupLink = document.getElementById("popup-link");
//   let popupWindow = document.getElementById("popup-window");
//   let closeButton = document.getElementById("close-button");
   
//   popupLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     popupWindow.style.display = "block";
//   });
//   // Hide the pop-up window when the close button is clicked
//   closeButton.addEventListener("click", function() {
//     popupWindow.style.display = "none";
//   });
}


 
//   let popupLink = document.getElementById("popup-link");
//   let popupWindow = document.getElementById("popup-window");
//   let closeButton = document.getElementById("close-button");
   
//   popupLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     popupWindow.style.display = "block";
//   });
//   // Hide the pop-up window when the close button is clicked
//   closeButton.addEventListener("click", function() {
//     popupWindow.style.display = "none";
//   });
    
