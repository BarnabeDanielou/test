const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    
})

// Resume button//
/*==================== Resume TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('Resume__active')
        })
        target.classList.add('Resume__active')

        tabs.forEach(tab =>{
            tab.classList.remove('Resume__active')
        })
        tab.classList.add('Resume__active')
    })
})

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  } else {
    this.parentNode.className = 'skills__content skills__close';
  }
}

// Close all skills headers on page load
for (let i = 0; i < skillsContent.length; i++) {
  skillsContent[i].className = 'skills__content skills__close';
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});


// Select all skills headers
const skillHeaders = document.querySelectorAll('.skills__header');

// Add click event listener to each header
skillHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Remove the 'selected' class from all other headers
    skillHeaders.forEach(h => h.classList.remove('selected'));
    // Add the 'selected' class to the clicked header
    header.classList.add('selected');
  });
});

// Load EmailJS library
emailjs.init("f4RkJ6Mu85PZOHoU_");

// Send email when form is submitted
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form data
  var formData = {
    user_name: document.getElementById('user_name').value,
    user_email: document.getElementById('user_email').value,
    message: document.getElementById('message').value
  };

  // Send email
  emailjs.send("service_igg2oln", "template_r4s40nc", formData)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
      document.getElementById('contact-form').reset();
    }, function(error) {
      console.log("FAILED...", error);
      alert("Message failed to send. Please try again later.");
    });
});


