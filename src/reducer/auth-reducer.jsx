export const authReducer = (state, action) => {
    switch (action.type) {
      case "OPEN_LOGIN_SIGNUP":
        return {
          ...state,
          openLoginSignup: !state.openLoginSignup,
        };
  
        case "OPEN_SIGN_UP":
          return{
            ...state,
            selectedtab: "signup"
          }

          case "OPEN_LOG_IN":
            return{
              ...state,
              selectedtab: "login"
            }

          case "OPEN-SIGN-LOGIN":
            return{
              ...state,
              isclosetap: !state.isclosetap
            }
      default:
        return state;
    }
  };
  
  export default authReducer;