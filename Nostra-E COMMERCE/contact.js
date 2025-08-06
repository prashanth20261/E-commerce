// Optional: Alert on form submit
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
});
// Side Navbar open/close
var bar = document.querySelector(".side-navbar");

function openNavbar() {
  bar.style.left = "0%";
}

function closeNavbar() {
  bar.style.left = "-60%";
}