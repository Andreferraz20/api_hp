import { Request, Response } from "express";

import api from "./GetFromExternalApi";
import SearchCharacters from "./SearchCharacters";

export async function GetFromExternalApi(request: Request, response: Response) {
    const { data } = await api.get("/");
    const dataF = SearchCharacters.execute(data);
    return response.json(dataF);
}
