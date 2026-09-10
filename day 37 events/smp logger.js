// Wire up the SMP check-in form below
const form      = document.querySelector('#d4form');
const resultEl  = document.querySelector('#d4result');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop page reload

  // Read field values
  const name  = document.querySelector('#d4name').value.trim();
  const sleep = parseFloat(document.querySelector('#d4sleep').value);
  const water = parseInt(document.querySelector('#d4water').value);
  const steps = parseInt(document.querySelector('#d4steps').value);

  // Validate
  if (!name || isNaN(sleep) || isNaN(water) || isNaN(steps)) {
    resultEl.style.color = "#ff7b72";
    resultEl.textContent = "All fields are required.";
    return;
  }

  // Assess
  const hitGoal = steps >= 10000;
  const rating  = sleep >= 7.5 && water >= 8 && hitGoal ? "Excellent"
                : hitGoal                               ? "Good"
                : sleep >= 7.0                          ? "Average"
                : "Below target";

  // Display result
  resultEl.style.color = hitGoal ? "#4ecca3" : "#f5a623";
  resultEl.innerHTML = `
    <strong>${name}</strong>
    | Sleep: ${sleep}h | Water: ${water}gl | Steps: ${steps.toLocaleString()}
    | Goal: <strong>${hitGoal ? "HIT" : "MISS"}</strong>
    | Rating: <strong>${rating}</strong>
  `;

  console.log(`Check-in: ${name} | ${rating} | Goal: ${hitGoal ? "HIT" : "MISS"}`);
});

console.log("Form listener attached. Fill and submit the form below.");