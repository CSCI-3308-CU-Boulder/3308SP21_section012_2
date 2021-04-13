import React, { useEffect, useState } from 'react'
import styles from '../Timestamps/index.module.css'
import { connect } from 'react-redux'
import { getProfileRequested } from '../redux/Actions/UserActions'
import { playSongRequested } from '../redux/Actions/PlaybackActions'
import { InputGroup, InputGroupAddon, Input, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getTimestamps } from '../../../firebase'

const Timestamps = (props) => {
    const {token, timestamps, refetchUser,playSong} = props
    const [timestampsBySong,setTimeStampsBySong] = useState([])
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {   
        if(!searchValue && timestamps){
            var tempArr2 = []
            var tempArr = Object?.values(timestamps)
            console.log(tempArr)
            tempArr.map((timestamps) => (
                tempArr2.push(Object?.values(timestamps))
            ))
               setTimeStampsBySong(tempArr2)

        }

    },[timestamps,searchValue])
    useEffect(() => (
        refetchUser(token)
    ),[])
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    console.log(timestampsBySong)
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
                        var temp = timestampsBySong.filter((timestamps) => (timestamps[0].song.name.toLowerCase().includes(event.target.value.toLowerCase())))
                        setTimeStampsBySong(temp)
                        setSearchValue(event.target.value)
                    }}></Input>
                </InputGroup>
            </div>
            <div>
                {timestampsBySong?.length != 0 && 
                timestampsBySong?.map((timestamps) => {
                    var timestamps = Object.values(timestamps)
                    console.log(timestamps)
                    var song = timestamps[0]?.song
                    var album = song?.album
                    var artist = song?.artists[0]
                    var featuredArtists = song?.artists.splice(0,1)
                    var songName = song?.name
                    var albumCover = album?.images[0]?.url
                    return(
                        <div className={styles.container}>
                            <Card>
                                <CardImg top width="100%" src={albumCover} alt="Album Cover" style={{width:'200px',padding:'none'}} className={styles.image}/>
                                <CardBody>
                                    <CardTitle tag="h5">{songName}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{timestamps[0]?.song.artists[0]?.name}</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{album?.name}</CardSubtitle>
                                    <CardText>Timestamps:</CardText>
                                    {timestamps.map((timestamp, key) => {
                                        var totalTime = song.duration_ms
                                        var timeSet = timestamp.position_ms
                                        var track = song
                                        // console.log(timeSet)
                                        return(
                                            <div className="column">
                                                <Button
                                                    onClick={() => {console.log(timeSet);playSong(token,timeSet,track?.uri,track)}}
                                                >
                                                    Timestamp #{key+1} {millisToMinutesAndSeconds(timeSet)} of {millisToMinutesAndSeconds(totalTime)}
                                                </Button>

                                            </div>
                                        )
                                    })

                                    }
                                </CardBody>
                            </Card>
                        </div>
                    )
                })}
                <br></br>
            </div>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        playSong: (token, deviceId, songURI, song) => dispatch(playSongRequested(token, deviceId, songURI,song)),
        refetchUser: (token) => dispatch(getProfileRequested(token))
    }
}
const mapStateToProps = (state) => {
    return {
        timestamps:state.User.databaseUser.timestamps,
        token:state.User.token,

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Timestamps);
