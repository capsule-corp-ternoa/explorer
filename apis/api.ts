import {request} from "graphql-request"

const BASE_URL = 'https://app-4503b890-cfd1-479a-9045-45eac5dcf009.cleverapps.io/'

export default (query: string) => request(BASE_URL, query)
