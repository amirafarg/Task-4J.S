var studentNames = ["asmaa", "mariam", "israa", "amira"];
var scores = [85, 99, 75, 50];

var studentToFind = prompt("Enter a student's name:");
 
var found = false;
var studentScore;

for (var index = 0; index < studentNames.length; index +=1) {
    console.log(studentNames[index]);

    if (studentNames[index] === studentToFind) {
        found = true;
        studentScore = scores[index];

        break;
    }
}

if (found) {
    console.log(studentToFind , " 's score is: " ,studentScore);
}else {
    console.log("student not found.");
}
