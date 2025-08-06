// Side Navbar open/close
var bar = document.querySelector(".side-navbar");

function openNavbar() {
  bar.style.left = "0%";
}

function closeNavbar() {
  bar.style.left = "-60%";
}

// Product search functionality
var productContainer = document.getElementById("products");
var search = document.getElementById("search");

// Only add search logic if both elements exist (avoid error on contact.html)
if (productContainer && search) {
  var productList = productContainer.querySelectorAll(".product-box");

  search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
      var productName = productList[count].querySelector("p").textContent;
      if (productName.toUpperCase().indexOf(enteredValue) < 0) {
        productList[count].style.display = "none";
      } else {
        productList[count].style.display = "block";
      }
    }
  });
}
