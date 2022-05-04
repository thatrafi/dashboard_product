import { settingActions } from 'reducers/settingReducer';

const BASE_URL = 'https://api-test.innoloft.com';
// eslint-disable-next-line no-undef
const APP_ID = process.env.REACT_APP_APP_ID ? process.env.REACT_APP_APP_ID : 1;

export const getSettingAsync = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`${BASE_URL}/configuration/${APP_ID}/`, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Getting setting data failed');
      }
      const data = response.json();
      return data;
    };
    try {
      const responseData = await sendRequest();
      dispatch(settingActions.setData({ data: responseData }));
    } catch (error) {
      console.log(error.message);
    }
  };
};
