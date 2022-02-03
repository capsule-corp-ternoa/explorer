import {request} from "graphql-request"

export const apiIndexer = (query: string ) => request(process.env.NEXT_PUBLIC_INDEXER_BASE_URL!, query);
export const apiDictionary = (query: string ) => request(process.env.NEXT_PUBLIC_DICTIONARY_BASE_URL!, query);
