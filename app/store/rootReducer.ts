import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './@slices/counter';
import themeReducer from './@slices/theme';
import bookmarkReducer from './@slices/bookmark';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  bookmark: bookmarkReducer,
});

export default rootReducer;
