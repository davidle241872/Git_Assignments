let SweetHut = [
    {
        name:"David Le",
        favorite_color:"black",
        gender:"male",
        age: 28
    
    }, {
        name:"Tam Do",
        favorite_color:"pink",
        gender:"female",
        age: 23
    }, {
        name:"Trang Vo",
        favorite_color:"lavender",
        gender:"female",
        age: 24
    }, {
        name:"Cathy Ho",
        favorite_color:"Baby blue",
        gender:"female",
        age: 27
    }, {
        name:"Tony Vu",
        favorite_color:"red",
        gender:"male",
        age: 27
    }
]

function getName(users) {
    let i = 0;
    while(i < users.length) {
       // console.log(users);
        console.log(users[i].favorite_color);
        console.log(users[i].name);
        i++
    }
}

getName(SweetHut);
