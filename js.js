document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const popupMenu = document.querySelector('.popup-menu');
    const closeMenu = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', function() {
        popupMenu.classList.toggle('active'); // Toggle the pop-up menu
    });

    closeMenu.addEventListener('click', function() {
        popupMenu.classList.remove('active'); // Close the pop-up menu
    });
});

// Get query parameters from URL
const params = new URLSearchParams(window.location.search);
const itemName = params.get('name');    
const itemPrice = params.get('price');
const itemImage = params.get('image');

// Update the order page with the item details
if (itemName) {
    document.getElementById('order-name').textContent = itemName;
}
if (itemPrice) {
    document.getElementById('order-price').textContent = `Price: ${itemPrice}`;
}
if (itemImage) {
    document.getElementById('order-image').src = itemImage;
}

document.addEventListener("DOMContentLoaded", function () {
    const testimonialList = document.getElementById("testimonialList");

    fetch("fetch_testimonials.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(testimonial => {
                const testimonialDiv = document.createElement("div");
                testimonialDiv.classList.add("testimonial-item");
                testimonialDiv.innerHTML = `
                    <p class="testimonial-text">"${testimonial.testimonial}"</p>
                    <h4 class="testimonial-name">- ${testimonial.name}</h4>
                `;
                testimonialList.appendChild(testimonialDiv);
            });
        })
        .catch(error => console.error("Error fetching testimonials:", error));
});
// Mobile Menu Toggle Script
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");

mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

