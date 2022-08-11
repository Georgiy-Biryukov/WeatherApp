import { ICity } from 'types/ICity';
import { createSlice } from '@reduxjs/toolkit';
import { weatherAPI } from './Weather-api-slice';

interface citiesState {
  cities: ICity[];
}

const initialState: citiesState = {
  cities: [],
};

export const weatherSlice = createSlice({
  name: 'weatherCity',
  initialState,
  reducers: {
    deleteCity: (state, { payload }) => {
      state.cities = state.cities.filter((el) => el.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      weatherAPI.endpoints.getCityByName.matchFulfilled,
      (state, { payload }) => {
        const repeate = state.cities.some((el) => el.id === payload.id);

        if (repeate) {
          state.cities = [...state.cities];
        }
        if (!repeate) {
          state.cities.push(payload);
        }
      }
    );
    builder.addMatcher(
      weatherAPI.endpoints.updateCityByName.matchFulfilled,
      (state, { payload }) => {
        state.cities.forEach((el, index) => {
          if (el.id === payload.id) {
            return (state.cities[index] = payload);
          }
        });
      }
    );
  },
});

export const { deleteCity } = weatherSlice.actions;

export default weatherSlice.reducer;
