import {request} from "graphql-request"

const api = (query: string ) => request(process.env.NEXT_PUBLIC_INDEXER_BASE_URL!, query);

export default api;