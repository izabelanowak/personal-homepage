import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
  name: "repos",
  initialState: {
    repos: [],
    loading: true,
    error: false,
  },
  reducers: {
    fetchRepos: (state) => {
      state.loading = true;
    },
    fetchReposSuccess: (state, { payload: data }) => {
      state.repos = data;
      state.loading = false;
      state.error = false;
    },
    fetchReposError: (state) => {
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
