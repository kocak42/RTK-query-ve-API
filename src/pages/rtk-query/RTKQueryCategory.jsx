import { useParams } from "react-router-dom"
import Row from "../../compenents/Row"
import CatCard from "../../compenents/CatCard"
import { useFetchCategoryQuery } from "../../store/catApi/carApiSlicer"
import LoadingComponent from "../../compenents/LoadingCompenet"



export default function RTKQueryCategory() {
  const {categoryName}=useParams()
  const{data,isLoading,isError,error}=useFetchCategoryQuery(categoryName)
 
  return (

    <div className="col-sm-12 ">
      <h1>RTK Query: kategori: {categoryName}</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <Row className="row-cols-sm-3">
      {data?.map(item => 
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

