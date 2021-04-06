import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { getTopArtistsRequested, getTopTracksRequested } from '../redux/Actions/UserActions.js'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
        color:'green',
      backgroundColor: '#282c34',
      width:20,
      borderRadius:10,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
  const  SimpleCard = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

const Home = (props) => {
    const {token, getTopArtists, getTopTracks} = props
    useEffect(() => {
        // getTopArtists(token)
        // console.log(token)
    },[])
    return(
        <>
        <div className={styles.header}>This is Home Page</div>
        {/* <SimpleCard/> */}
        </>
        
    )
}

// const WrappedApp = withStyles(styles)(App);
const mapDispatchToProps = (dispatch) => {
    return {
        getTopArtists: (token) => dispatch(getTopArtistsRequested(token)),
        getTopTracks: (token) => dispatch(getTopTracksRequested)
    }
}
const mapStateToProps = (state) => {
    return {
        token:state.User.token,
        // topArtists: state.User.
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);