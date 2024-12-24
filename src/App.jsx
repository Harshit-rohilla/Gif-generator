import First from "./components/First"
import Second from "./components/Second"
function App(){
  const API_KEY=import.meta.env.VITE_API_KEY
  
  return(
    <>
    <div className="bg-gray-900 w-full flex flex-col items-center gap-y-8">
      <h1 className="w-11/12 py-2 mt-8 text-center  bg-white rounded-xl font-bold text-2xl">RANDOM GIFS</h1>
      <First API_KEY={API_KEY}/>
      <Second API_KEY={API_KEY}/>
    </div>
    </>
  )
}
export default App