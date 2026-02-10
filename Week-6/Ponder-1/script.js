const students = [
    { last: 'Andrus', first: 'Aaron' },
    { last: 'Masa', first: 'Manny' },
    { last: 'Tanda', first: 'Tamanda' }
];

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let currentIndex = 0;

const studentNameElement = document.getElementById('student-name');
const gradeSelect = document.getElementById('grade-select');
const statusMessage = document.getElementById('status-message');

// displays the students name
displayStudent();

gradeSelect.addEventListener('change', function () {
    const selectedGrade = gradeSelect.value.toUpperCase();

    // ignore placeholder
    if (selectedGrade === 'CHOOSE ONE:') return;

    const currentStudent = students[currentIndex];
    const points = convert(selectedGrade);

    console.log(
        `Student ${currentStudent.first} ${currentStudent.last} earned ${points} credit hours`
    );

    // random lucky fruit
    const luckyFruit = words[Math.floor(Math.random() * words.length)];
    console.log(`🍎 Lucky fruit of the day: ${luckyFruit} 🍎`);

    // move to next student using index incrementation. ie. '++' for the incrementation 
    currentIndex++;

    // dropdown reset
    gradeSelect.selectedIndex = 0;

    if (currentIndex < students.length) {
        displayStudent();
    } else {
        studentNameElement.textContent = 'All students have been graded.';
        statusMessage.textContent = 'Grading complete.';
        gradeSelect.disabled = true;
    }
});

function displayStudent() {
    const student = students[currentIndex];
    studentNameElement.textContent = `Student: ${student.first} ${student.last}`;
}

function convert(grade) {
    let points;

    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('Not a valid grade');
            points = 0;
    }

    return points;
}
