let studentMarks = 56;
let studentGrade;
if (studentMarks >100 || studentMarks < 0){
//the student marks should be between 0 and 100 for the program to assign a grade
   studentGrade="Please enter a value between 0 and 100";
} else if(studentMarks > 79 && studentMarks >=100) {
//the grade to be assigned to a score between 80  and 100 is "A"
studentGrade="A";
} else if ( studentMarks>=60 && studentMarks<=79) {
//the grade to be assigned to a score between 60  and 79 is "B"
studentGrade="B";
} else if (studentMarks >=50 && studentMarks<=59) {
//the grade to be assigned to a score between 50  and 59 is "C"
studentGrade="C";
}else if (studentMarks >=40 && studentMarks<=49) {
//the grade to be assigned to a score between 40  and 49 is "D"
studentGrade="D";
}else if  (studentMarks >=0 && studentMarks<40){
//the grade to be assigned to a score between 0  and less than 40 is "E"
studentGrade="E";
}

console.log (studentGrade);


