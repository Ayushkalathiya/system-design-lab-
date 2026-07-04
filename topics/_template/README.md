# [Topic Name]

> One sentence: what problem does this solve and why does it matter?

## Prerequisites Checklist
- [ ] [prerequisite concept 1]
- [ ] [prerequisite concept 2]
- [ ] [prerequisite concept 3]

## Problem Being Solved

> 1 paragraph: what breaks without this? What failure or limitation does this address?

## Architecture

```
[ASCII diagram of your implementation]
```

## How to Run

```bash
# Start services
docker compose up

# Try it
curl http://localhost:3000/...

# Watch logs
docker compose logs -f
```

## Milestones
- [ ] Milestone 1:
- [ ] Milestone 2:
- [ ] Milestone 3:
- [ ] Milestone 4:
- [ ] Stretch:

## Benchmark Results

| Metric | Value |
|--------|-------|
| Throughput | — RPS |
| Latency p50 | — ms |
| Latency p95 | — ms |
| Latency p99 | — ms |

> How was this measured? What was the test setup?

## Failure Scenarios Tested

| Scenario | What Happened | Expected? |
|----------|--------------|-----------|
| [e.g. kill primary node] | [observation] | Yes / Surprised |

## How Production Systems Solve This

> How does [Postgres / Redis / Kafka / Cassandra / etc.] implement this same concept?
> What do they do differently from your implementation and why?

## Key Decisions Made

> Every "Why did I choose this?" moment during implementation.

## Lessons Learned

> What surprised you? What would you do differently?

## Possible Improvements

> What would make this production-ready that you didn't implement?
