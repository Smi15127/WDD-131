// JS notes

function addStars(span) {
    const stars = span.innerText.Length;
    span.setAttribute('aria-label', '$(stars) out of 5 stars');
}

const spans = document.querySelectorAll ('article.movie p span') // THIS IS A FORLOOP IN FUNCTION

/*for loop:  for(value passed in(?)) {iteration}  */
// spans.forEach(addStars);
    /*let i = 0*/
for (let i = 0; i < spans.length; i++) {
    addStars(spans[i]);
}