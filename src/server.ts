import "dotenv/config";
import { app } from "./app";

const portRaw = process.env.PORT;
const port = portRaw ? Number.parseInt(portRaw, 10) : 4000;

if (Number.isNaN(port)) {
  throw new Error("PORT must be a number");
}

app.listen(port, () => {
  console.log(`TaskFlow API listening on port ${port}`);
});
