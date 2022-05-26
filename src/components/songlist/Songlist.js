import './songlist.css'
import data from '../../data'
import Controls from '../controls/Controls'
const Songlist = ({songs ,width}) => {
    return(
        <div className='song-list'>
            <div className='logo'></div>

            <div className="head">
                    <h3>YOUR SONGS</h3>
                </div>
                
            <div className='songs'>

                {/* <div className="head">
                    <h3>YOUR SONGS</h3>
                </div>
                <div className='search-bar'>
                    <input />
                </div> */}
                {
                    songs.map(music => {

                        const {title,image,singer,song,id} = music
                        return(
                            <div className='list' key={id}>
                                 <div className='li'>
                                     <div className='pic'>
                                         <img src={image} alt = "I" />
                                     </div>
                                     <div className='details'>
                                          <h4>{title}</h4>
                                          <h6>by {singer}</h6>
                                     </div>                    
                                 </div>
                            </div>
                        )
                    })
                }               
            </div>

        </div>
    )
}

export default Songlist