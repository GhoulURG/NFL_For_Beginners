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
// HOMEWORK 7 - FAN REGISTRATION FORM
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

fanForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formErrors.textContent = "";
    formSuccess.textContent = "";
    formSuccess.hidden = true;

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

    if (fanName === "") {
        errors.push("Please enter your name.");
    } else if (fanName.length < 2 || fanName.length > 60) {
        errors.push("Your name must be between 2 and 60 characters.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fanEmail === "") {
        errors.push("Please enter your email address.");
    } else if (!emailPattern.test(fanEmail)) {
        errors.push("Please enter a valid email address.");
    }

    if (
        fanAgeInput.value.trim() === "" ||
        !Number.isFinite(fanAge) ||
        fanAge < 13 ||
        fanAge > 120
    ) {
        errors.push("Age must be a number between 13 and 120.");
    }

    if (selectedTeam === "") {
        errors.push("Please select your favorite NFL team.");
    }

    if (contentPreference === null) {
        errors.push("Please select your preferred content type.");
    }

    if (fanComments.length < 10) {
        errors.push(
            "Please enter at least 10 characters about what you want to learn."
        );
    } else if (fanComments.length > 500) {
        errors.push("Your comments cannot exceed 500 characters.");
    }

    if (!fanAgreement) {
        errors.push("Please confirm that your information is correct.");
    }

    if (errors.length > 0) {
        formErrors.textContent = errors.join(" ");
        console.log("Form validation failed:", errors);
        return;
    }

    const fanPayload = {
        name: fanName,
        email: fanEmail,
        age: fanAge,
        favoriteTeam: selectedTeam,
        contentPreference: contentPreference.value,
        comments: fanComments,
        informationConfirmed: fanAgreement
    };

    console.log("Fan registration payload:", fanPayload);

    formSuccess.textContent =
        "Thank you, " + fanPayload.name +
        "! Your fan registration was completed successfully. " +
        "Your favorite team is the " + fanPayload.favoriteTeam +
        ", and your preferred content is " +
        fanPayload.contentPreference + ".";

    formSuccess.hidden = false;
    formSuccess.focus();

    console.log("Fan registration completed successfully.");
});

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
// HOMEWORK 8 - API ELEMENTS
// ========================================

const postsContainer = document.querySelector("#posts-container");
const postsStatus = document.querySelector("#posts-status");
const loadPostsButton = document.querySelector("#load-posts-button");

const apiPostForm = document.querySelector("#api-post-form");
const apiPostTitle = document.querySelector("#api-post-title");
const apiPostBody = document.querySelector("#api-post-body");
const submitPostButton = document.querySelector("#submit-post-button");

const postStatus = document.querySelector("#post-status");
const createdPostContainer = document.querySelector(
    "#created-post-container"
);

const postsURL = "https://jsonplaceholder.typicode.com/posts";

console.log("API explorer elements selected.");


// ========================================
// HOMEWORK 8 - DISPLAY API STATUS
// ========================================

function displayAPIStatus(element, message, state) {
    element.textContent = message;

    element.classList.remove(
        "api-loading",
        "api-error",
        "api-success"
    );

    if (state) {
        element.classList.add("api-" + state);
    }
}


// ========================================
// HOMEWORK 8 - RENDER ONE POST
// ========================================

function createPostCard(post) {
    const article = document.createElement("article");
    article.classList.add("api-post-card");

    const postId = document.createElement("p");
    postId.classList.add("api-post-id");
    postId.textContent = "Post ID: " + post.id;

    const title = document.createElement("h3");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    article.append(postId, title, body);

    return article;
}


// ========================================
// HOMEWORK 8 - GET REQUEST
// ========================================

async function loadPosts() {
    displayAPIStatus(
        postsStatus,
        "Loading posts from JSONPlaceholder...",
        "loading"
    );

    loadPostsButton.disabled = true;
    postsContainer.replaceChildren();

    console.log("Starting GET request:", postsURL);

    try {
        const response = await fetch(postsURL + "?_limit=5");

        console.log("GET response status:", response.status);

        // Check whether the HTTP request succeeded.
        if (!response.ok) {
            throw new Error(
                "The server returned status " + response.status
            );
        }

        // Parse the JSON response.
        const posts = await response.json();

        console.log("GET request successful. Posts received:", posts);

        if (!Array.isArray(posts) || posts.length === 0) {
            displayAPIStatus(
                postsStatus,
                "The request succeeded, but no posts were returned.",
                "error"
            );

            return;
        }

        // Create each post element dynamically.
        const postElements = posts.map(function (post) {
            return createPostCard(post);
        });

        postsContainer.replaceChildren(...postElements);

        displayAPIStatus(
            postsStatus,
            "Success! Loaded " + posts.length +
            " posts from JSONPlaceholder.",
            "success"
        );

    } catch (error) {
        console.error("GET request failed:", error);

        displayAPIStatus(
            postsStatus,
            "Sorry, the posts could not be loaded. Check your internet " +
            "connection and try again.",
            "error"
        );

    } finally {
        loadPostsButton.disabled = false;
    }
}


// ========================================
// HOMEWORK 8 - LOAD BUTTON
// ========================================

loadPostsButton.addEventListener("click", function () {
    loadPosts();
});


// ========================================
// HOMEWORK 8 - POST REQUEST
// ========================================

async function createPost(title, body) {
    const postData = {
        title: title,
        body: body,
        userId: 1
    };

    displayAPIStatus(
        postStatus,
        "Sending your post to JSONPlaceholder...",
        "loading"
    );

    submitPostButton.disabled = true;
    createdPostContainer.replaceChildren();

    console.log("Starting POST request:", postData);

    try {
        const response = await fetch(postsURL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },

            body: JSON.stringify(postData)
        });

        console.log("POST response status:", response.status);

        // Do not treat an unsuccessful HTTP response as success.
        if (!response.ok) {
            throw new Error(
                "The server returned status " + response.status
            );
        }

        // Parse the returned JSON record.
        const createdPost = await response.json();

        console.log("POST request successful. Returned record:", createdPost);

        // Render the returned record on the page.
        const resultCard = document.createElement("article");
        resultCard.classList.add("created-post-card");

        const resultHeading = document.createElement("h4");
        resultHeading.textContent = "Post Created Successfully";

        const resultId = document.createElement("p");
        resultId.textContent = "Returned post ID: " + createdPost.id;

        const resultTitle = document.createElement("p");
        resultTitle.textContent = "Title: " + createdPost.title;

        const resultBody = document.createElement("p");
        resultBody.textContent = "Message: " + createdPost.body;

        const resultNote = document.createElement("p");
        resultNote.textContent =
            "This is a simulated record. JSONPlaceholder does not " +
            "permanently save created posts.";

        resultCard.append(
            resultHeading,
            resultId,
            resultTitle,
            resultBody,
            resultNote
        );

        createdPostContainer.replaceChildren(resultCard);

        displayAPIStatus(
            postStatus,
            "Success! The POST request returned a record.",
            "success"
        );

        // Return the created record for potential future use.
        return createdPost;

    } catch (error) {
        console.error("POST request failed:", error);

        displayAPIStatus(
            postStatus,
            "Sorry, your post could not be submitted. Check your " +
            "connection and try again.",
            "error"
        );

        return null;

    } finally {
        submitPostButton.disabled = false;
    }
}


// ========================================
// HOMEWORK 8 - POST FORM SUBMISSION
// ========================================

apiPostForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const title = apiPostTitle.value.trim();
    const body = apiPostBody.value.trim();

    if (title === "" || body === "") {
        displayAPIStatus(
            postStatus,
            "Please enter both a title and a message.",
            "error"
        );

        return;
    }

    const createdPost = await createPost(title, body);

    if (createdPost !== null) {
        apiPostForm.reset();
    }
});


// ========================================
// HOMEWORK 8 - INITIAL GET REQUEST
// ========================================

// Load five posts when the page opens.
loadPosts();


// ========================================
// FINAL DEBUGGING MESSAGE
// ========================================

console.log("NFL for Beginners JavaScript loaded successfully.");
console.log("NFL DOM interactions are ready.");
console.log("NFL fan registration form is ready.");
console.log("JSONPlaceholder API explorer is ready.");