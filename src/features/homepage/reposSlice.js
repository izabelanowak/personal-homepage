import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
  name: "repos",
  initialState: {
    repos: [],
    loading: true,
    error: false,
  },
  reducers: {
    fetchrepos: (state) => {
      state.loading = true;
    },
    fetchreposSuccess: (state, { payload: repos }) => {
      state.repos = repos.results;
      state.loading = false;
      state.error = false;
    },
    fetchreposError: (state) => {
      state.loading = false;
      state.error = true;
    },
    resetState: (state) => {
      state.repos = [];
      state.loading = true;
      state.error = false;
    },
  },
});

export const {
  fetchRepos,
  fetchReposError,
  fetchReposSuccess,
  resetState,
} = reposSlice.actions;

export const selectRepos = (state) => state.repos.repos;
export const selectLoading = (state) => state.repos.loading;
export const selectError = (state) => state.repos.error;

export default reposSlice.reducer;
