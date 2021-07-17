/*
In this project we have three main points specified in the project rubric Behavior section:
1- Navigation is built dynamically as an unordered list.
2- It should be clear which section is being viewed while scrolling through the page.
3- When clicking an item from the navigation menu, the link should scroll to the appropriate section.

We also have 5 points suggested in the Development Strategy concept:
a- Add an active state to your navigation items when a section is in the viewport.
b- Hide fixed navigation bar while not scrolling (it should still be present on page load).
c- Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
d- Update/change the design/content.
e- Make sections collapsible.

I'll write the code for each point on its own if possible.

Also I'll be using some techniques that weren't introduced in the course but learned through research
like (template literals, arrow functions, ternary operator, ...)
*/


// 1- Navigation is built dynamically as an unordered list.

//selecting the unordered list at the header to use as a navigation menu.
const navBar = document.querySelector("#navbar__list");
//selecting all sections in the page.
const sections = document.querySelectorAll("section");
//adding all sections a list items to the navigation menu.
let frag = document.createDocumentFragment();
sections.forEach(section => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#${section.id}" class="menu__link" data-nav="${section.id}">${section.dataset.nav}</a>`;
    frag.appendChild(listItem);
});
navBar.appendChild(frag);

// 2- It should be clear which section is being viewed while scrolling through the page.
// a- Add an active state to your navigation items when a section is in the viewport.

const sectionObserver = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        //selecting the corresponding navigation menu link to each section
        let activeLink = document.querySelector(`[data-nav="${entry.target.id}"`);
        //adding or removing classes that corresponds to different styles in the CSS file
        if (entry.intersectionRatio > 0.25) {
            entry.target.classList.add("your-active-class");
            activeLink.classList.add("active__link");
        } else {
            entry.target.classList.remove("your-active-class");
            activeLink.classList.remove("active__link");
        }
    })
},
// setting the threshold option
{threshold: [0.25, 0.75]});
//calling the IntersectionObserver on each section
for (section of sections) {
sectionObserver.observe(section);
};

// 3- When clicking an item from the navigation menu, the link should scroll to the appropriate section.

navBar.addEventListener("click", (listItem) => {
    //prevent default jump into view action for the click
    listItem.preventDefault();
    if (listItem.target.dataset.nav) {
        let selectedSection = document.querySelector(`#${listItem.target.dataset.nav}`);
        selectedSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "start"});
    }
});

// b- Hide fixed navigation bar while not scrolling (it should still be present on page load).

let navigationMenu = document.querySelector(".navbar__menu");
document.onscroll = () => {
    let timer;
    clearTimeout(timer)
    navigationMenu.style.display = "block";
    timer = setTimeout(() => {
        navigationMenu.style.display = "none";
    }, 5000);
    // This line is related to the scroll to top button at line: 100
    // Using the ternary operator which was implemented in ES6 instead of a normal if statement
    window.scrollY > 1000 ? (scrollButton.style.display = "block") : (scrollButton.style.display = "none");
};

// Adding a bonus hover to show option.

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
// We need to use an (onscoll) event listener but we already have one at line: 74.
// To avoid duplication the excution line was placed at line: 83.

// e- Make sections collapsible.

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

// d- Update/change the design/content.
// changes were made in the CSS file.
