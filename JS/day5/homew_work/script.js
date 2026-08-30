let marks = Number(prompt("Enter Your Marks"));

if (marks > 90 && marks <= 100) {
  document.write("Welldone, your Grade is A+");
} else if (marks > 80 && marks <= 90) {
  document.write("Excllent, Your Grade is A");
} else if (marks > 70 && marks <= 80) {
  document.write("Nice, Your Grade is B");
} else if (marks > 60 && marks <= 70) {
  document.write("Good, Your Grade is C");
} else if (marks >= 50 && marks <= 60) {
  document.write("Satisfactory, Your Grade is D");
} else if (marks >= 1 && marks < 50) {
  document.write("You are failed, Try Next Time");
} else {
  document.write("Marks range should be 1 upto 100");
}
