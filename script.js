// ========================================
// NFL FOR BEGINNERS - JAVASCRIPT
// ========================================


// ========================================
// HOMEWORK 5
// VARIABLES, CONSTANTS, AND DATA TYPES
// ========================================

const websiteName = "NFL for Beginners";

const totalTeams = 32;

const isProfessionalLeague = true;

let favoriteTeam = "Kansas City Chiefs";


// Convert a string into a number
const teamCountText = "32";

const convertedTeamCount = Number(teamCountText);


// Display data types in the console
console.log("Website:", websiteName);

console.log("Total NFL teams:", totalTeams);

console.log("Professional league:", isProfessionalLeague);

console.log("Favorite team:", favoriteTeam);

console.log("Type of websiteName:", typeof websiteName);

console.log("Type of totalTeams:", typeof totalTeams);

console.log("Type of isProfessionalLeague:", typeof isProfessionalLeague);

console.log("Converted team count:", convertedTeamCount);


// ========================================
// HOMEWORK 5
// CONDITIONAL
// ========================================

if (convertedTeamCount === 32 && isProfessionalLeague === true) {

    console.log("The NFL currently has 32 professional teams.");

} else {

    console.log("The NFL team information needs to be checked.");

}


// ========================================
// HOMEWORK 5
// FUNCTION
// ========================================


// Calculate a football score using touchdowns
// and field goals.
function calculatePoints(touchdowns, fieldGoals) {

    const points = (touchdowns * 7) + (fieldGoals * 3);

    return points;
}


// Call the function with the first set of arguments
const firstScore = calculatePoints(3, 2);


// Call the function with the second set of arguments
const secondScore = calculatePoints(5, 1);


console.log("First example score:", firstScore);

console.log("Second example score:", secondScore);


// ========================================
// HOMEWORK 5
// ARRAY
// ========================================


// Store several NFL teams in an array
const nflTeams = [
    "Kansas City Chiefs",
    "Buffalo Bills",
    "Dallas Cowboys",
    "Green Bay Packers"
];


// Access an individual array element
console.log("First team in the array:", nflTeams[0]);


// Loop through the array
console.log("NFL teams in the example list:");

for (let i = 0; i < nflTeams.length; i++) {

    console.log("Team " + (i + 1) + ":", nflTeams[i]);

}


// ========================================
// HOMEWORK 5
// OBJECT
// ========================================


// Store information about a football position
const quarterback = {

    position: "Quarterback",

    abbreviation: "QB",

    responsibility: "Pass the ball and lead the offense",

    exampleTeam: "Kansas City Chiefs"

};


// Access object properties
console.log("Position:", quarterback.position);

console.log("Abbreviation:", quarterback.abbreviation);

console.log("Responsibility:", quarterback.responsibility);

console.log("Example team:", quarterback.exampleTeam);


// ========================================
// HOMEWORK 6
// SELECT PAGE ELEMENTS
// ========================================


// Select the NFL fact paragraph
const nflFact = document.querySelector("#nfl-fact");


// Select the NFL fact button
const factButton = document.querySelector("#fact-button");


// Select the favorite team input
const favoriteTeamInput = document.querySelector("#favorite-team-input");


// Select the team message paragraph
const teamMessage = document.querySelector("#team-message");


// Select the new team input
const newTeamInput = document.querySelector("#new-team-input");


// Select the add team button
const addTeamButton = document.querySelector("#add-team-button");


// Select the custom team list
const customTeamList = document.querySelector("#custom-team-list");


console.log("NFL page elements selected successfully.");


// ========================================
// HOMEWORK 6
// ARRAY OF INTERACTIVE FACTS
// ========================================


const interactiveNFLFacts = [

    "An NFL touchdown is worth 6 points before the extra-point attempt.",

    "A standard NFL game has four quarters.",

    "A field goal is worth 3 points.",

    "Each NFL team plays a 17-game regular season."

];


// ========================================
// HOMEWORK 6
// CLICK EVENT - NFL FACT BUTTON
// ========================================


factButton.addEventListener("click", function () {

    // Read the current fact number from the data attribute
    let factIndex = Number(
        nflFact.getAttribute("data-fact")
    );


    // Change the visible text on the page
    nflFact.textContent = interactiveNFLFacts[factIndex];


    // Add the highlighted CSS state
    nflFact.classList.add("highlighted");


    // Move to the next fact
    factIndex = (factIndex + 1) % interactiveNFLFacts.length;


    // Update the data attribute
    nflFact.setAttribute(
        "data-fact",
        String(factIndex)
    );


    console.log(
        "NFL fact displayed:",
        interactiveNFLFacts[factIndex === 0
            ? interactiveNFLFacts.length - 1
            : factIndex - 1]
    );

});


// ========================================
// HOMEWORK 6
// INPUT EVENT - FAVORITE TEAM
// ========================================


favoriteTeamInput.addEventListener("input", function () {

    // Get the text entered by the user
    const teamName = favoriteTeamInput.value.trim();


    // Check whether the user entered a team
    if (teamName !== "") {

        // Change visible page text
        teamMessage.textContent =
            "Your selected team is: " + teamName;


        // Add the highlighted state
        teamMessage.classList.add("highlighted");


    } else {

        // Restore the original message
        teamMessage.textContent =
            "Your team message will appear here.";


        // Remove the highlighted state
        teamMessage.classList.remove("highlighted");

    }


    console.log(
        "Favorite team input updated:",
        teamName
    );

});


// ========================================
// HOMEWORK 6
// CLICK EVENT - ADD NEW TEAM
// ========================================


addTeamButton.addEventListener("click", function () {

    // Get the team name entered by the user
    const teamName = newTeamInput.value.trim();


    // Make sure the user entered something
    if (teamName === "") {

        teamMessage.textContent =
            "Please enter a team name first.";


        teamMessage.classList.add("highlighted");


        console.log("No team was entered.");


        return;

    }


    // Create a new list item
    const newTeamItem = document.createElement("li");


    // Set the visible text
    newTeamItem.textContent = teamName;


    // Add a CSS class to the new element
    newTeamItem.classList.add("new-team");


    // Store the team name in a data attribute
    newTeamItem.setAttribute(
        "data-team",
        teamName
    );


    // Add the new list item to the page
    customTeamList.append(newTeamItem);


    // Update the message on the page
    teamMessage.textContent =
        teamName + " was added to your team list!";


    // Highlight the message
    teamMessage.classList.add("highlighted");


    // Clear the input box
    newTeamInput.value = "";


    // Read the data attribute back from the new element
    const addedTeam =
        newTeamItem.getAttribute("data-team");


    console.log(
        "New NFL team added:",
        addedTeam
    );

});


// ========================================
// HOMEWORK 6
// FINAL DEBUGGING MESSAGE
// ========================================


console.log(
    "NFL for Beginners JavaScript loaded successfully."
);

console.log(
    "NFL DOM interactions are ready."
);