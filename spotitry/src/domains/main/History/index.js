import React, {useState, Component, useEffect } from 'react'
import styles from '../History/index.module.css'
import { connect } from 'react-redux'
import { getProfileRequested } from '../redux/Actions/UserActions'
import { playSongRequested } from '../redux/Actions/PlaybackActions'
import {Table, InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const History = (props) => {
  const {token, timestamps, refetchUser,playSong} = props
  console.log(token)

  // useEffect(() => {
  //     refetchUser(token)
  // },[])
  // var arrTimestamps = Object.values(timestamps)
  // console.log(arrTimestamps)
  
  return(
  
      <div className={styles.container}>     
          <div>
              <InputGroup style={{width: '50%'}}>
                  <InputGroupAddon addonType="append">
                      <Button>
                          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                      </Button>
                  </InputGroupAddon>
                  <Input placeholder = "Search"></Input>
              </InputGroup>
          </div>
          <div>
            <div className={styles.container}>
                <Card>
                    <CardImg top width="100%" src="" alt="Album Cover" />
                    <CardBody>
                        <CardTitle tag="h5">{}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
          <br></br>
      </div>
  </div>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
      // getTopArtists: (token) => dispatch(getTopArtistsRequested(token)),
      // getTopTracks: (token) => dispatch(getTopTracksRequested)
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
export default connect(mapStateToProps,mapDispatchToProps)(History);

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width-device-width, initial-scale=1">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//     <title>Spotify User History</title>

//     <!-- CSS sheet -->
//     <link rel="stylesheet" href="./css/style.css" />

//     <!-- jQuery Library -->
//     <script
//       src="https://code.jquery.com/jquery-3.2.1.min.js"
//       integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
//       crossorigin="anonymous"></script>

//     <!-- Main JS App -->
//     <script type="text/javascript" src="./js/app.js"></script>

//     <!-- Handlebards cdnjs Cloudflare -->
//     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.8/handlebars.runtime.min.js"></script>

//     <!-- pre-compiled templates -->
//     <script src="./js/templates/templatesCompiled.js"></script>
    
//   </head>
  
//   <body>
//     <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
//       <ul class="navbar-nav">
//         <li class="nav-item active">
//           <a class="nav-link" href="ADD ACCOUNT PAGE PATH HERE">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="ADD ACCOUNT PAGE PATH HERE">Account</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="ADD ACCOUNT PAGE PATH HERE">Discover</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="ADD ACCOUNT PAGE PATH HERE">Friends</a>
//         </li>
//         <li class="nav-item active">
//           <a class="nav-link" href="#">History</a>
//         </li>
        
//       </ul>
      
//       <ul class="nav navbar-nav ml-auto">
//         <a href="https://open.spotify.com/">
//           <img src="SPOTIFY LOGO PNG" class="float-right" width="40" alt="Spotify Web link">
//         </a>
//       </ul>
//     </nav>
    
//     <br>
//     <div class="container">
//       <h1 style="display:inline;">INSERT USERNAME HERE - </h1><h4 style="color:grey;display:inline;">Listening History</h4>
//       <br><br><div class="card">
//         <div class="card-body">All of your Spotify listening history will be put and listed down below and available for you to click on and listen again</div>
//       </div><br><br>
      
//       <br><br>
//       <h3>History</h3>
      
//       <div class="card-columns">
//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>
       
//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>
       
//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div> 

//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>


//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>

//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>

//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>


//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>


//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>


//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>


//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>


//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>


//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>


//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>


//         <div class="card">
//           <img class="card-img-top" height="165" src="INSERT ALBUM ART" alt="Album Art">
//           <div class="card-body">
//             <h4 class="card-title">Song Title</h4>
//             <p class="card-text">Artist: </p>
//             <p class="card-text">Album: </p>
//           </div>
//         </div>

//       </div>
//     </div> 

//     <br><br>  
//   </body>


//   <body>
//     <header>
        
//     <div class="container">
//       <h1 style="display:inline;">Search History</h1><h4 style="color:grey;display:inline;"></h4>
//       <br><br><div class="card">
//         <div class="card-body">Search your listening history as long as 6 months ago:</div>
//       </div><br><br>

//         <form id="seach-form" class="form-style" method="post">
//         <select id="search-category" class="select-items" name="searchCategory">
//           <option name="" value=""></option>
//           <option name="artist" value="artist">Artist</option>
//           <option name="album" value="album">Album</option>
//           <option name="track" value="track">Track</option>
//         </select>
//         <input type="text" class="seach-input" name="searchParam" placeholder="search" value="">
//         <button id="submit-button" class="button-search" type="submit" name="button">Submit</button>
//       </form>
//       <div id="search-param" class="users-search">
//         <img src="spotify-logo-3.png" width="500px" height="492px" />

//       </div>
//     </header>
//     <section id="results-location">

//     </section>
//     <div class="copyright">
//     </div>
//     <div id="modal" class="modal-bkgnd" style="display:none">
//       <section >
//         <div class="modal-header">
//           <h2>More Ablums By<br/>
//           <span class="artist-clicked"></span></h2>
//           <button id="close-modal" class="album-buttom close-modal-buttom" type="button" name="button">Close</button>
//         </div>
//       <div id="modal-content"></div>
//     </section>
    


//       </div>
//     </div>




//   </body>

//   <br><br>


//   <footer style="background-color:grey;height:50px;">
//       <a href="https://open.spotify.com/">
//         <img class="mx-auto d-block" style="padding-top:7px;" src="SPOTIFY LOGO PNG" width="40" alt="SPOTIFY link">
//       </a>
//     </footer> 
// </html>