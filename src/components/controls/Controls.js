import './controls.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause, faForward, faBackward, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Controls = (props) => {

    const [ liked, setLiked ] = useState(false)
    return(
        <div className='controls'>
            <div className='progress-bar'>
            <input type="range" min="0" max="100" value="60" />
            </div>
            <div className='btn-ctn'> 
                <div className='btn1'></div>
                <div className='btn2'>
                    <button className='skip-btn' onClick={()=> props.skipSong(false)} ><FontAwesomeIcon icon={faBackward}/></button>
                    <button className='play-btn' onClick={()=>props.setIsplaying(!props.isPlaying)}> <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay}/> </button>
                    <button className='skip-btn'  onClick={()=> props.skipSong()}><FontAwesomeIcon icon={faForward}/></button>
                </div>
                <div className='btn1'>
                    <button className='like-btn' onClick={()=>setLiked(!liked)} style={{color: liked ? 'red' : 'white'}}><FontAwesomeIcon icon={faHeart}/></button>
                </div>
            </div>
        </div>
    )
}

export default Controls