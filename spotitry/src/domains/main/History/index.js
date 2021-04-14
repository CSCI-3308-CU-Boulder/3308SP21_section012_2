import React, {useState, Component, useEffect } from 'react'
import styles from '../History/index.module.css'
import { connect } from 'react-redux'
import { getProfileRequested, StoreToken } from '../redux/Actions/UserActions'
import { playSongRequested, setSelectedSong } from '../redux/Actions/PlaybackActions'
import { InputGroup, InputGroupAddon,Input, Button, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import DisplayCard from '../../../components/DisplayCard';

const History = (props) => {
    const {token,history, playSong, StoreToken, setSelectedSong, selectedSong} = props
    const [myHistory, setMyHistory] = useState(history)
    const [searchValue,setSearchValue] = useState('')
    useEffect(() => {
        StoreToken(token)
    },[])
    useEffect(() => {
        if(!searchValue){
            setMyHistory(history)
        }
    },[searchValue])
    return(
    
        <div className={styles.container}>     
            <div>
                <InputGroup style={{width: '50%'}}>
                    <InputGroupAddon addonType="append">
                        <Button>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </Button>
                    </InputGroupAddon>
                    <Input placeholder = "Search" onChange={(event) => {
                        console.log(event.target.value)
                        var temp = history?.filter((track) => (track.track.name.toLowerCase().includes(event.target.value.toLowerCase())))
                        setMyHistory(temp)
                        setSearchValue(event.target.value)
                    }}></Input>
                </InputGroup>
            </div>
            <Row>
                {myHistory.slice(0,20).map((track,key) => {
                    var song = track.track
                    var album = song?.album
                    var artist = song?.artists[0]
                    var featuredArtists = song?.artists.splice(0,1)
                    var songName = song?.name
                    var albumCover = album?.images[0]?.url
                    return(
                        <div className={styles.outerDiv} key={key}>
                            <DisplayCard
                                trackName = {songName}
                                albumCover = {albumCover}
                                artistName = {artist?.name ? artist.name:album.artists[0].name}
                                albumName = {album.name}
                                token = {token}
                                track = {song}
                                setSelectedSong = {setSelectedSong}
                                selectedSong={selectedSong}
                            />
                        </div>
                    )
                })}
            </Row> 
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
  return {
      playSong: (token, deviceId, songURI, song) => dispatch(playSongRequested(token, deviceId, songURI,song)),
      refetchUser: (token) => dispatch(getProfileRequested(token)),
      StoreToken: (token) => dispatch(StoreToken(token)),
      setSelectedSong: (token, songURI, song) => dispatch(setSelectedSong(token, songURI, song))
  }
}
const mapStateToProps = (state) => {
  return {
      history: state.Player.recentlyPlayed,
      token:state.User.token,
      selectedSong:state.Player.selectedSong
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(History);
