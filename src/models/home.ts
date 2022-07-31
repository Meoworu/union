/* home 页面的redux数据模型示例 */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  value: number;
}

const initialState: HomeState = {
  value: 0,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

const { actions, reducer } = homeSlice;
export const { increment, decrement, incrementByAmount } = actions;
export const homeReducer = reducer;
