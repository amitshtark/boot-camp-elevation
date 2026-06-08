import promptSync from "prompt-sync";

const prompt = promptSync();
const questions = [
  { question: "What is 2 + 2? ", answer: "4" },
  { question: "What is the capital of France? ", answer: "Paris" },
  { question: "What year is it? ", answer: "2026" }]

let score = 0;

questions.forEach(element => {
  const userAnswer = prompt(element.question);
  if (userAnswer.trim().toLowerCase() === element.answer.trim().toLowerCase())
    score++;
});

console.log(`you got ${score} right questions of ${questions.length} questions`)




// Question 1: What is 2 + 2?
// Question 2: What is the capital of France?
// Question 3: What year is it?
// Final Score: 2/3 correct!
