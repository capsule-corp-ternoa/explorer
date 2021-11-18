import {request} from "graphql-request"

const api = (query: string ) => request(process.env.INDEXER_BASE_URL!, query);

export default api;