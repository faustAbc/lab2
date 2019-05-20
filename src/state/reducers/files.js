import { CHANGE_THEME_ACTION } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_THEME_ACTION:
      return {
        ...state,
        files: action.files
      };

    default:
      return state;
  }
};

export default reducer;