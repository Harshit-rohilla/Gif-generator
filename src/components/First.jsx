import {useState, useEffect} from "react"
import Loader from "./Loader"
function First({API_KEY}){
  const[gifImg,changeGifImg]=useState("")
  const[loading,changeLoading]=useState(false)
  
  useEffect(()=>{
    changeLoading(true)
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    .then((res)=>res.json())
    .then((val)=>{changeGifImg(val.data.images.original.url);changeLoading(false)})
    .catch((err)=>{console.log(err);changeLoading(false)})
    
  },[])
  function btnClicked(){
    changeLoading(true)
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    .then((res)=>res.json())
    .then((val)=>{changeGifImg(val.data.images.original.url);changeLoading(false)})
    .catch((err)=>{console.log(err);changeLoading(false)})
    
  }
    return(
        <>
        <div className="w-1/2 py-6 flex flex-col gap-y-4 items-center bg-green-600 border rounded-md border-blue-500">
            <h1 className="text-blue-900 underline text-center font-semibold">A RANDOM GIF</h1>
            {loading?(<Loader/>):(<img src={gifImg} alt="gif" className="h-48 w-96"/>)}
            <button onClick={btnClicked} className="bg-slate-300 py-1 text-center w-3/4 rounded-md">GENERATE</button>
        </div>
        </>
    )
}
export default First