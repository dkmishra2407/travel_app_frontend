export const authReducer = (state, action) => {
    switch (action.type) {
      case "OPEN_LOGIN_SIGNUP":
        return {
          ...state,
          openLoginSignup: !state.openLoginSignup,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;