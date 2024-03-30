// var studentNames = ["asmaa", "mariam", "israa", "amira"];
// var scores = [85, 99, 75, 50];

var students = [
{ name: "asmaa", score: "85"},
{ name: "mariam", score: "99"},
{ name: "israa", score: "75"},
{ name: "amira", score: "50"},
];

var studentToFind = prompt("Enter a student's name:");
 
var found = false;
var studentScore;

for (var index = 0; index < students.length; index +=1) {
    console.log(students[index].name);

    if (students[index].name === studentToFind) {
        found = true;
        studentScore = students[index].score;

        break;
    }
}

if (found) {
    console.log(studentToFind , " 's score is: " ,studentScore);
}else {
    console.log("student not found.");
}
