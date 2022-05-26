import './Player.css'
import { useRef, useState, useEffect } from 'react'
import PlayerDetails from '../PlayerDetails/PlayerDetails'
import Controls from '../controls/Controls'

const Player = (props) => {

    const audioEl = useRef(null)
    const [ isPlaying ,setIsplaying ] = useState(false)

    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play()
        }
        else {
            audioEl.current.pause()
        }
    })

    const skipSong = (forward  = true) => {
        console.log(props.currentSong)
        if(forward){
            props.setCurrentsong(()=>{

                let temp = props.currentSong
                temp++
                
                if(temp > props.song.length-1){
                    temp = 0
                }
                return temp
            })
        }
        else {
            props.setCurrentsong(()=>{

                let temp = props.currentSong
                temp--
                if(temp < 0){
                    temp = props.song.length-1
                }
               
                return temp
            })

        }
    }

    return (
        <div className='player'>
            
            <audio autoplay src={props.song[props.currentSong].song} ref={audioEl}/>
            <PlayerDetails song = {props.song[props.currentSong]} />
            <Controls isPlaying = {isPlaying} setIsplaying = {setIsplaying} skipSong = {skipSong}/>
        </div>
    )
}

export default Player