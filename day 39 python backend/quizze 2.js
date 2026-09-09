const weeks = [
  { amount_spent: 8000,  texts_sent: 40, texts_replied: 2 },
  { amount_spent: 12000, texts_sent: 55, texts_replied: 3 },
  { amount_spent: 9000,  texts_sent: 38, texts_replied: 4 },
  { amount_spent: 11000, texts_sent: 42, texts_replied: 2 },
  { amount_spent: 12000, texts_sent: 35, texts_replied: 3 },
];

let totalSpent = 0;
let totalTextsSent = 0;
let totalRepliesReceived = 0;

// Loop through records to calculate totals
for (const week of weeks) {
  totalSpent += week.amount_spent;
  totalTextsSent += week.texts_sent;
  totalRepliesReceived += week.texts_replied;
}

// Compute the reply rate rounded to the nearest whole number
const replyRate = Math.round((totalRepliesReceived / totalTextsSent) * 100);

// Determine verdict based on the rules
let verdict = "";
if (replyRate < 20) {
  verdict = "Cut your losses";
} else if (replyRate < 50) {
  verdict = "She might like you";
} else {
  verdict = "Keep going";
}

// Print the report exactly as required
console.log(`Total spent: KES ${totalSpent}`);
console.log(`Texts sent: ${totalTextsSent}`);
console.log(`Replies received: ${totalRepliesReceived}`);
console.log(`Reply rate: ${replyRate}%`);
console.log(`Verdict: ${verdict}`);