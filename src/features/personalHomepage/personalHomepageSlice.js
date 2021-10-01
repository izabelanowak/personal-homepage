import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    repositiories: [],
    loading: true,
    error: false,
  },
  reducers: {
    fetchRepositories: (state) => {
      state.loading = true;
    },
    fetchRepositoriesSuccess: (state, { payload: repositiories }) => {
      state.repositiories = repositiories;
      state.loading = false;
      state.error = false;
    },
    fetchRepositoriesError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} = personalHomepageSlice.actions;

const selectPersonalHomepageState = state => state.personalHomepage;

export const selectRepositories = state => selectPersonalHomepageState(state).repositiories;
export const selectLoading = state => selectPersonalHomepageState(state).loading;
export const selectError = state => selectPersonalHomepageState(state).error;

export default personalHomepageSlice.reducer;
