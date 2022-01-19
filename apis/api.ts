import {request} from "graphql-request"

export const apiIndexer = (query: string ) => request(process.env.INDEXER_BASE_URL!, query);
export const apiDictionary = (query: string ) => request(process.env.DICTIONARY_BASE_URL!, query);