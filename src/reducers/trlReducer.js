const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  TrlsData: {}
};

const trlSlice = createSlice({
  name: 'trls',
  initialState,
  reducers: {
    setData(state, action) {
      state.TrlsData = action.payload.data;
    }
  }
});

export const trlActions = trlSlice.actions;
export default trlSlice.reducer;
