Help me benchmark: **$ARGUMENTS**

If no target is specified, benchmark whatever we implemented most recently in this session.

---

## Benchmark Setup

Before running anything, ask me:
1. What metric matters most here — latency, throughput, or resource usage?
2. What is my hypothesis? What do I expect to see?
3. What would a "good" result look like vs a "bad" result?

Wait for my answers before continuing.

---

## Benchmark Plan

Design a benchmark that measures what actually matters for this system. Include:

1. **Baseline** — Single client, low load. What does the happy path look like?
2. **Load test** — Ramp up concurrency. Where does performance degrade?
3. **Stress test** — Push past the limit. What breaks first?
4. **Failure test** — Kill a node or inject latency. How does the system behave?

For each, provide:
- The exact command or script to run
- What output to look for
- What the numbers mean

---

## After Results Are In

When I share results:
- Help me interpret the numbers
- Ask: "Is this what you expected? Why or why not?"
- Identify the bottleneck
- Suggest one change to test next: "Now try X and compare"

Do not tell me what to fix. Help me reason through it.
