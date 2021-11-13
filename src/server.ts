import express from "express";

import { filterRoutes } from "./routes/filter.routes";

const app = express();

app.use(express.json());

app.use(filterRoutes);

app.listen(3333, () => console.log("Server is running!"));
