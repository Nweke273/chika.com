
  let menu = document.querySelector("#menu-icon");
 let nav = document.querySelector(".navbar");


 menu.onclick = () => {
 menu.classList.toggle("fa-xmark");
 nav.classList.toggle("active");
 }


 window.onscroll = () => {
 menu.classList.remove("fa-xmark");
 nav.classList.remove("active");
 }

//  Booking
const form = document.getElementById("bookingForm");

if(form){
const message = document.getElementById("messge");
// Room prices
const prices = {
"Deluxe Room": 120,
"Executive Suite":200,
"Presidential Suite":350
};

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const room = document.getElementById("room").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    // Validation
    if(name === ""||email === ""|| room === ""||checkin === ""||checkout === ""){
      message.style.color = "red";
      message.textContent = "Please fill all fields!";
      return;
    }
    // Date Validation
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    if(checkoutDate <= checkinDate){
        message.style.color = "red";
        message.textContent = "Check-out must be after check-in";
        return;
    }
    // calculate days
    const timeDiff = checkoutDate - checkinDate;
    const days = Math.ceil(timeDiff/(1000*60*60*24));
    // price calculation
    const totalPrice = prices[room] * days;

    // save to local storage
    const booking = {
        name,
        email,
        room,
        checkin,
        checkout,
        days,
        totalPrice
    };

    let bookings = JSON.parse(localStorage.getItem("bookings"))||[];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // show success modal
    showModal(`Booking successful! <br> Total:$${totalPrice}`);

    form.reset();
    
})
}
// Modal function
function showModal(text){
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");

    modalText.innerHTML = text;
    modal.style.display = "flex";
    
}
 // close mode
function closeModal(){
        document.getElementById("modal").style.display = "none";
    }


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}
// scroll reveal/ head container
ScrollReveal().reveal(".hero-text h1",{
    ...scrollRevealOption,
    delay: 1000, 
})
ScrollReveal().reveal(".hero-text p",{
    ...scrollRevealOption,
    delay:500,
});

 ScrollReveal().reveal(".feature",{
     ...scrollRevealOption,
     origin: "right",
     interval: 500,
 });


 ScrollReveal().reveal(".room-card",{
     ...scrollRevealOption,
     origin: "left",
     interval: 500
 });
// About
 ScrollReveal().reveal(".about-section",{
     ...scrollRevealOption,
     delay: 100,
 });

 ScrollReveal().reveal(".team-container",{
     ...scrollRevealOption,
     interval: 500,
     origin: "left"
 });

 // Booking

 ScrollReveal().reveal(".booking-section",{
   ...scrollRevealOption,
   origin: "left",
   delay: 200,
 });

//  contact
 ScrollReveal().reveal(".contact-section",{
   ...scrollRevealOption,
   interval: 200,
 })

//  About
ScrollReveal().reveal(".rooms",{
   ...scrollRevealOption,
   interval: 200,
 })

footer__col