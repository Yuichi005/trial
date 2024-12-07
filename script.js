// Define your attainments and skills as arrays
const attainments = [
    "Certified Legendary in Call of Duty Mobile",
    "Completed Minecraft Campaign",
    "Certified in Tambay",
    "Winner in Poster Making Contest"
];

const skills = [
    "Magmahal",
    "Clingy",
    "Mabait",
    "Pogi",
    "Magaling magdrawing",
    "Magaling bumaril"
];

// Function to display attainments
function displayAttainments() {
    const attainmentList = document.getElementById("attainmentList");
    attainments.forEach(function(attainment) {
        const li = document.createElement("li");
        li.textContent = attainment;
        attainmentList.appendChild(li);
    });
}

// Function to display skills
function displaySkills() {
    const skillsList = document.getElementById("skillsList");
    skills.forEach(function(skill) {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

// Call the display functions when the page loads
window.onload = function() {
    displayAttainments();
    displaySkills();
};
