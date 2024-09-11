// Example of adding an animation effect to the hero section
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    
    hero.classList.add('fade-in');
});

// Simple CSS animation
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 2s ease-in;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);


const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
// Close navbar on close button click
closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
  });