import { createAction } from 'redux-actions';
import cookies from 'js-cookie';
import axios from 'axios';
import routes from '../routes';

export const getGonData = createAction('GET_GON_DATA');
export const addNewMessage = createAction('ADD_NEW_MESSAGE');

export const sendMessage = ({ currentChannel, text }) => async (dispatch) => {
  try {
    const author = cookies.get('username');
    const data = await axios.post(routes.channelMessagesPath(currentChannel), {
      data: {
        attributes: {
          author,
          text,
        },
      },
    });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
