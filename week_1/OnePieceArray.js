let OnePiecePirates = [
{
    name:"Luffy",
    favorite_color:"red"
}, {
     name:"Zoro",
    favorite_color:"green"
}, {
    name:"Nami",
    favorite_color:"orange"
}
]



function getName(users) {
    let i = 0;
    while (i < users.length){
       // console.log(users)
       console.log(users[i].favorite_color);
       // console.log(users[i].favorite_color);
     //   console.log(users[i].name);
        i++
  }
}
    getName(OnePiecePirates);