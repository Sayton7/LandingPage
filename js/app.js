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


// Setting the options object
const options = {
    threshold: [0.25, 0.5, 0.75]
};

// Setting the callback function 
const callback = (entries, observer) => {
    entries.forEach(entry => {
        let activeLink = navBar.querySelector(`[data-nav=${entry.target.id}]`);
        console.log(activeLink);
        if (entry.intersectionRatio > 0.7) {
            entry.target.classList.add("your-active-class");
            activeLink.classList.add("active__link");
        } else {
            entry.target.classList.remove("your-active-class");
            activeLink.classList.remove("active__link");
        }
    }); 
};

const observer = new IntersectionObserver(callback, options);

sections.forEach(section => {
    observer.observe(section);
});

// Third. clicking a navigation bad item scrolls to it's location in the page.

