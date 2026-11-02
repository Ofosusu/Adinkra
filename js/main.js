// Adinkra website entry point.
const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
