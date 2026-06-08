let balance = 100;

export function getBalance(){
  return balance;
}
export function deposit(amount){
  if(amount <= 0 || isNaN(amount))
  {
    console.log("amount is illegal");
    return false;
  }
  balance += amount;
  return true;
}
export function withdraw(amount){
  if(amount <= 0 || isNaN(amount) || balance - amount < 0)
  {
    console.log("amount is illegal");
    return false;
  }
  balance -= amount;
  return true;
}