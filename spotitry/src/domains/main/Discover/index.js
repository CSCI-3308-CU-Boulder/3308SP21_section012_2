import React, { useState, useEffect} from 'react'
import styles from './index.module.css'
import { connect } from 'react-redux'
import SearchBar from '../../../components/searchBar'
import { searchSongsRequested } from '../redux/Actions/UserActions.js'
import { getPlaybackInfoRequested, playSongRequested, setSelectedSong } from '../redux/Actions/PlaybackActions.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, InputGroupAddon, InputGroup, Button, Card, CardImg, CardTitle } from 'reactstrap'
// import { Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


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
        <div style={{width: '100%', display: 'flex'}}>
            <div className={styles.container} style={{width: '50%'}}>
                <>
                    <img src={currentlyPlaying?.album?.images[1].url} className={styles.pic}/>
                    <p>{currentlyPlaying?.name}</p>
                </>
                {/* <SearchBar
                    setSearchValue={setSearchValue}
                /> */}
                    <InputGroup style={{width: '100%'}}>
                        <InputGroupAddon addonType="append">
                            <Button>
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </Button>
                        </InputGroupAddon>
                        <Input placeholder = "Search" onChange={(event) => {
                            console.log(event.target.value)
                            var temp = {setSearchValue}
                            searchSongs(temp)
                            setSearchValue(event.target.value)
                        }}></Input>
                    </InputGroup>

                <br></br>        

                { searchValue &&
                    searchedSongs.map((song, key) => (
                        // <div className={styles.container} key={key} >
                            <Card style={{width:'200px', marginBottom: '10px'}} key={key}>
                            <CardImg top width="200px" src={song.album.images[0].url} alt="Album Cover" style={{width:'200px',padding:'none'}} className={styles.images}/>
                            {/* <img src={song.album.images[0].url} className={styles.smallPic}/> */}
                            <CardTitle
                            style={{cursor:'pointer'}}
                            onClick={() => { 
                                    setSelectedSong(song.track_number-1,song.album.uri,song)
                                }}>{song.name}</CardTitle>
                            </Card>
                        // </div>
                    ))
                }
            </div>
            <div className={styles.container} style={{width: '50%'}}>
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
