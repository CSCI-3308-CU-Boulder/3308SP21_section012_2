import React, { useState, useEffect} from 'react'
import styles from './index.module.css'
import { connect } from 'react-redux'
import SearchBar from '../../../components/searchBar'
import { searchSongsRequested } from '../redux/Actions/UserActions.js'
import { getPlaybackInfoRequested, playSongRequested, setSelectedSong } from '../redux/Actions/PlaybackActions.js'
import { Input } from 'reactstrap'
import { Button } from '@material-ui/core'


const Discover = (props) => {
    const {searchSongs, getPlaybackInfo, token, searchedSongs, playSong, currentlyPlaying,userId, setSelectedSong} = props
    const [searchValue, setSearchValue] = useState('') 
    useEffect(() => {
        getPlaybackInfo(token)
        if(searchValue){
            searchSongs(token,searchValue)
        }
    },[searchValue])
    return(
        <>
        <div className={styles.row1}>
            <div >
                <>
                    {currentlyPlaying && <img src={currentlyPlaying?.album?.images[1].url} className={styles.pic}/>}
                    <p className={styles.header}> {currentlyPlaying?.name}</p>
                </>
                <div className={styles.searchBar}>
                    <SearchBar
                        setSearchValue={setSearchValue}
                    />
                </div>
                <div className={styles.searchResults}>
                    { searchValue &&
                        searchedSongs.map((song, key) => (
                            <div 
                                className={styles.row} key={key} 
                                style={{cursor:'pointer', backgroundColor: 'white', marginBottom:'20px', borderRadius:'20px', width: '375px'}}
                                onClick={() => { 
                                    setSelectedSong(song.track_number-1,song.album.uri,song)
                                }}
                            >

                                <img src={song.album.images[0].url} className={styles.smallPic}/>
                                <p
                                style={{cursor:'pointer', marginTop:'10px', marginLeft:'20px'}}>{song.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.timestamp}>
            <Button
                style={{height: '75px', width: '150px', margin: "20px"}}
                variant='contained' 
                className={styles.timestampButton}
                onClick={() => getPlaybackInfo(token,1,userId)}
                >
                Timestamp
            </Button>

            </div>
        </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchSongs: (token, searchValue) => dispatch(searchSongsRequested(token,searchValue)),
        getPlaybackInfo: (token,create,userId) => dispatch(getPlaybackInfoRequested(token,create,userId)),
        playSong: (token, deviceId, songURI, song) => dispatch(playSongRequested(token, deviceId, songURI,song)),
        setSelectedSong: (token, songURI, song) => dispatch(setSelectedSong(token, songURI, song))
    }
}
const mapStateToProps = (state) => {
    return {
        token:state.User.token,
        searchedSongs:state.User.searchedSongs,
        availableDevices: state.Player.availableDevices.devices,
        currentlyPlaying: state.Player.playbackInfo?.item,
        availableDevices: state.Player.availableDevices,
        userId: state.User.databaseUser.userId,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Discover);
