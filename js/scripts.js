/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/

// Add this email obfuscation script inside your main script, NOT inside another <script> tag:
const user = "shivjee";
const domain = "example.com";
const email = `${user}@${domain}`;
const link = `<a href="mailto:${email}">${email}</a>`;
document.addEventListener("DOMContentLoaded", () => {
    const emailEl = document.getElementById("email-link");
    if (emailEl) emailEl.innerHTML = link;
});

setInterval(() => {
  const letters = document.querySelectorAll("#NameAnimation .char");

  // Clear old glitches
  letters.forEach(l => l.classList.remove("glitch-blur"));

  // Pick 2–3 random letters
  const glitchCount = Math.floor(Math.random() * 2) + 1;

  for (let i = 0; i < glitchCount; i++) {
    const index = Math.floor(Math.random() * letters.length);
    letters[index].classList.add("glitch-blur");
  }
}, 2000);

// Continue with the rest of your existing script
window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});


const { motion } = window.Motion;
const { createRoot } = ReactDOM;

function AnimatedName() {
  const name = "YOUR NAME";

  return React.createElement(
    "h1",
    { style: { letterSpacing: "0.2em" } },
    name.split("").map((letter, i) =>
      React.createElement(
        motion.span,
        {
          key: i,
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.1, duration: 0.6 },
          style: { display: "inline-block" }
        },
        letter
      )
    )
  );
}

createRoot(document.getElementById("NameAnimation")).render(
  React.createElement(AnimatedName)
);
