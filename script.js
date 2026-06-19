console.log("JavaScript is working");
window.addEventListener("load", () => {
    document.querySelectorAll(".fade-in").forEach(item => {
         item.classList.add("show");
    });
});

const searchInput = document.getElementById("searchInput");

if(searchInput) {

    searchInput.addEventListener("keyup", function(){
        
        let filter = searchInput.value.toLowerCase();

        let products = document.querySelectorAll(".product");

        products.forEach(product => {

            let text = product.textContent.toLowerCase();

            if(text.includes(filter)){
                product.style.display = "block";
            } else {
                product.style.ddisplay = "none";
            }
        });
    });
}

const enquiryForm = document.getElementById("enquiryForm");

if(enquiryForm){

    enquiryForm.addEventListener("submit", function(e){

            e.preventDefault();

            let quantity = document.getElementById("quantity").value;

            let totoal = quantity * 150;

            document.getElementById("result").innerHTML =
            "Information collected successfully!";
        });
}

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        document.getElementById("contactResult").innerHTML = "Message sent successfully!";
    });
}

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if(lightbox && lightboxImg){

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.dsisplay = "block";
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}