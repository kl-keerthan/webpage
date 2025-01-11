
// Get the navigation menu elements
const navMenu = document.querySelector('header nav ul');
const navLinks = document.querySelectorAll('header nav ul li a');

// Add event listeners to the navigation menu links
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.hash);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Get the learn more button element
const learnMoreButton = document.querySelector('#home button');

// Add an event listener to the learn more button
learnMoreButton.addEventListener('click', () => {
  const aboutSection = document.querySelector('#about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// Get the send button element
const sendButton = document.querySelector('.send');

// Add an event listener to the send button
sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = {
    name: document.querySelector('input[type="text"]').value,
    email: document.querySelector('input[type="email"]').value,
    message: document.querySelector('textarea').value,
  };
  console.log(formData);
  // You can add your form submission logic here
});


