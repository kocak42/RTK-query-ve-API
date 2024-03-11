import { Link } from "react-router-dom"
import LoadingComponent from "../../compenents/LoadingCompenet"
import UseCategoriesFetchApi from "../../customHooks/useCategoriesFetchApi"

export default function FetchCategories() {
const[data,isLoading,isError,error]=UseCategoriesFetchApi()

  return (

    <div className="col-sm-8 ">
      <h1>Fetch kategori</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <ul className="list-group">
       {data.map(item=><li className="list-group-item" key={item.id}>
        <Link to={`/fetch-category/${item.id}`}>{item.name} </Link>
        </li>)}
      </ul>
    </div>
  )
}

