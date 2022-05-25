import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please fill in all values!',
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };

    default:
      return state;
  }
};

export default reducer;
