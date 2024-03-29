import { useEffect, useState } from "react"
import { axiosCatApi } from "./axiosApi"
import axios from "axios"


export default function useCategoriesAxiosApi(){
  const [data, SetData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState()

  const getApiData = async () => {
   try{
    const response=await axiosCatApi('/breeds')
    const responseData=await response?.data
    SetData(responseData)
    setIsLoading(false)

   }catch(err){
    setIsError(true)
    setError("Veri Alinamadi")
    throw new Error(err)
   }
  }

  useEffect(() => {
     getApiData()
  }, [])

  return[data,isLoading,isError,error]
}