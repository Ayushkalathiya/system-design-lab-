# System Design Lab

Learning distributed systems by building every concept from scratch — in TypeScript + Node.js.

This is the **implementation layer** for my SWE·OS study tracker.
Every topic produces a working demo, benchmark results, and failure experiments.

## Start Here

```
/new-topic docker-and-compose
```

Work through Phase 0 first. Don't skip it.

## Full Sequence (36 topics → capstone)

### Phase 0 — Prerequisites
- [ ] `00-A` Docker & Docker Compose
- [ ] `00-B` Linux Networking Basics
- [ ] `00-C` TCP vs UDP
- [ ] `00-D` HTTP/1.1 Internals
- [ ] `00-E` Processes vs Threads vs Event Loop
- [ ] `00-F` Basic Benchmarking

### Phase 1 — Foundations
- [ ] `01` TCP Server from Scratch
- [ ] `02` Custom Binary Serialization Protocol
- [ ] `03` Thread Pool
- [ ] `04` Rate Limiter (token bucket + sliding window)
- [ ] `05` Connection Pool

### Phase 2 — Storage
- [ ] `06` Write-Ahead Log (WAL)
- [ ] `07` Key-Value Store
- [ ] `08` B-Tree Storage Engine
- [ ] `09` Bloom Filter
- [ ] `10` LSM Tree

### Phase 3 — Distributed Storage
- [ ] `11` Database Sharding
- [ ] `12` Consistent Hashing with Virtual Nodes
- [ ] `13` Leader-Follower Replication
- [ ] `14` Vector Clocks
- [ ] `15` Conflict Resolution (LWW + CRDTs)
- [ ] `16` Raft Consensus

### Phase 4 — Distributed Coordination
- [ ] `17` Leader Election (Simple)
- [ ] `18` Distributed Locking
- [ ] `19` Service Discovery
- [ ] `20` Gossip Protocol

### Phase 5 — Messaging & Streaming
- [ ] `21` Message Queue
- [ ] `22` Pub/Sub System
- [ ] `23` Consumer Groups
- [ ] `24` Delivery Guarantees (At-Least-Once vs Exactly-Once)
- [ ] `25` Dead Letter Queue (DLQ)
- [ ] `26` Retry Mechanisms

### Phase 6 — Caching
- [ ] `27` Cache (LRU, LFU, TTL, Eviction)
- [ ] `28` Cache Invalidation
- [ ] `29` Cache-Aside Pattern
- [ ] `30` Write-Through & Write-Back
- [ ] `31` Cache Eviction Policies

### Phase 7 — Observability
- [ ] `32` Structured Logging
- [ ] `33` Metrics & Aggregation
- [ ] `34` Distributed Tracing
- [ ] `35` Health Checks
- [ ] `36` Circuit Breaker

### Capstone
- [ ] Full distributed system — all 36 topics working together
