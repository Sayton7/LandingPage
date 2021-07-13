/*
In this file we'll be using some techniques that weren't introduced in the course but learned through research
like (template literals, arrow functions, ternary operator, ...)
*/

// First things first. Selecting the page sections and adding them to the navigation menu.


// Selecting the unordered list at the header to use as a navigation menu.
const navBar = document.querySelector("#navbar__list");

// Selecting all sections in the page.
const sections = document.querySelectorAll("section");

// Adding all sections a list items to the navigation menu.
for (section of sections) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#${section.id}" class="menu__link" data-nav="${section.id}">${section.dataset.nav}</a>`;
    navBar.appendChild(listItem);
};

// Second thing. Using the Intersection Observer API to activate a different style for the section in view.
//Added the optional "Add an active state to your navigation items when a section is in the viewport."

// Setting the options object
const options = {
    threshold: [0.25, 0.5, 0.75]
};

// Setting the callback function 
const callback = (entries, observer) => {
    entries.forEach(entry => {
        let active__link = navBar.querySelector(`[data-nav="${entry.target.id}"]`);
        if (entry.intersectionRatio > 0.7) {
            entry.target.classList.add("your-active-class");
            active__link.classList.add("active__link");
        } else {
            entry.target.classList.remove("your-active-class");
            active__link.classList.remove("active__link");
        }
    }); 
};

const observer = new IntersectionObserver(callback, options);

sections.forEach(section => {
    observer.observe(section);
});


// Third. adding the scrollIntoView option to the clicked links in the menu bar.


navBar.addEventListener("click", (listItem) => {
    // This is to prevent the default scroll behavior
    listItem.preventDefault();

    if (listItem.target.dataset.nav) {
        let selectedSection = document.querySelector(`#${listItem.target.dataset.nav}`);
        selectedSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "start"});
    }
});

// Now to hide the navigation menu while  not scrolling.

let navigationMenu = document.querySelector(".navbar__menu");

document.onscroll = () => {
    let timer;
    clearTimeout(timer)
    navigationMenu.style.display = "block";
    timer = setTimeout(() => {
        navigationMenu.style.display = "none";
    }, 5000);

    // This line is related to the scroll to top button at line: 109
    // Using the ternary operator which was implemented in ES6 instead of a normal if statement
    window.scrollY > 1000 ? (scrollButton.style.display = "block") : (scrollButton.style.display = "none");
};

// Adding a bonus option to hover over the top of the page to view the navigation bar again without the need of scrolling.

document.onmousemove = (mousePosition) => {
    let timer;
    if (mousePosition.clientY <= 70) {
        clearTimeout(timer);
        navigationMenu.style.display = "block";
    } else {
        timer = setTimeout(() => {
            navigationMenu.style.display = "none";
        }, 5000);
    }
};

// Then, making the sections collapsible;

let buttons = document.querySelectorAll(".collapse");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let coll = document.querySelector(`[data-coll="${button.id}"]`);
        if (coll.style.display === "block") {
            coll.style.display = "none";
        } else {
            coll.style.display = "block"
        };
    });
});

// Adding a scroll to top button

let scrollButton = document.querySelector(".top");

scrollButton.addEventListener("click", () => {
    // Using a scroll object to get a smooth behavior
    let scrollToTop = {
        left: 0,
        top: 0,
        behavior: "smooth"
    }
    window.scrollTo(scrollToTop);
});

// We need to use an (onscoll) event listener but we already have one at line: 68.
// To avoid duplication the excution line was placed at line: 78.
