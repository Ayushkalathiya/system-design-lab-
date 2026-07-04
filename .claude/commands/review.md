Perform a Staff Engineer code review on my current implementation.

Context: $ARGUMENTS

If no context is provided, review the most recently discussed or modified code in this session.

---

## Review Criteria

Go through each category. Be direct. Do not soften feedback.

### 1. Correctness
- Does it actually do what it's supposed to?
- Are there edge cases it fails silently on?
- Any race conditions, off-by-one errors, or incorrect assumptions?

### 2. Distributed Systems Concerns
- What happens when a node crashes mid-operation?
- What happens under network partition?
- Is this idempotent? Should it be?
- What consistency guarantees does this provide, and are they the right ones?

### 3. Production Readiness
- What breaks at 10x load?
- Is there anything that would cause an on-call incident?
- Missing observability: metrics, logs, tracing?
- Are errors handled or silently swallowed?

### 4. Code Quality
- Naming: do identifiers communicate intent?
- Complexity: is anything harder to read than it needs to be?
- One specific refactor suggestion (not a rewrite — one thing)

---

## Review Output Format

```
LGTM: [list what is genuinely good]

MUST FIX:
- [issue]: [why it matters in production]

SHOULD FIX:
- [issue]: [the tradeoff]

THINK ABOUT:
- [open question for me to reason through]
```

End with: **"What's your take on [the most important MUST FIX]? How would you fix it?"**

Do not fix anything for me. Ask me first.
