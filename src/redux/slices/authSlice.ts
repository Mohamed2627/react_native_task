import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, handleLogin } from '../../utils';
import { AUTH_STATUS, handleSignUp } from '../../utils/authUtils';

export const userLogin = createAsyncThunk(
  'auth/login',
  async (userData: IUser, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const authStatus = await handleLogin(userData);
    if (authStatus === AUTH_STATUS.AUTHENTICATED) {
      return AUTH_STATUS.AUTHENTICATED
    } else {
      return rejectWithValue(authStatus)
    }
  }
);

export const userSignUp = createAsyncThunk(
  'auth/signup',
  async (userData: IUser, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const signupStatus = handleSignUp(userData);
    return signupStatus ?? rejectWithValue(signupStatus)
  },
);

interface IInitialState {
  authLoading: boolean,
  authError: null | string,
}

const initialState: IInitialState = {
  authLoading: false,
  authError: null,
};

const authReducer = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuthError: (state, action) => {
      state.authError = action.payload
    }
  },
  extraReducers: builder => {
    // User Login
    builder.addCase(userLogin.pending, (state) => {
      state.authLoading = true;
      state.authError = null;
    });
    builder.addCase(userLogin.fulfilled, (state) => {
      state.authLoading = false;
      state.authError = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.authLoading = false;
      switch (action.payload) {
        case AUTH_STATUS.NOT_AUTHENTICATED:
          state.authError = 'Wrong Password'
          break;
        case AUTH_STATUS.NOT_FOUND:
          state.authError = 'This user is not found, Sign up first'
          break;
        default:
          state.authError = 'Something Went Wrong '
      }
    });
    // User Sign Up
    builder.addCase(userSignUp.pending, (state) => {
      state.authLoading = true;
      state.authError = null;
    });
    builder.addCase(userSignUp.fulfilled, (state) => {
      state.authLoading = false;
      state.authError = null;
    });
    builder.addCase(userSignUp.rejected, (state) => {
      state.authLoading = false;
      state.authError = 'Something Went Wrong';
    });
  },
});


export default authReducer.reducer;

export const { setAuthError } = authReducer.actions