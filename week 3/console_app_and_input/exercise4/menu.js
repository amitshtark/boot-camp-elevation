import promptSync from "prompt-sync";
import {getBalance, deposit, withdraw} from "./logic.js";
const prompt = promptSync();


function showMenu(){
  console.log("\n=== Banking System ===")
  console.log("1) check balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");
  const choice = prompt("choose option(1-4): ");
  if(choice === "1")
  {
    console.log("Current balance: $" + getBalance());
    showMenu();
  }
  else if(choice === "2")
  {
      const amount = Number(prompt("choose amount: "));
      deposit(amount);
      showMenu();

  }
  else if(choice === "3")
  {
    const amount = Number(prompt("choose amount: "));
    withdraw(amount);
    showMenu();
  }
  else if(choice === "4")
  {
    return;
  }
  else
  {
    console.log("ilegal option");
    showMenu();
  }
}

showMenu();