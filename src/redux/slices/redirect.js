import { createSlice } from '@reduxjs/toolkit';

import { createUserAccountAction } from './account';
import { startWorkshopAction } from './currentState';
import { createArticleAction, createWorkshopAction } from './mentor';

const initialState = { redirectTo: null, force: false };

const redirectSlice = createSlice({
  name: 'redirect',
  initialState,
  reducers: {
    initRedirect: () => initialState,
  },
  extraReducers: {
    [createUserAccountAction.fulfilled.toString()]: (state, action) => {
      return ({
        redirectTo: '/dashboard/'
      })
    },
    [createWorkshopAction.fulfilled.toString()]: (
      state,
      { payload: { response } }
    ) => ({
      redirectTo: `/edit_workshop/${response.id}`,
    }),
    [createArticleAction.fulfilled.toString()]: (
      state,
      { payload: { response } }
    ) => ({
      redirectTo: `/edit_article/${response.id}`,
    }),
    [startWorkshopAction.fulfilled.toString()]: (state, { meta: { arg } }) => ({
      redirectTo: `/workshop/${arg.fsmId}`,
    }),
  },
});

export const { initRedirect: initRedirectAction } = redirectSlice.actions;

export const { reducer: redirectReducer } = redirectSlice;
