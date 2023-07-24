import { useEffect, useState } from "react";
import { FETCHING_SPECIFIC_CATEGORY } from "../utils/Constant";
import { useLocation } from "react-router-dom";
const useloadingAllCatProducts = () => {
  const [productData, setProductData] = useState(null);

  const location = useLocation();

  const category = location.pathname.split("/")[2];

  useEffect(() => {
    loadAllSmartPhones();
  }, [category]);

  const loadAllSmartPhones = async () => {
    try {
      const response = await fetch(FETCHING_SPECIFIC_CATEGORY + category);
      const data = await response.json();
      setProductData(() => data?.products);
    } catch (err) {
      console.log(err);
    }
  };

  return [productData, category];
};
export default useloadingAllCatProducts;
