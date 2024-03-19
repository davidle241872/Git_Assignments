
 //function getBirthdate() {

// }
//     //Does some here
// }

// // fetch(https://api.spotify.come/v1/artists/68KmkJeZGfwe10VaivBa2L)

// // Anonymous Function
// ()=> {
//     console.log("Anonymous function is running");
// }





fetch("https:randomuser.me/api/?results=20") //api for the get request
fetch("https://randomuser.me/api/?inc=name,phone,location")


// const users = [
//    {
//       gender: 'female',
//       name: [Object],
//       location: [Object],
//       email: 'vidyalaxmi.gugale@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '9277209352',
//       cell: '7255494222',
//       id: [Object],
//       picture: [Object],
//       nat: 'IN'
//     }
// ]



// Response.json()  converts the response
   // .then((response => response.json))
    // This .then is the second function called in the promise chain 
    // The value stored in the previous function is also passed as 
    // an argument to the next function even without a return statement 
    // data now holds the value of the response.json()
   // .then((data) => console.log(data));




.then(response => response.json())

// .then(data) => randomUser.firstName = (data.results[0].name.first);
 //let newResponse = reponse + "cat"
 //.then((data) => console.log(data.results[0].picture)); ( correct)

.then((data) => console.log(data));
//then((name) => console.log(name));




// .then((data) => console.log(data.results[0]));
// .then((data) => console.log(data.results[2].picture))
// .then((data) => console.log(data.results[2].phone))

// console.log(randomUser);
