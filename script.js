// ========================================
// NFL FOR BEGINNERS - JAVASCRIPT
// ========================================


// ========================================
// HOMEWORK 5 - VARIABLES AND DATA TYPES
// ========================================

const websiteName = "NFL for Beginners";
const totalTeams = 32;
const isProfessionalLeague = true;

let favoriteTeam = "Kansas City Chiefs";

const teamCountText = "32";
const convertedTeamCount = Number(teamCountText);

console.log("Website:", websiteName);
console.log("Total NFL teams:", totalTeams);
console.log("Professional league:", isProfessionalLeague);
console.log("Favorite team:", favoriteTeam);

console.log("Type of websiteName:", typeof websiteName);
console.log("Type of totalTeams:", typeof totalTeams);
console.log("Type of isProfessionalLeague:", typeof isProfessionalLeague);
console.log("Converted team count:", convertedTeamCount);


// ========================================
// HOMEWORK 5 - CONDITIONAL
// ========================================

if (convertedTeamCount === 32 && isProfessionalLeague === true) {
    console.log("The NFL currently has 32 professional teams.");
} else {
    console.log("The NFL team information needs to be checked.");
}


// ========================================
// HOMEWORK 5 - FUNCTION
// ========================================

function calculatePoints(touchdowns, fieldGoals) {
    const points = (touchdowns * 7) + (fieldGoals * 3);
    return points;
}

const firstScore = calculatePoints(3, 2);
const secondScore = calculatePoints(5, 1);

console.log("First example score:", firstScore);
console.log("Second example score:", secondScore);


// ========================================
// HOMEWORK 5 - ARRAY
// ========================================

const nflTeams = [
    "Kansas City Chiefs",
    "Buffalo Bills",
    "Dallas Cowboys",
    "Green Bay Packers"
];

console.log("First team in the array:", nflTeams[0]);

console.log("NFL teams in the example list:");

for (let i = 0; i < nflTeams.length; i++) {
    console.log("Team " + (i + 1) + ":", nflTeams[i]);
}


// ========================================
// HOMEWORK 5 - OBJECT
// ========================================

const quarterback = {
    position: "Quarterback",
    abbreviation: "QB",
    responsibility: "Pass the ball and lead the offense",
    exampleTeam: "Kansas City Chiefs"
};

console.log("Position:", quarterback.position);
console.log("Abbreviation:", quarterback.abbreviation);
console.log("Responsibility:", quarterback.responsibility);
console.log("Example team:", quarterback.exampleTeam);


// ========================================
// HOMEWORK 6 - SELECT PAGE ELEMENTS
// ========================================

const nflFact = document.querySelector("#nfl-fact");
const factButton = document.querySelector("#fact-button");
const favoriteTeamInput = document.querySelector("#favorite-team-input");
const teamMessage = document.querySelector("#team-message");
const newTeamInput = document.querySelector("#new-team-input");
const addTeamButton = document.querySelector("#add-team-button");
const customTeamList = document.querySelector("#custom-team-list");

console.log("NFL page elements selected successfully.");


// ========================================
// HOMEWORK 6 - INTERACTIVE FACTS
// ========================================

const interactiveNFLFacts = [
    "An NFL touchdown is worth 6 points before the extra-point attempt.",
    "A standard NFL game has four quarters.",
    "A field goal is worth 3 points.",
    "Each NFL team plays a 17-game regular season."
];

factButton.addEventListener("click", function () {
    let factIndex = Number(nflFact.getAttribute("data-fact"));

    nflFact.textContent = interactiveNFLFacts[factIndex];

    nflFact.classList.add("highlighted");

    console.log("NFL fact displayed:", interactiveNFLFacts[factIndex]);

    factIndex = (factIndex + 1) % interactiveNFLFacts.length;

    nflFact.setAttribute("data-fact", String(factIndex));
});


// ========================================
// HOMEWORK 6 - FAVORITE TEAM INPUT
// ========================================

favoriteTeamInput.addEventListener("input", function () {
    const teamName = favoriteTeamInput.value.trim();

    if (teamName !== "") {
        teamMessage.textContent = "Your selected team is: " + teamName;
        teamMessage.classList.add("highlighted");
    } else {
        teamMessage.textContent = "Your team message will appear here.";
        teamMessage.classList.remove("highlighted");
    }

    console.log("Favorite team input updated:", teamName);
});


// ========================================
// HOMEWORK 6 - ADD A TEAM DYNAMICALLY
// ========================================

addTeamButton.addEventListener("click", function () {
    const teamName = newTeamInput.value.trim();

    if (teamName === "") {
        teamMessage.textContent = "Please enter a team name first.";
        teamMessage.classList.add("highlighted");

        console.log("No team was entered.");
        return;
    }

    const newTeamItem = document.createElement("li");

    newTeamItem.textContent = teamName;
    newTeamItem.classList.add("new-team");
    newTeamItem.setAttribute("data-team", teamName);

    customTeamList.append(newTeamItem);

    teamMessage.textContent = teamName + " was added to your team list!";
    teamMessage.classList.add("highlighted");

    newTeamInput.value = "";

    console.log("New NFL team added:", newTeamItem.getAttribute("data-team"));
});


// ========================================
// HOMEWORK 7 - SELECT THE FORM ELEMENTS
// ========================================

const fanForm = document.querySelector("#fan-registration-form");
const fanNameInput = document.querySelector("#fan-name");
const fanEmailInput = document.querySelector("#fan-email");
const fanAgeInput = document.querySelector("#fan-age");
const fanTeamInput = document.querySelector("#fan-team");
const fanCommentsInput = document.querySelector("#fan-comments");
const fanAgreementInput = document.querySelector("#fan-agreement");

const formErrors = document.querySelector("#form-errors");
const formSuccess = document.querySelector("#form-success");

console.log("Fan registration form elements selected.");


// ========================================
// HOMEWORK 7 - FORM SUBMISSION AND VALIDATION
// ========================================

fanForm.addEventListener("submit", function (event) {
    // Prevent the browser from reloading the page.
    event.preventDefault();

    // Clear previous feedback.
    formErrors.textContent = "";
    formSuccess.textContent = "";
    formSuccess.hidden = true;

    // Read and clean the submitted values.
    const fanName = fanNameInput.value.trim();
    const fanEmail = fanEmailInput.value.trim();
    const fanAge = Number(fanAgeInput.value);
    const selectedTeam = fanTeamInput.value;
    const contentPreference = fanForm.querySelector(
        'input[name="contentPreference"]:checked'
    );
    const fanComments = fanCommentsInput.value.trim();
    const fanAgreement = fanAgreementInput.checked;

    const errors = [];

    // Validation rule 1: required name and minimum name length.
    if (fanName === "") {
        errors.push("Please enter your name.");
    } else if (fanName.length < 2 || fanName.length > 60) {
        errors.push("Your name must be between 2 and 60 characters.");
    }

    // Validation rule 2: required and correctly formatted email.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fanEmail === "") {
        errors.push("Please enter your email address.");
    } else if (!emailPattern.test(fanEmail)) {
        errors.push("Please enter a valid email address.");
    }

    // Validation rule 3: age must be a number from 13 to 120.
    if (
        fanAgeInput.value.trim() === "" ||
        !Number.isFinite(fanAge) ||
        fanAge < 13 ||
        fanAge > 120
    ) {
        errors.push("Age must be a number between 13 and 120.");
    }

    // Validation rule 4: a favorite team must be selected.
    if (selectedTeam === "") {
        errors.push("Please select your favorite NFL team.");
    }

    // Validation rule 5: the user must choose a content preference.
    if (contentPreference === null) {
        errors.push("Please select your preferred content type.");
    }

    // Validation rule 6: comments must contain at least 10 characters.
    if (fanComments.length < 10) {
        errors.push(
            "Please enter at least 10 characters about what you want to learn."
        );
    } else if (fanComments.length > 500) {
        errors.push("Your comments cannot exceed 500 characters.");
    }

    // Validation rule 7: require confirmation.
    if (!fanAgreement) {
        errors.push("Please confirm that your information is correct.");
    }

    // Display validation errors on the page.
    if (errors.length > 0) {
        formErrors.textContent = errors.join(" ");

        console.log("Form validation failed:", errors);

        return;
    }

    // Create a clean object when every validation rule passes.
    const fanPayload = {
        name: fanName,
        email: fanEmail,
        age: fanAge,
        favoriteTeam: selectedTeam,
        contentPreference: contentPreference.value,
        comments: fanComments,
        informationConfirmed: fanAgreement
    };

    // Print the object for the assignment reviewer.
    console.log("Fan registration payload:", fanPayload);

    // Display a success message on the page.
    formSuccess.textContent =
        "Thank you, " + fanPayload.name +
        "! Your fan registration was completed successfully. " +
        "Your favorite team is the " + fanPayload.favoriteTeam +
        ", and your preferred content is " +
        fanPayload.contentPreference + ".";

    formSuccess.hidden = false;

    // Move keyboard focus to the success message.
    formSuccess.focus();

    console.log("Fan registration completed successfully.");
});


// ========================================
// HOMEWORK 7 - CLEAR OLD ERRORS AS USERS EDIT
// ========================================

fanForm.addEventListener("input", function () {
    formErrors.textContent = "";
    formSuccess.textContent = "";
    formSuccess.hidden = true;
});

fanForm.addEventListener("change", function () {
    formErrors.textContent = "";
    formSuccess.textContent = "";
    formSuccess.hidden = true;
});


// ========================================
// FINAL DEBUGGING MESSAGE
// ========================================

console.log("NFL for Beginners JavaScript loaded successfully.");
console.log("NFL DOM interactions are ready.");
console.log("NFL fan registration form is ready.");