// 1. Event Handling 🎈

// Button Click
document.getElementById("clickButton").addEventListener("click", () => {
	alert("Button clicked!");
});

// Hover Effect
const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", () => {
	hoverDiv.style.backgroundColor = "yellow";
});
hoverDiv.addEventListener("mouseout", () => {
	hoverDiv.style.backgroundColor = "lightblue";
});

// Keypress Detection
document.getElementById("keypressInput").addEventListener("keypress", (e) => {
	console.log("You pressed:", e.key);
});

// Double-click Secret
document.getElementById("secretButton").addEventListener("dblclick", () => {
	alert("Secret double-click unlocked!");
});

// 2. Interactive Elements 🎮

// Button changes text or color
document.getElementById("colorChangeButton").addEventListener("click", () => {
	const btn = document.getElementById("colorChangeButton");
	btn.style.backgroundColor =
		btn.style.backgroundColor === "green" ? "blue" : "green";
	btn.textContent =
		btn.textContent === "Change Color/Text"
			? "Changed!"
			: "Change Color/Text";
});

// Image Gallery
const images = [
	"https://via.placeholder.com/150",
	"https://via.placeholder.com/200",
	"https://via.placeholder.com/250",
];
let imgIndex = 0;
document.getElementById("nextImageButton").addEventListener("click", () => {
	imgIndex = (imgIndex + 1) % images.length;
	document.getElementById("galleryImage").src = images[imgIndex];
});

// Tabs
const tabContent = {
	1: "This is Tab 1 content.",
	2: "This is Tab 2 content.",
};

document.querySelectorAll(".tabButton").forEach((button) => {
	button.addEventListener("click", (e) => {
		const tabNumber = e.target.getAttribute("data-tab");
		document.getElementById("tabContent").textContent =
			tabContent[tabNumber];
	});
});

// 3. Form Validation 📋✅

document.getElementById("signupForm").addEventListener("submit", function (e) {
	e.preventDefault();

	const email = document.getElementById("email").value.trim();
	const password = document.getElementById("password").value;
	const errorMessages = [];

	// Required check
	if (!email) errorMessages.push("Email is required.");
	if (!password) errorMessages.push("Password is required.");

	// Email format
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (email && !emailPattern.test(email))
		errorMessages.push("Invalid email format.");

	// Password rules
	if (password.length < 8)
		errorMessages.push("Password must be at least 8 characters.");

	// Show errors
	const errorDiv = document.getElementById("errorMessages");
	errorDiv.innerHTML = errorMessages.join("<br>");

	if (errorMessages.length === 0) {
		alert("Form submitted successfully!");
	}
});

// Real-time feedback on password
document.getElementById("password").addEventListener("input", function () {
	const password = this.value;
	const errorDiv = document.getElementById("errorMessages");
	if (password.length < 8) {
		errorDiv.innerHTML = "Password must be at least 8 characters.";
	} else {
		errorDiv.innerHTML = "";
	}
});
