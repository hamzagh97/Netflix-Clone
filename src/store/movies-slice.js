import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const imagePath = "https://image.tmdb.org/t/p/w500/";
const apiKey = "e23e4a5910a7b243c6dbf4ce8e03b707";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (moviesData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
      );
      const datas = await response.json();

      const transformedMovies = datas.results.map((data) => {
        return {
          id: data.id,
          title: data.original_title,
          match: data.popularity,
          releaseDate: data.release_date,
          image: `${imagePath}${data.backdrop_path}`,
        };
      });
      return transformedMovies;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  favouriteClassState: false,
  reducers: {
    toggleFavourite(state, action) {
      const existingIndex = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      state.movies[existingIndex].isFavourite =
        !state.movies[existingIndex].isFavourite;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {},
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {},
  },
});

export const { toggleFavourite } = moviesSlice.actions;

export default moviesSlice;
