// Simulated fetch: returns same structure as a live API call
const simulatedFetch = async (endpoint) => {
  const db = {
    "/api/members": [
      { id: 1, name: "Brian Otieno",   city: "Nairobi",  protocol: "Phase 1" },
      { id: 2, name: "Wanjiku Muthoni",city: "Mombasa",  protocol: "Phase 2" },
      { id: 3, name: "Kamau Njoroge",  city: "Kisumu",   protocol: "Phase 1" },
      { id: 4, name: "Aisha Waweru",   city: "Nakuru",   protocol: "Phase 3" },
    ],
    "/api/stats": {
      totalMembers: 4,
      avgSteps: 10240,
      avgSleep: 7.3,
      goalHitRate: 0.68
    }
  };
  const data = db[endpoint];
  if (!data) throw new Error(`404: ${endpoint} not found`);
  return { ok: true, status: 200, json: async () => data };
};

// --- Use it exactly like fetch ---
const loadMembers = async () => {
  try {
    const response = await simulatedFetch("/api/members");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const members = await response.json();

    console.log(`Loaded ${members.length} members:\n`);
    members.forEach(m => {
      console.log(`  [${m.id}] ${m.name} | ${m.city} | ${m.protocol}`);
    });
  } catch (err) {
    console.log(`"Error:", err.message`);
  }
};

const loadStats = async () => {
  try {
    const response = await simulatedFetch("/api/stats");
    const stats = await response.json();
    console.log(`\nSMP Stats:`);
    console.log(`  Members:      ${stats.totalMembers}`);
    console.log(`  Avg steps:    ${stats.avgSteps.toLocaleString()}`);
    console.log(`  Avg sleep:    ${stats.avgSleep}h`);
    console.log(`  Goal hit rate:${(stats.goalHitRate * 100).toFixed(0)}%`);
  } catch (err) {
    console.log(`"Error:", err.message`);
  }
};

// Run both functions
await loadMembers();
await loadStats();