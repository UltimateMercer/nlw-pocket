export async function createGoalCompletion(goalId: string) {
  await fetch("http://localhost:4000/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      goalId,
    }),
  });
}
