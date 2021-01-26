//import logo from './logo.svg';
import './App.css';

import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';

//const assembleArtist = (artist, ttLink, spotifyLink, ytLink, genre) =>{
//return { artist, ttLink, spotifyLink, ytLink, genre }
//}

//const rows = [
//  assembleArtist('Broken at Best', 'https://www.tiktok.com/@brokenatbest', 'https://open.spotify.com/artist/4CJazbFqEso8BiGP10gz9L?si=V7_KtkpZQyWmFjx5gJb5xg','https://www.youtube.com/channel/UCnUNOc1gKJ0tWfD9MaY_Fvw', 'Acoustic'),
//  assembleArtist('Skatune Network ', 'https://www.tiktok.com/@skatunenetwork', 'https://open.spotify.com/artist/7Gas5IrI1Y8PSrJPyRkwtC?si=k7Xey1B6RV2OQPCyYYjO_g','https://www.youtube.com/channel/UCji2l5wcs6GoYJY1GgG_slQ', 'Ska'),
//  assembleArtist('Adjust the Sails', 'https://vm.tiktok.com/ZMJt7gcnW/', 'https://hypeddit.com/link/oxn8il#spotify','https://youtu.be/5mMbAQ9jew0', 'Midwest Emo'),
//  assembleArtist('The Upfux', 'https://www.tiktok.com/@juul.thief?lang=en','https://open.spotify.com/artist/5xdshsLn3F7WL9FhC3aJoU?si=C-gXpeSrRP2Sw20pGjE-3w', null, 'Aggressively Ska')
//]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {artists: {}}
  }
  async getDb(){
    const res = await fetch('https://buttfartmusic-default-rtdb.firebaseio.com/.json');
    const data = await res.json();
    this.setState({artists: data})
  }
  componentDidMount(){
    this.getDb();
  }
  render(){
    let {artists} = this.state;
    const smoll = { height: "10px", padding: "3px" };
  return (
      <Container maxWidth="md">
      <TableContainer component={Paper}>
      <Table style={{'background-color': '#f5f5f5'}}>
        <TableHead>
          <TableRow style={{'background-color': '#494949', 'outline-color':'white'}}>
            <TableCell style={{...smoll, 'color':'white'}} variant="head" align="center"><b>Artist</b></TableCell>
            <TableCell style={{...smoll, 'color':'white'}} variant="head" align="center"><b>TikTok Profile Link</b></TableCell>
            <TableCell style={{...smoll, 'color':'white'}} align="center"><b>Spotify Link</b></TableCell>
            <TableCell style={{...smoll, 'color':'white'}} align="center"><b>Youtube Link</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*rows.map(row => 
            ( <TableRow hover key={row.artist}>
            <TableCell align="center">
              <Tooltip enterTouchDelay='1' leaveTouchDelay='2000' placement="bottom-end" title={row.genre} interactive arrow>
              <div>{row.artist}</div>
              </Tooltip>
            </TableCell>
            <TableCell align="center">
            <Button disabled={!row.ttLink} variant="outlined" color='default' onClick={()=> window.open(row.ttLink, 'tiktok')}>TikTok</Button>
            </TableCell>
            <TableCell align="center"><Button disabled={!row.spotifyLink} variant="outlined" color='primary' onClick={()=> window.open(row.spotifyLink, 'Spotify')}>Spotify</Button></TableCell>
            <TableCell align="center"><Button disabled={!row.ytLink} variant="outlined" color='secondary' onClick={()=> window.open(row.ytLink, 'Youtube')}>Youtube</Button></TableCell>
          </TableRow> )
          )*/}
          {Object.entries(artists).map(([key, artist]) => {
              return ( 
                <TableRow hover key={artist.name}  style={smoll}>
                <TableCell align="center" style={smoll}>
                  <Tooltip enterTouchDelay={1} leaveTouchDelay={2000} placement="bottom-end" title={artist.genre} interactive arrow>
                  <div style={{'font-size':'20'}}>{artist.name}</div>
                  </Tooltip>
                </TableCell>
                <TableCell style={smoll} align="center">
                <Button style={{height:'20px', 'color':'white', 'background-color':'#69C9D0'}} size='small' disabled={!artist.tiktok} variant="contained" color='default' onClick={()=> window.open(artist.tiktok, 'tiktok')}>TikTok</Button>
                </TableCell>
                <TableCell style={smoll} align="center"><Button style={{height:'20px', 'background-color':'#1DB954'}} size='small' disabled={!artist.spotify} variant="contained" onClick={()=> window.open(artist.spotify, 'Spotify')}>Spotify</Button></TableCell>
                <TableCell style={smoll} align="center"><Button style={{height:'20px', 'background-color':' #c4302b'}} size='small' disabled={!artist.yt} variant="contained" color='secondary' onClick={()=> window.open(artist.yt, 'Youtube')}>Youtube</Button></TableCell>
              </TableRow> );
          })}
            
          
        </TableBody>
      </Table>
      </TableContainer>
      <center><Button size='small' variant="outlined" color="secondary" onClick={() => window.location.reload()}>Reload Data</Button></center>
      </Container> 
      );
  }
}
  

export default App;
