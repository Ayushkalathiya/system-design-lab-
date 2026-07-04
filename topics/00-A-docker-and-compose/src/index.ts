import express from "express";
import Redis from "ioredis";

const app = express();
const PORT = 3000;

// TODO: Create a Redis client
// - host comes from process.env.REDIS_HOST
// - port comes from process.env.REDIS_PORT
// Why env vars? Because locally you might run Redis on localhost,
// but inside Docker the host is the service name "redis"
const redis =  new Redis({
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: process.env.REDIS_HOST
});

// GET /ping
// TODO: ping Redis and return { redis: "connected", pong: true }
// Hint: redis.ping() returns "PONG" if Redis is reachable
app.get("/ping", async (req, res) => {
    try {
        const pong = await redis.ping();
        if (pong === "PONG") {
            res.json({ redis: "connected", pong: true });
        } else {
            res.status(500).json({ redis: "not connected", pong: false });
        }
    }   catch (error) {
        res.status(503).json({ redis: "not connected", pong: false, error: error });
    }
});

// GET /set?key=name&val=ayush
// TODO: store key-value in Redis, return { ok: true }
// Hint: redis.set(key, value)
app.get("/set", async (req, res) => {
    const { key, val } = req.query;
    if (!key || !val) {
        return res.status(400).json({ error: "Missing key or val query parameter" });
    }
    try {
        await redis.set(key as string, val as string);
        res.json({ ok: true });
    } catch (error) {
        res.status(500).json({ ok: false, error: error });
    }
});

// GET /get?key=name
// TODO: retrieve value from Redis, return { key, value }
// Hint: redis.get(key) — what does it return if key doesn't exist?
app.get("/get", async (req, res) => {
    const { key } = req.query;
    if (!key) {
        return res.status(400).json({ error: "Missing key query parameter" });
    }
    try {
        const value = await redis.get(key as string);
        res.json({ key, value });
    } catch (error) {
        res.status(500).json({ key, value: null, error: error });
    }
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
  console.log(`Redis host: ${process.env.REDIS_HOST}`);
});
