// ==========================
// OPTIGEETECH JAVASCRIPT
// ==========================


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});




// Close mobile menu after clicking link

const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});





// Navbar shadow on scroll

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 8px 25px rgba(0,0,0,0.15)";

    }

    else{

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.08)";

    }


});






// Scroll reveal animation


const revealElements = document.querySelectorAll(
".portfolio-card, .service-card, .tool-box, .growth-card, .industry-grid div"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}


});


},{
threshold:0.15

});



revealElements.forEach(element=>{


element.style.opacity="0";
element.style.transform="translateY(40px)";
element.style.transition="0.6s ease";


observer.observe(element);


});





// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let data = {

        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        service: form.service.value,
        message: form.message.value

    };


    fetch(
    "https://script.google.com/macros/s/AKfycbyFu8hYSv6SmJ-sCs9JQRrH7bSrTXGJNloTcUloxeAxNSx1h3_HQFkGX6p8cubMbsWf9A/exec",
    {

        method: "POST",

        body: JSON.stringify(data),

        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        }

    })

    .then(response => response.text())

    .then(result => {

        console.log(result);

        alert("OPTIGEETECH enquiry sent successfully");

        form.reset();

    })

    
    .catch(error => {

        console.log(error);

        alert("Error sending enquiry");

    });
});


    // ================= PORTFOLIO GALLERY =================


const projectGallery = {


solar:[

"images/portfolio/solar/solar1.jpg",
"images/portfolio/solar/solar2.jpg",
"images/portfolio/solar/solar3.jpg",
"images/portfolio/solar/solar4.jpg"

],


mechanical:[

"images/portfolio/mechanical/mech1.jpg",
"images/portfolio/mechanical/mech2.jpg",
"images/portfolio/mechanical/mech3.jpg"

],


tools:[

"images/portfolio/tools/tool1.jpg",
"images/portfolio/tools/tool2.jpg"

],


sales:[

"images/portfolio/sales/sales1.jpg",
"images/portfolio/sales/sales2.jpg"

]


};



function openGallery(project){


let box=document.getElementById("galleryBox");

box.innerHTML="";


projectGallery[project].forEach(image=>{


box.innerHTML += `

<img src="${image}">

`;


});


document.getElementById("galleryModal").style.display="flex";


}



function closeGallery(){

document.getElementById("galleryModal").style.display="none";

}

