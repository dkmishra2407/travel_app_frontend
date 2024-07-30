export const DateReducer = (state, { type, payload }) => {
  
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
      
    case "SEARCH_CLICKED":
      return{
        ...state,
        isSearchModalopen: false,
      }
    default:
      return state;
  }
};

export default DateReducer;