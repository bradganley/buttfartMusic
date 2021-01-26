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
        <br />
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
      </TableContainer><br />
      <center><Button size='small' variant="outlined" color="secondary" onClick={() => window.location.reload()}>Reload Data</Button></center><br />
      </Container> 
      );
  }
}
  

export default App;
