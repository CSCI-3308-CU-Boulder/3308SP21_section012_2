import React, { useState, useEffect} from 'react'
import styles from './index.module.css'
import { connect } from 'react-redux'
import SearchBar from '../../../components/searchBar'
import { searchSongsRequested } from '../redux/Actions/UserActions.js'
import { getPlaybackInfoRequested , playbackActions, playSongRequested } from '../redux/Actions/PlaybackActions.js'
import {Tabs, Tab, Button} from '@material-ui/core'


const Discover = (props) => {
    const {searchSongs, getPlaybackInfo, token, searchedSongs, playSong, currentlyPlaying, availableDevices,userId} = props
    const [searchValue, setSearchValue] = useState('') 
    const [selectedSong, setSelectedSong] = useState('')
    useEffect(() => {
        getPlaybackInfo(token)
        if(searchValue){
            searchSongs(token,searchValue)
        }
    },[searchValue])
    console.log(userId)
    return(
        <div className={styles.row1}>
            <div className={styles.header}>
                <>
                    <img src={currentlyPlaying?.album?.images[1].url} className={styles.pic}/>
                    <p>{currentlyPlaying?.name}</p>
                </>
                <SearchBar
                    setSearchValue={setSearchValue}
                />

                { searchValue &&
                    searchedSongs.map((song, key) => (
                        <div className={styles.row} key={key} >
                            <img src={song.album.images[0].url} className={styles.smallPic}/>
                            <p onClick={() => {
                                    playSong(token,0,song?.uri,song,'play');      
                                    setSelectedSong(song)
                                }}>{song.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className={styles.timestamp}>
            <Button 
                variant='contained' 
                className={styles.timestampButton}
                onClick={() => getPlaybackInfo(token,1,userId)}
                >
                Timestamp
            </Button>

            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchSongs: (token, searchValue) => dispatch(searchSongsRequested(token,searchValue)),
        getPlaybackInfo: (token,create,userId) => dispatch(getPlaybackInfoRequested(token,create,userId)),
        playSong: (token, deviceId, songURI, song) => dispatch(playSongRequested(token, deviceId, songURI,song))
    }
}
const mapStateToProps = (state) => {
    return {
        token:state.User.token,
        searchedSongs:state.User.searchedSongs,
        availableDevices: state.Player.availableDevices.devices,
        currentlyPlaying: state.Player.playbackInfo.item,
        availableDevices: state.Player.availableDevices,
        userId: state.User.databaseUser.userId,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Discover);