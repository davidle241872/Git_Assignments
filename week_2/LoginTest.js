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
    }
    
];

function testLogin() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    let loggedIn = false;
// .ForEach connects to all the value (one method of an array that connects all user,pass, etc)

// used === due to same value, same type essentially like one unique ID 
    users.forEach(user => {
        if (user.email === emailInput && user.password === passwordInput) {
            loggedIn = true;
        }
    });

    if (loggedIn) {
        console.log("Logged in");
    } else {
        console.log("Failed to log in");
    }
}
