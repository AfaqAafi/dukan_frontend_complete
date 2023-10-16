import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const initialStateGlobal = {
  user: null,
  loading: "idle",
  isAuthenticated: false,
  error: null,
};

// Create an async thunk for loading the user
export const loadUser = createAsyncThunk(
  "user/loadUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("api/v1/me", {
        withCredentials: true,
      });
      return response?.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong"); // Add a default error message
      }
    }
  }
);

// Create a user slice
const userSlice = createSlice({
  name: "user",
  initialState: initialStateGlobal,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.loading = "pending";
        state.isAuthenticated = false;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loadUser.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
        state.isAuthenticated = false;
      });
  },
});

// Create an async thunk for loading the user
export const loadUserLogout = createAsyncThunk(
  "logout/loadUserLogout",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await axios.get("api/v1/logout", {
        withCredentials: true,
      });
      dispatch(reset()); // Dispatch the reset action here
      window.location.href = "/login";
    } catch (error) {
      console.error("Error in API request: ", error); // Add this for debugging
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something went wrong"); // Add a default error message
      }
    }
  }
);

export const userLogoutSlice = createSlice({
  name: "logout",
  initialState: initialStateGlobal,
  reducers: {
    reset: () => initialStateGlobal,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserLogout.pending, (state) => {
        state.loading = "pending";
        state.isAuthenticated = true;
      })
      .addCase(loadUserLogout.fulfilled, (state) => {
        state.loading = "fulfilled";
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(loadUserLogout.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        }
        state.isAuthenticated = true;
      });
  },
});

export const { reset } = userLogoutSlice.actions;
export default userSlice.reducer;
