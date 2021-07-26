# Landing Page Project

This project is implementing the basic skills of HTML, CSS and JavaScript to build a beautiful interactive website.

## Approach

* I started by mimicing almost the same elements from the original HTML file provided by Udacity with few modifications to match the desired result.
* Then creating a CSS file from scratch following the original CSS file's order but with an added touch to give a different feeling to the looks of the page.
* Last thing. I created the js file and added the options needed to give the page the desired interactivity. This had to bring some slight edits to the HTML and CSS files to match the new elements and their effects.

## Github Repository

I've tried updating my github repository after my daily sessions of working on the project so that you might follow some changes history.
To view the repo please follow the link [Landing Page](https://github.com/Sayton7/LandingPage)

## Fixed Notes
1- The current section is not getting highlighted on low-resolution devices such as iPhone X
* Added a different CSS style to lower the sections' margin on lowe-resolution devices.
* Lowered the IntersectionObserver ratio to 20% instead of 70%.
* Modified the threshold of the IntersectionObserver to fire at 25% and 75%
* (This fix the issue viewed in my developer tools on chrome)

2- You could use a forEach() function here instead of for loop.
* Switched from the (for of) loop to forEach() on line 28.
* Added a document fragment to append list items to then appending the fragment to the navigation menu for the sake of performance (avoid more reflows and repaints).

3- You could divide your Javascript into different functions in order to make it reusable.
* Couldn't really make it happen as almost all of the functions weren't used more than once in my code.
* Changed the IntersectionObserver function so that it would include the callback function and the options object instead of declaring them as separate variables.

4- Added some more descriptive comments to the js file.
