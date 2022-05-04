const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  SettingsData: {
    id: 1,
    logo: 'https://img.innoloft.com/logo.svg',
    mainColor: '#272e71',
    hasUserSection: true
  }
};

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setData(state, action) {
      state.SettingsData = action.payload.data;
    }
  }
});

export const settingActions = settingSlice.actions;
export default settingSlice.reducer;
