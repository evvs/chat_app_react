import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const getGonData = createAction('GET_GON_DATA');
export const addNewMessage = createAction('ADD_NEW_MESSAGE');
export const changeChannel = createAction('CHANGE_CHANNEL')

export const sendMessage = ({ currentChannel, text, author }) => async (dispatch) => {
  try {
    await axios.post(routes.channelMessagesPath(currentChannel), {
      data: {
        attributes: {
          author,
          text,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const loadMessages = (channelId) => async (dispatch) => {
  try {
    const {messages} = await axios.get(routes.channelMessagesPath(channelId));
    console.log('hello from load!!!!!', messages)
  } catch (e) {
    console.log(e);
  }
}
