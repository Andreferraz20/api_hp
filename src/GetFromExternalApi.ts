import axios from "axios";

const GetFromExternalApi = axios.create({
    baseURL: "http://hp-api.herokuapp.com/api/characters",
});

export default GetFromExternalApi;
