// Define your attainments and skills as arrays
const attainments = [
    "Certified Coderist",
    "Completed Primary Level",
    "Completed Secondary Level",
    "Completed Tertiary Level"
];

const skills = [
    "Good at Java",
    "Good at Python",
    "Good at Javascript",
    "Good at CSS",
    "Good at CODM",
    "Magaling bumuo ng dirt house sa Minecraft"
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
