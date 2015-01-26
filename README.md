#Knewton Code Challenge
===


###"Improve the user's experience"

Improving the user's experience is a never ending task. However, I had a limited amount of time (~2 hours), so I decided to optimize for accessibility. The constraints of the Gregslist HTML added another dimension to the challenge. Considering these factors, I improved the user's experience for:

1. Accessible technologies (screen readers + keyboard access)
2. The elderly
3. Mobile users

### DOM manipulation

I spent some time thinking about what matters on the Gregslist page. The "main" content consists of:

* "Post to classifieds"
* Search
* Categories

I wanted the DOM structure to reflect that, to make navigation easier for mobile users, screen readers, and keyboard navigation. 

### Accessibility

* I added a "skip to main content" link to make navigation easier for screen readers + keyboard navigation
* I modified the search form to conform with accessibility standards

### Readability

* I increased padding, line height, font size in various sections to make the page more readable
* I used the cities' full names instead of short names
* I removed the wiki link which adds no value to the page and adds confusion 

### Mobile

* I made the page easier to navigate for smaller screen sizes
* I made the "Post" link more prominent 

### "Design"

I didn't do much to further the esthetic "design" of the page. What's so great and useful about the Gregslist homepage is that there are a lot of links to choose from. The user can probably spot what he/she is looking for at a glance. I didn't want to rid the page of that. With that in mind:

* I made the header sticky so that the user can Search and Post from any scroll position on the page
* I moved the "My account" link to a more intuitive location for desktop users


### What's missing

As I said earlier, improving the user's experience is a never ending task. There is much more to be done. For example:

* Make event calendar easier to navigate for accessible technologies + mobile (it quite unusable in both cases as it is now)
* I spent some time thinking about whether or not capitalized text would be easier to scan, and didn't come to a conclustion. I would need to research this more.
* Make the page more esthetically pleasing
* Make the categories expand on click for mobile

### Code

* I added the `<script>` and `<link>` tags to the HTML file. My Javascript file presuposes the use of the `async` attribute in the `<script>` tag.
* I would not usually use ID selectors in CSS, but chose to in this case to maximize for time
* DOM manipulation made some of the HTML semantically incorrect, which I would fix in production code

### Thanks!

For an interesting challenge :)

[alexq.in](http://alexq.in)