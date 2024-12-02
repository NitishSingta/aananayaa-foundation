

// .#hero slider __________________________________________controls slide functioning

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);




// about-us animation control on scroll________________________________________________________ 



document.addEventListener("DOMContentLoaded", function() {
  const aboutSection = document.querySelector("#about-us");

  // Function to add the 'in-view' class when the section is in the viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // Optional: Stops observing after class is added
      }
    });
  }, { threshold: 0.5 }); // Triggers when 50% of the section is visible

  observer.observe(aboutSection);
});



// get-involved _________cta-buttons animation trigger _______________________________


document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log(entry);  // Check if this logs when buttons enter view
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  });

  document.querySelectorAll('.cta-animated').forEach(el => observer.observe(el));
});


// testimonials -section ____________ fade in animation_____________________

document.addEventListener('DOMContentLoaded', function () {
  const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });

  document.querySelectorAll('.testimonial-card').forEach(card => {
    testimonialObserver.observe(card);
  });
});

// form handling foe newsletter sign-up section_____________________________

document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  
  if (emailInput.validity.valid) {
    alert("Thank you for subscribing!");
    // You can implement a proper submission here (e.g., using Fetch or Axios for AJAX requests)
    emailInput.value = ''; // Clear input after success
  } else {
    alert("Please enter a valid email address.");
  }
});


// animation for this section
document.addEventListener('DOMContentLoaded', function () {
  const newsletterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });

  const newsletterSection = document.querySelector('#newsletter');
  newsletterObserver.observe(newsletterSection);
});




// ____________________course section control_______________________
function toggleDetails(button) {
  const details = button.parentElement.nextElementSibling;
  if (details.style.display === "block") {
      details.style.display = "none";
      button.textContent = "View Details";
  } else {
      details.style.display = "block";
      button.textContent = "Hide Details";
  }
}


// ____________________activity section control_____________________


const container = document.querySelector('.activities-container');
const cards = document.querySelectorAll('.activity-card');
let scrollIndex = 0;

function updateCardVisibility() {
    cards.forEach((card, index) => {
        card.classList.remove('visible', 'partial');
        if (index >= scrollIndex && index < scrollIndex + 3) {
            card.classList.add('visible');
        } else if (index === scrollIndex - 1 || index === scrollIndex + 3) {
            card.classList.add('partial');
        }
    });

    // Update button visibility
    document.querySelector('.prev-btn').disabled = scrollIndex === 0;
    document.querySelector('.next-btn').disabled = scrollIndex + 3 >= cards.length;
}

function slideActivities(direction) {
    if (direction === 'next' && scrollIndex + 3 < cards.length) {
        scrollIndex++;
    } else if (direction === 'prev' && scrollIndex > 0) {
        scrollIndex--;
    }
    container.style.transform = `translateX(-${scrollIndex * 320}px)`;
    updateCardVisibility();
}

// Initialize visibility
updateCardVisibility();
