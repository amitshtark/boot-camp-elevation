let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

let discount = 0;

let isWeekend = dayOfWeek === 6 || dayOfWeek === 0;

if (customerType === "vip") {
  discount = 20;
} else if (customerType === "premium") {
  discount = isWeekend ? 15 : 10;
} else if (customerType === "regular") {
  if (purchaseAmount > 100) {
    discount = 10;
  } else if (purchaseAmount > 50) {
    discount = 5;
  } else {
    discount = 0;
  }
}

let discountAmount = purchaseAmount * (discount / 100);
let finalPrice = purchaseAmount - discountAmount;

console.log(`Discount: ${discount}%`);
console.log(`Discount amount: $${discountAmount}`);
console.log(`Final price: $${finalPrice}`);