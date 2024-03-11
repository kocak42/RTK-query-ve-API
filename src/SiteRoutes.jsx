import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePages";
import FetchCategories from "./pages/fetch/FetchCategories";
import FetchCategory from "./pages/fetch/FetchCategory";
import AxiosCategories from "./pages/axios/AxiosCategories";
import AxiosCategory from "./pages/axios/AxiosCategory";
import RTKQueryCategories from "./pages/rtk-query/RTKQueryCategories";
import RTKQueryCategory from "./pages/rtk-query/RTKQueryCategory";


export default function SiteRoutes(){

  return(
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route  path="/fetch-categories" element={<FetchCategories />} />
    <Route path="/fetch-category/:categoryName" element={<FetchCategory />} />
    <Route path="/axios-categories" element={<AxiosCategories />} />
    <Route path="/axios-category/:categoryName" element={<AxiosCategory />} />
    <Route path="/rtk-query-categories" element={<RTKQueryCategories />} />
    <Route path="/rtk-query-category/:categoryName" element={<RTKQueryCategory />} />
  </Routes>
  )
}