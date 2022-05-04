import { trlActions } from 'reducers/trlReducer';

const BASE_URL = 'https://api-test.innoloft.com';

export const getTrlAsync = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`${BASE_URL}/trl/`, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Getting trls data failed');
      }
      const data = response.json();
      return data;
    };
    try {
      const responseData = await sendRequest();
      dispatch(trlActions.setData({ data: responseData }));
    } catch (error) {
      console.log(error.message);
    }
  };
};
