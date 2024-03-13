teams = [
    {
      name: "Braves",
      city: "Atlanta", // Not really in Atlanta
      state: "GA",
      avgAttendance: 39401,
    },
    {
      name: "Reds",
      city: "Cincinatti",
      state: "OH",
      avgAttendance: 25164,
    },
    {
      name: "Yankees",
      city: "New York City",
      state: "NY",
      avgAttendance: 40862,
    },
    {
      name: "Red Sox",
      city: "Boston",
      state: "MA",
      avgAttendance: 32989,
    },
  ];
  
  const currentTeams = []; 
  // this will add the current team  
 // currentTeams.push(teams[i]);
  // adding the last team to the array
  currentTeams.push(teams[teams.length -1]);

                for (let i = 0; i < teams.length - 1; i++) {
                console.log("Current team: ", teams[i].name);
                console.log("Next team: ", teams[i + 1].name);
                if (teams[i].name < teams[i + 1].name) {
                console.log("Current teams name comes before the next team name");
                }else if(teams[i].name > teams[i +1].name) {
                {console.log("Next team name comes after current teams name");
                }
  //  } else if (teams[i+1].name) > teams[i +1].name) {
  //          console.log("Current team comes after the next team name")

            }
  }
