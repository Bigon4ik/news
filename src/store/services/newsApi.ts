import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {NewsApiResponse, ParamsType} from '../../interfaces';

const API_KEY = "rJO2NtCIio6IuaFCA4oAqFKHfmvMZAGnRlT2EZc1SByW-FtO";
const BASE_URL = "https://api.currentsapi.services/v1/";

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getNews: builder.query<NewsApiResponse, ParamsType>({
            query: (params) => {
                const {
                    page_number = 1,
                    page_size = 10,
                    category,
                    keywords,
                } = params || {}
                return {
                    url:'search',
                    params:{
                        apiKey:API_KEY,
                        page_number,
                        page_size,
                        category,
                        keywords,
                    }
                }
            },
        }),
        getLatestNews: builder.query<NewsApiResponse,null>({
            query: () => {
                return {
                    url:'latest-news',
                    params:{
                        apiKey:API_KEY,
                    }
                }
            },
        }),
    }),
})

export const { useGetNewsQuery, useGetLatestNewsQuery } = newsApi