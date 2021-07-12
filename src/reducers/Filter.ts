import { createSlice } from '@reduxjs/toolkit';

export interface FilterState {
  s: string;
  page: number;
}

const initialState: FilterState = {
  s: '',
  page: 1,
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchKeyword: (state, action) => {
      state.s = action.payload;
    },
    pagination: (state) => {
      state.page += 1;
    }
  },
});

export const { searchKeyword, pagination } = FilterSlice.actions;

export default FilterSlice.reducer;