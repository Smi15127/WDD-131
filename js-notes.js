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

// const numbersDoubled = numbers.map(double): <--- double would be the function we call, apparently arrow 
// functions like below work in the same way.

// arrays, functions have no arrays that they're drawing data from


// Map
const numbersDoubled = numbers.map((num) => {
    return num * 2
});
console.log(numbersDoubled)

/* even numbers */ const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log(evenNumbers)

// Filter
const activeUsers = users.filter((user) => {
    return console.log(user.active);
}); // no not function, when you want a 'not' returned, you use ! before your argument. Like '!use.active'

//reduce
const sum = numbers.reduce ((num, total) => {
    return total + num;
});
console.log(sum);

const averageAge = users.reduce((total, user)=> {
    return total + user.age;
}, 0) / users.length;
console.log('Sum:', sum);
console.log('Average age:', averageAge);

// for ponders, we now make our own html. We are to take the javascript and do somethign with it.
// In this case, we loop through the students in the given array, and give them a grade.