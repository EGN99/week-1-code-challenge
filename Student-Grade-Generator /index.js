let studentMarks=52;
let studentGrade;
if (studentMarks > 79) {
studentGrade="A";
} else if ( studentMarks>59 && studentMarks<=79) {
studentGrade="B";
} else if (studentMarks >50 && studentMarks<=59) {
studentGrade="C";
}else if (studentMarks >40 && studentMarks<=49) {
studentGrade="D";
}else {
studentGrade="E";
}

console.log (studentGrade);



