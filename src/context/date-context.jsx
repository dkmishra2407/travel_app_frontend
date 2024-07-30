import { createContext, useContext, useReducer } from "react";
import DateReducer from "../reducer/Date-reducer"

const initialstate = {
  destination: "",
  guests: 0,
  checkInDate: null,
  checkOutDate: null,
  isSearchModalopen: false,
  isdateinfocus: true,
  isdestinationisfocus: false
}
const DateContext = createContext(initialstate);

const DateProvider = ({ children }) => {

  const [{isdateinfocus,isdestinationisfocus,destination,guests,checkInDate,checkOutDate,isSearchModalopen},dateDispatch] = useReducer(DateReducer,initialstate);
  return (
    <DateContext.Provider value={{isdateinfocus,isdestinationisfocus,destination,guests,checkInDate,checkOutDate,isSearchModalopen,dateDispatch}}>
      {children}   
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);

export { useDate, DateProvider };
