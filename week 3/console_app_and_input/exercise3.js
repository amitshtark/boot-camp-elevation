import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("=== User Registration ===");

rl.question("Name: ", (name) => {
  rl.question("Email: ", (email) => {
    rl.question("Age: ", (age) => {
      rl.question("Favorite color: ", (favoriteColor) => {
        console.log("\nRegistration Summary:");
        console.log("---------------------");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Age: ${age}`);
        console.log(`Favorite Color: ${favoriteColor}`);
        rl.close();
      });
    });
  });
});