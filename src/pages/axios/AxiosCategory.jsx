import { useParams } from "react-router-dom"
import LoadingComponent from "../../compenents/LoadingCompenet"
import Row from "../../compenents/Row"
import CatCard from "../../compenents/CatCard"
import useCategoryAxiosApi from "../../axiosCustomHooks/useCategoryAxiosApi"

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL
const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY


export default function AxiosCategory() {
  const {categoryName}=useParams()
  const[data,isLoading,isError,error]=useCategoryAxiosApi(categoryName)
 
console.log(data)

  return (

    <div className="col-sm-12 ">
      <h1>Fetch: kategori: {categoryName}</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <Row className="row-cols-sm-3">
      {data.map(item => 
      <CatCard 
      key={item.id}
       imgSrc={item.url} 
       name={item.breeds[0].name} 
       description={item.breeds[0].description}
       origin  ={item.breeds[0].origin} 
        /> )}
      </Row>
    </div>
  )
}

