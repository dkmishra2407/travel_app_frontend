import { createContext, useContext, useReducer } from "react";
import DateReducer from "../reducer/Date-reducer"

const initialstate = {
  checkInDate: null,
  checkOutDate: null,
  isSearchModalopen: false
}
const DateContext = createContext(initialstate);

const DateProvider = ({ children }) => {

  const [{checkInDate,checkOutDate,isSearchModalopen},dataDispatch] = useReducer(DateReducer,initialstate);
  return (
    <DateContext.Provider value={{checkInDate,checkOutDate,isSearchModalopen,dataDispatch}}>
      {children}   
      {/* HERE CHILDREN IS THE ENTIRE APP  */}
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);

export { useDate, DateProvider };