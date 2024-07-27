import { createContext, useContext, useState } from "react";

const initvalue = "Tiny Homes";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [hotelCategory, setHotelCategory] = useState(initvalue);
  return (
    <CategoryContext.Provider value={{ hotelCategory, setHotelCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };