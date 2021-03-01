import { createSlice } from '@reduxjs/toolkit';

export const detailsCaptureSlice = createSlice({
  name: 'details',
  initialState: {
    currentProgress: 1,
    name: "",
    location: "",
    theme: ""
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.currentProgress += 1;
    },
    decrement: state => {
      state.currentProgress -= 1;
    },
    updateName: (state, action) => {
        state.name = action.payload;
    }
  },
});

export const { increment, decrement, updateName } = detailsCaptureSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCurrentProgress = state => state.details.currentProgress;
export const selectName = state => state.details.name;

export default detailsCaptureSlice.reducer;
