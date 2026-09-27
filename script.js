// ========================================
// NFL FOR BEGINNERS - JAVASCRIPT
// ========================================

// Variables, constants, and data types
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
// CONDITIONALS
// ========================================

// Determine whether the number of teams is correct
if (convertedTeamCount === 32 && isProfessionalLeague === true) {
    console.log("The NFL currently has 32 professional teams.");
} else {
    console.log("The NFL team information needs to be checked.");
}


// ========================================
// FUNCTION
// ========================================

// Calculate how many points a team would have
// from touchdowns and field goals.
function calculatePoints(touchdowns, fieldGoals) {
    const points = (touchdowns * 7) + (fieldGoals * 3);
    return points;
}

// Call the function with two different sets of arguments
const firstScore = calculatePoints(3, 2);
const secondScore = calculatePoints(5, 1);

console.log("First example score:", firstScore);
console.log("Second example score:", secondScore);


// ========================================
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
// FINAL DEBUGGING MESSAGE
// ========================================

console.log("NFL for Beginners JavaScript loaded successfully.");