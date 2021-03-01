import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import captureReducer from '../features/detailsCapture/detailsCaptureSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    details: captureReducer,
  },
});
