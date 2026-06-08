let balance = 100;

export function getBalance(){
  return balance;
}
export function deposit(amount){
  if(amount <= 0)
  {
    console.log("amount is ilegal");
    return false;
  }
  balance += amount;
}
export function withdraw(amount){
  if(amount <= 0 || balance - amount < 0)
  {
    console.log("amount is ilegal");
    return false;
  }
  balance -= amount;
}