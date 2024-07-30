export const DateReducer = (state, { type, payload }) => {
  console.log("Current State:", state);
  console.log("Action Type:", type);
  console.log("Payload:", payload);
  
  switch (type) {
    case "OPEN_SEARCH_MODAL":
      return {
        ...state,
        isSearchModalopen: !state.isSearchModalopen,
      };
      
    case "CHECK_IN":
      return {
        ...state,
        checkInDate: payload,
      };

    case "CHECK_OUT":
      return {
        ...state,
        checkOutDate: payload,
      };

    case "DESTINATION":
      return{
        ...state,
        destination : payload
      } 

    case "GUESTS":
      return{
        ...state,
        guests : payload
      }

    case "DATE_FOCUS":
      return{
        ...state,
        isdateinfocus : false
      }
      
    case "RESULT_IN_FOCUS":
      return{
        ...state,
        isdestinationisfocus :true
      }
      
    default:
      return state;
  }
};

export default DateReducer;