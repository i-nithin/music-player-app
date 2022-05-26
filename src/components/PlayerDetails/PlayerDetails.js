import './playerdetails.css'

const PlayerDetails = (props) => {
    return(
       <div className='ply-details'>
           <div className="details-img"><img  src={props.song.image}/></div>
           <div className='song-details'>
               <h2>{props.song.title}</h2>
               <h4>{props.song.singer}</h4>
           </div>
       </div>
    )
}

export default PlayerDetails