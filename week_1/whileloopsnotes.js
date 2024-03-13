// let bool = [true, false, false, true, true, true, false];
// // there is 7 index
// let i = 0;
// while(i < bool.length) {
//     if(bool[i] ===true)
//     console.log(bool[i]);
//     i++;
    
// }


let userAccounts = [
{
    
    name: "David Le",
    birthday: "10/07/1974",
    email: "davidle872@yahoo.com"
}, {
    name: "Jessie Hoang",
    birthday: "10/07/1986",
    email: "jessiele872@yahoo.com"
}, {
    name: "Justin Le",
    birthday: "10/07/2004",
    email: "justinle872@yahoo.com"

}, {  name: "Jerry Le",
    birthday: "10/07/1999",
    email: "jerryle872@yahoo.com"
}
]

function getBirthDates(users) {
    let i = 0;
    while(i < users.length) {
   let d = new Date(users[i].birthday);
   // let nextDate = new Date(users[i].birthday)
  // users[i].id = i + 1;
  // users[i].id = Math.cell(Math.random()) * 1000000); - this would work random on all 6 digits 
      users[i].id = 1000000+Math.ceil(Math.random() * 900000);
        console.log(users);
   i;
   console.log(users);
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let date= month + "/" + day + "/" + year;
        console.log(date);
        if(year<= 1989) {
            console.log(users[i].name + " can be president!");
        }else
            console.log(users[i].name + " you can't be the president");
        i++;
       // if(d < nextDate) {
       //     console.log(true);
      //  } else{
      //      console.log(false);
        }
    
  //  }
}
      getBirthDates(userAccounts);
   // const d= new Date ("10/07/1995");
  //  let day = d.getDate();
   // let d = new Date(userAccounts[0].birthday)
    //    console.log(d)
    
   // let bd = Date.parse("October 7, 1995");

    //b = ("1995-10-07", "1996-10-07", "1997-10-07", "1998-10-07")
    // birthday.getBirthDates(x, format = "%m/%d/%Y")

   // userAccounts = getBirthDates.birthday<("1995-10-07");
   
   



 //  userAccounts= getBirthDates.push("October 7th, 1995");

  
    


    //birthday;
   // try {
        //dateFormat formatter ;
      //  formatter = new SimpleDateFormat("dd-MMM-yyyy");
      //  birthday = (Date)formatter.parse(getBirthDates);
    

    // i++; - increments should after outside of the if statements and console
// === means same type & same value

/* 
Use your favorite browser to figure out how to convert the current list of user birthdays from a string to a date.

Determine if you can compare dates using <, >, == similar to any regular number
*/