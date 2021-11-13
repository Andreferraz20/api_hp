import { Request, Response, Router } from "express";

import api from "../GetFromExternalApi";
import SearchCharacters from "../SearchCharacters";

const filterRoutes = Router();

filterRoutes.get("/", async (request: Request, response: Response) => {
    const { data } = await api.get("/");
    const dataFiltered = SearchCharacters.execute(data, request.body);

    return response.json(dataFiltered);
});

export { filterRoutes };
