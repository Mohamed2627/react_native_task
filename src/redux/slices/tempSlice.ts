import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_STATUS, handleSignUp } from '../../utils/authUtils';
import { axios } from '../../utils';


export const getCurrentTemp = createAsyncThunk(
  'temp',
  async (city: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get('', {
        params: {
          city_name: city
        }
      });
      return res.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);


interface IInitialState {
  temp: number,
  tempError: null | string | unknown,
  tempLoading: boolean,
  city: string
}

const initialState: IInitialState = {
  temp: 0,
  tempError: null,
  tempLoading: false,
  city: ''
};

const tempReducer = createSlice({
  name: 'temp',
  initialState: initialState,
  reducers: {
    setTempError: (state, action) => {
      state.tempError = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getCurrentTemp.pending, (state) => {
      state.tempLoading = true;
      state.tempError = null;
    });
    builder.addCase(getCurrentTemp.fulfilled, (state, action) => {
      const tempInKelvin = Number(action.payload.main.temp);
      const tempInCelsius = Math.ceil(tempInKelvin - 273.15)
      state.temp = tempInCelsius
      state.city = action.payload.name
      state.tempLoading = false;
      state.tempError = null;
    });
    builder.addCase(getCurrentTemp.rejected, (state, action) => {
      state.tempLoading = false;
      state.tempError = action.payload
    });
  },
});


export default tempReducer.reducer;

export const { setTempError } = tempReducer.actions