import axios from "axios";
import { useEffect, useState } from "react";
import "./Catagories.css"
import { useCategory } from "../../context/catagory-context";

export const Catagories = () => {
  const [categories, setCategories] = useState([]);
  const [NumberofCatagoriesToshow,setNumberofCatagoriesToshow] = useState(0);
  const {HotelCatagory , setHotelCategory } = useCategory();
   const handleshowmorerightbutton = () =>{
        setNumberofCatagoriesToshow((prev)=>prev + 10);
   }

   const handleshowmoreleftbutton = () =>{
        setNumberofCatagoriesToshow((prev) => prev - 10);
   }

   const handleCategoryClick = (category) => {
    setHotelCategory(category);
   };

// Optionally, log the updated hotelCategory
useEffect(() => {
    console.log("Updated hotelCategory:", HotelCatagory);
}, [HotelCatagory]);
  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get("http://localhost:3500/api/catagories");
        const catagoriesTOshow = data.slice(NumberofCatagoriesToshow,NumberofCatagoriesToshow + 10);
        setCategories(catagoriesTOshow);
        console.log("categories data", catagoriesTOshow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [NumberofCatagoriesToshow]);

  return (
    <div className="catgories-container d-flex align-center gap-large cursor-pointer">
      {
        NumberofCatagoriesToshow >= 10 && (
          <div>
             <span class="button btn-catagory btn-left material-symbols-outlined" onClick={handleshowmoreleftbutton}>chevron_left</span>
          </div>
        )
      }
      {categories.map((category) => (
        <div key={category._id} className={`${HotelCatagory === category.category ? "boreder-bottom" : " "}`} onClick={() => handleCategoryClick(category.category)}>{category.category}</div>
      ))}
      {
        NumberofCatagoriesToshow < 20 && (
          <div>
             <span class="button btn-catagory btn-right material-symbols-outlined" onClick={handleshowmorerightbutton}>chevron_right</span>
          </div>
        )
      }
    </div>
  );
};

