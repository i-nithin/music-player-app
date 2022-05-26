import React, {useState,useEffect} from 'react'
import Player from './components/Player/Player'
import Songlist from './components/songlist/Songlist'
import data from './data'

const App = () => {

  const [ song, setSong ] = useState(data)
  const [ currentSong, setCurrentsong ] = useState(0)
  const [ nextsong, setNextsong ] = useState(currentSong+1)


  useEffect(()=> {
    setNextsong(()=>{
      if(currentSong > song.length-1){
        return 0 
      }
      else {
        return currentSong +1
      }
    })
  },[currentSong])

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 720;

useEffect(() => {
  const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(handleWindowResize));

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  

return (

    <div className="section">
      {width < breakpoint ? null : <Songlist songs = {song} currentSong ={currentSong} />}
      

      {/* {width < breakpoint ? null :<Player  song = {song} nextsong = {nextsong}  currentSong= {currentSong} setCurrentsong={setCurrentsong}/> } */}
      <Player  song = {song} nextsong = {nextsong}  currentSong= {currentSong} setCurrentsong={setCurrentsong}/> 
    </div>

)

}


export default App