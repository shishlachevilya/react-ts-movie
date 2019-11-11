const initialState = {
  theme: 'light',
  isOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIGHT_THEME':
      return {
        ...state,
        theme: 'light'
      };
    case 'SET_DARK_THEME':
      return {
        ...state,
        theme: 'dark'
      };
    default:
      return state
  }
};

export default reducer;
