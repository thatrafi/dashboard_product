const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  ProductData: {},
  PostResponse: null
};

const productSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    setData(state, action) {
      state.ProductData = action.payload.data;
    },
    updateDescription(state, action) {
      state.ProductData.description = action.payload.data;
    },
    updateCategories(state, action) {
      state.ProductData.categories = action.payload.data;
    },
    updateBusinessModels(state, action) {
      state.ProductData.businessModels = action.payload.data;
    },
    updateTrls(state, action) {
      state.ProductData.trl = action.payload.data;
    },
    setPostResponse(state, action) {
      state.PostResponse = action.payload.data;
    }
  }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
