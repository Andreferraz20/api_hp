import express from "express";

import { GetFromExternalApi } from "./routes";

const app = express();

app.get("/", GetFromExternalApi);

app.listen(3333, () => console.log("Server is running!"));
