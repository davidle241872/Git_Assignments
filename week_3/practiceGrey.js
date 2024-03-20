
let teamRed = ['David', 'Jessie', 'Ashley', 'Jordan']
let teamBlue = ['Gabe', 'Eman', 'Marcus', 'Justin']

console.log(teamRed);
 console.log(teamBlue);

//document.getElementById("checkStatusButton").addEventListener("click", function() {
   // let teamEliminated = isTeamEliminated(teamBlue);
    let teamEliminated = false;

const teamStatusElement = document.getElementById("teamStatus");

if(teamEliminated) {
    teamStatusElement.textContent = "The blue team has been eliminated.";
    teamStatusElement.classList.add("teamEliminated");
} else {
    teamStatusElement.textContent = "The blue team is still in the game.";
    teamStatusElement.classList.remove("teamEliminated"); 
    // remove - takes out the grey 
}
//});
// can define condition here to see if the team is eliminated
// function isTeamEliminated(team) {
//     return team.length === 0;
// }