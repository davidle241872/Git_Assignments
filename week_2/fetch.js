
// function getBirthdate() {
//     //Does some here
// }

// // fetch(https://api.spotify.come/v1/artists/68KmkJeZGfwe10VaivBa2L)

// // Anonymous Function
// ()=> {
//     console.log("Anonymous function is running");
// }

let randomUser= {};

fetch("https:randomuser.me/api/?results=5") //api for the get request

// Response.json()  converts the response
   // .then((response => response.json))
    // This .then is the second function called in the promise chain 
    // The value stored in the previous function is also passed as 
    // an argument to the next function even without a return statement 
    // data now holds the value of the response.json()
   // .then((data) => console.log(data));




.then(response => response.json())

// .then(data) => randomUser.firstName = (data.results[0].name.first);
// let newResponse = reponse + "cat"
.then((data) => console.log(data));

// console.log(randomUser);


// Array to hold user information
var userArray = [];

// Iterate over the users array
for (var i = 0; i < users.length; i++) {
    var user = users[i];
    
    // Splitting the full name into first name and last name
    var fullName = user.name.split(' ');
    var firstName = fullName[0];
    var lastName = fullName.length > 1 ? fullName[1] : '';

    // Constructing the user object with required fields
    var newUser = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: user.phone_number,
        address: user.address,
        photo: 'path/to/photo/' + user.email + '.jpg' // Assuming photos are named based on email
    };

    // Adding the user object to the userArray
    userArray.push(newUser);
}

// Displaying the userArray
console.log(userArray);