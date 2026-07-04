A new learning topic has been requested: **$ARGUMENTS**

Follow this exact sequence. Do not skip or reorder steps. Wait for my response after each step before continuing.

---

## Step 0 — Prerequisites Gate

Look up the prerequisites for **$ARGUMENTS** from the curriculum in CLAUDE.md.

List each prerequisite concept as a direct yes/no question. Ask all of them at once:

> "Before we start, I need to check if you have the required foundation. Answer each honestly — this is a calibration, not a quiz."

Wait for my answers. Then decide:

- **Missing critical prerequisites** → Do NOT start. Say exactly:
  > "You're missing [X]. Building [topic] without it means you'll copy patterns without understanding them. Let's do [prerequisite] first. Type `/new-topic [prerequisite]` to start it."

- **Shaky on some (not blockers)** → Note the gaps. Explain only those in Step 3. Continue.

- **All prerequisites solid** → Proceed immediately to Step 1.

---

## Step 1 — Pre-Quiz (10 Questions)

Ask exactly 10 questions about **$ARGUMENTS** to assess current understanding. Range from basic to deep. Number each. Ask all 10 at once. Wait for my answers.

---

## Step 2 — Diagnose Weak Areas

After I answer, identify the 2-3 areas where my understanding is weakest. List them explicitly. Do not explain anything yet — just name the gaps.

---

## Step 3 — Targeted Explanation

Explain only the weak areas from Step 2. For each: give the concept, the mental model, one concrete analogy. Skip what I already understand.

If prerequisite gaps were found in Step 0, address those here first.

---

## Step 4 — Implementation Roadmap

Design a milestone-based roadmap. Each milestone must:
- Be completable in one focused session
- Build directly on the previous milestone
- End with something **observable and runnable** — a log, a metric, a curl command that works

Number the milestones. Include a "stretch" milestone for production-level complexity.

---

## Step 5 — Working Demo Target

Define exactly what "done" looks like for this topic. Write the specific commands someone can run to see it working:

```bash
# Example for sharding:
docker compose up
curl /users/123      # → routed to shard1
curl /users/456      # → routed to shard2
docker logs shard1   # → shows request received
docker compose stop shard1  # → show what happens
```

This demo target goes in the folder README. Every topic must be runnable end-to-end.

---

## Step 6 — Folder Structure

Generate the exact folder and file structure under `topics/`:

```
topics/NN-$ARGUMENTS/
├── README.md          ← use the _template/README.md structure
├── docker-compose.yml
├── lab.md
├── src/
├── scripts/
│   ├── setup.sh
│   ├── seed.ts
│   └── load-test.ts
├── notes/
├── benchmarks/
└── experiments/
```

Fill `NN` with the next available number. For Phase 0 topics use `00-A`, `00-B`, etc.

---

## Step 7 — Docker Compose

Generate a `docker-compose.yml` for this topic. Include only services actually needed. Comment why each service is included.

For Phase 0 topics and simple Phase 1 topics (TCP server, thread pool) — no Docker needed. Say so explicitly and explain what to run instead.

---

## Step 8 — Milestone Checklist

Generate the full README.md for this topic using the `_template/README.md` structure. Fill in:
- Prerequisites checklist
- Problem being solved
- Architecture diagram (ASCII placeholder)
- How to run (the demo from Step 5)
- Milestone checklist from Step 4
- Leave benchmark/failure/lessons sections blank for me to fill in

---

## Step 9 — Portfolio Reminder

Print this exactly:

> Every milestone you complete gets committed. Every completed topic gets its README filled in with real benchmark numbers, real failure observations, and real lessons. This repo is your portfolio — make it something you'd be proud to show in an interview.

---

## Step 10 — Wait

Do not implement anything. Do not write any code. Wait for me to say I'm ready to begin Milestone 1.
