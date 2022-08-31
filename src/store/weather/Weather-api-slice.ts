import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICity } from 'types/ICity';

const API_KEY = 'e8a310741b3edcee57380b8cf10f2914';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherAPI = createApi({
  reducerPath: 'weaherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: (build) => ({
    getCityByName: build.query<ICity, string>({
      query: (city) => ({
        url: `/weather?&appid=${API_KEY}&q=${city}&units=metric`,
      }),
    }),
    getCityById: build.query<ICity, number>({
      query: (id) => ({
        url: `/weather?id=${id}&appid=${API_KEY}&units=metric`,
      }),
    }),
    updateCityByName: build.query<ICity, string>({
      query: (city) => ({
        url: `/weather?&appid=${API_KEY}&q=${city}&units=metric`,
      }),
    }),
  }),
});

export const {
  useGetCityByNameQuery,
  useLazyGetCityByNameQuery,
  useUpdateCityByNameQuery,
  useLazyUpdateCityByNameQuery,
  useGetCityByIdQuery,
  useLazyGetCityByIdQuery,
} = weatherAPI;
