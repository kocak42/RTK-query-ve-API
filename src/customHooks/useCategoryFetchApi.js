import { useEffect, useState } from "react"

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL
const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY

export default function UseCategoryFetchApi(categoryName){
  const [data, SetData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState()

  const getApiData = async () => {
    
    const fetchInfo={
      
        headers:{
          "x-api-key":VITE_CAT_API_KEY
        }
      
    }
    
    const response = await fetch(
      `${VITE_CAT_API_URL}/images/search?limit=10&breed_ids=${categoryName}`,
      fetchInfo
      )
    const responseData = await response.json()
    if (!response.ok) {
      setIsError(true)
      setError("Veri Alinamadi")
      throw new Error("Veri Alinamadi")
    }
    
    SetData(responseData)
    setIsLoading(false)
  }

  useEffect(() => {
    getApiData()
    
    
  }, [])

  return[data,isLoading,isError,error]
}