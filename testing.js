var testGrade = Math.trunc((Math.random() * 10000));
testGrade /= 100;


if (testGrade >= 90) {
    console.log(`Your grade: 'A' (${testGrade}%)`);
}
else if (testGrade <= 89 && testGrade >= 80) {
    console.log(`Your grade: 'B' (${testGrade}%)`);
}
else if (testGrade <= 79 && testGrade >= 71) {
    console.log(`Your grade: 'C' (${testGrade}%)`);
}
else if (testGrade <= 70 && testGrade >= 65){
    console.log(`Your grade: 'D' (${testGrade}%)`);
}
else {
    console.log(`Your grade: 'F' (${testGrade}%)`);
}
