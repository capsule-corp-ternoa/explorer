import {request} from "graphql-request"

const api = (query: string ) => request(process.env.BASE_URL!, query);

export default api;