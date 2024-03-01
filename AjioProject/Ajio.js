document.addEventListener("DOMContentLoaded", function() {
    // Change background color of the body
    document.body.style.backgroundColor = "#f0f0f0";

    // Example: Add event listeners to navigation links
    var navLinks = document.querySelectorAll(".nav-container-div a");
    navLinks.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            this.style.color = "red";
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "black";
        });
    });

    // Example: Implement search functionality
    var searchInput = document.getElementById("nav-search-div");
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            alert("Search query: " + searchInput.value);
            // Implement your search logic here
        }
    });

    // Example: Handle carousel slide events
    var carousels = document.querySelectorAll(".carousel");
    carousels.forEach(function(carousel) {
        carousel.addEventListener("slide.bs.carousel", function() {
            console.log("Slide event triggered");
            // Implement your carousel slide logic here
        });
    });
});
