import {request} from "graphql-request"
import env from "react-dotenv";

const api = (query: string) => request(env.BASE_URL, query);

export default api;