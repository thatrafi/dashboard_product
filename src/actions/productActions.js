import { productActions } from 'reducers/productReducer';

const BASE_URL = 'https://api-test.innoloft.com';

export const getProductDetailAsync = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`${BASE_URL}/product/6781/`, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Getting product data failed');
      }
      const data = response.json();
      return data;
    };
    try {
      const responseData = await sendRequest();
      dispatch(productActions.setData({ data: responseData }));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const putProductDetailAsync = (postData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`${BASE_URL}/product/6781/`, {
        method: 'PUT',
        body: JSON.stringify(postData)
      });
      if (!response.ok) {
        throw new Error('Updating product data failed');
      }
    };
    try {
      await sendRequest();
      dispatch(
        productActions.setPostResponse({
          data: { isError: false, message: 'Success Updating Data!', result: postData }
        })
      );
    } catch (error) {
      productActions.setPostResponse({
        data: { isError: true, message: error.message, result: null }
      });
    }
  };
};
