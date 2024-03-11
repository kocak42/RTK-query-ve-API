import { Link } from "react-router-dom"
import useCategoriesAxiosApi from "../../axiosCustomHooks/useCategoriesAxiosApi"
import LoadingComponent from "../../compenents/LoadingCompenet"


export default function AxiosCategories() {
  const[data,isLoading,isError,error]=useCategoriesAxiosApi()
  console.log(data)
  return (
      
      <div className="col-sm-8 ">
         <div className="col-sm-8 ">
      <h1>Axios kategori</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}

      <ul className="list-group">
       {data.map(item=><li className="list-group-item" key={item.id}>
        <Link to={`/axios-category/${item.id}`}>{item.name} </Link>
        </li>)}
      </ul>
    </div>
      </div>
  )
}


