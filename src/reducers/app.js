const initialState = {
  zIndex: 0
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
    case 'TOUCH_NOTE':
      return {
        zIndex: state.zIndex + 1
      }
    default:
      return state;
  }
}

export default app;
