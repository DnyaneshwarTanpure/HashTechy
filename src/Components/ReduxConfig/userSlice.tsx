import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {

  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
}

interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  page: number;
}

export const fetchUsers = createAsyncThunk<User[], number>('users/fetchUsers', async (page) => {
  const response = await axios.get(`https://randomuser.me/api/?results=10&page=${page}`);
  return response.data.results;
});

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
  page: 1,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'succeeded';
        state.users = [...state.users, ...action.payload];
        state.page += 1;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default userSlice.reducer;
