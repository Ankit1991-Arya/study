const pino = require("pino");
const logger = pino();

logger.info({ userId: 101, action: "login" }, "User login success");
logger.error({ err }, "Payment failed");

/*
For performance, I optimized DB queries, used Redis caching, and replaced blocking calls with streams/async operations. 
For debugging, I used Node inspector, structured logging with Pino, and heap snapshots to fix memory leaks. For monitoring, 
I set up Prometheus metrics, Grafana dashboards, health checks, and integrated alerts in Slack. For example, after adding Redis
 caching, we reduced response time from 500ms to 80ms and lowered DB load by 40%.
 */