Give me a production deep-dive on: **$ARGUMENTS**

If no topic is specified, use whatever we implemented most recently.

---

## Production Discussion

Cover each section. Be specific — name real companies, real incidents, real tradeoffs. No hand-waving.

### 1. How Real Systems Use This
Pick two companies at different scales (e.g., a startup and a hyperscaler). How do they actually implement or use **$ARGUMENTS**? What did they choose differently and why?

### 2. What Goes Wrong in Production
Name 2-3 real failure modes that engineers actually hit. For each:
- What triggered it
- What the symptom was
- What the fix was

If there's a known public incident (postmortem, blog post), reference it.

### 3. The Configuration That Matters
What are the 3-5 knobs that most affect behavior in production? What happens when they're misconfigured?

### 4. How to Observe It
What metrics would you put on a dashboard for this? What does a healthy system look like? What does a degrading system look like before it fully fails?

### 5. The Decision You Have to Make
What is the one architectural decision every team faces when adopting this? What are the tradeoffs? What would make you choose one way vs the other?

---

## After the Discussion

Ask me: **"Given what you just built locally, where would your implementation fail if you put it in production tomorrow?"**

Make me think about the gap between my toy implementation and the real thing.
