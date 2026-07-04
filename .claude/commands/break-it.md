Help me design failure experiments for: **$ARGUMENTS**

If no target is specified, use whatever we implemented most recently in this session.

---

## Before We Start

Ask me:
1. What do you think will break first under stress?
2. What would be the worst possible failure mode for this system?

Wait for my answers.

---

## Failure Experiment Menu

Design 5 experiments across these categories. For each, give me the exact command or code change to trigger it, and ask me to predict what will happen before I run it.

### 1. Node Failure
Kill a service mid-operation. Does the system recover? Does it lose data?

### 2. Network Partition
Simulate a network split. What does each partition believe? Do they diverge?

### 3. Latency Injection
Add artificial delay to one component. Where does backpressure build? What times out?

### 4. Data Corruption
Send malformed input or corrupt a file. Does the system detect it or silently accept it?

### 5. Resource Exhaustion
Fill up disk, exhaust connections, or max out memory. What fails first?

---

## Experiment Format

For each experiment:

```
Experiment: [Name]
Trigger: [exact command or change]
Hypothesis: What do YOU think will happen? (I fill this in)
Observation: What actually happened? (I fill this in after running)
Why: Explain the behavior (I fill this in)
```

After each experiment, ask me: **"Did this match your hypothesis? What does this tell you about the system's guarantees?"**

This goes in `experiments/` and `lab.md` in the topic folder.
