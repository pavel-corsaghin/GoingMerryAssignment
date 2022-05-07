import { Brewery } from '../../api/types/breweries';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export type BookmarkState = {
  bookmarks: Brewery[];
};

const initialState: BookmarkState = {
  bookmarks: [],
};

export const slice = createSlice({
  name: 'bookmark',
  initialState: initialState,
  reducers: {
    toggleBoorkmark: (state, action) => {
      const id = action.payload.id;
      const currentBookmarks = state.bookmarks;
      const isBookmarked = currentBookmarks.some(item => item.id === id);
      if (isBookmarked) {
        // remove from list
        state.bookmarks = currentBookmarks.filter(item => item.id !== id);
      } else {
        // add to list
        state.bookmarks = [...currentBookmarks, action.payload];
      }
    },
  },
});

// Plain actions
export const { toggleBoorkmark } = slice.actions;

export const bookmarks = (state: RootState) => state.bookmark.bookmarks;

export default slice.reducer;
