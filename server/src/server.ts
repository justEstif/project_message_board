import app from "./app";
import env from "./config/env";

const port = env.port;

app.listen(port, () => {
  console.log(`supertest listening at http://localhost:${port}/api`);
});
