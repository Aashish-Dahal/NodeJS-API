import app from "./config/express";
import config from "./config/config";
app.listen(config.port, () =>
  console.log(`server running in ${config.env} mode on port ${config.port}`)
);
