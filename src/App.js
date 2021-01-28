import './App.css';
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import AutorenewRoundedIcon from '@material-ui/icons/AutorenewRounded';
import Snackbar from '@material-ui/core/Snackbar';
import { AwesomeButton } from 'react-awesome-button';
import {Collapse} from 'react-collapse'
import styles from 'react-awesome-button/src/styles/themes/theme-c137';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {artists: {}, showSnack: false, spotLook: false}
  }
  async getDb(){
    const res = await fetch('https://buttfartmusic-default-rtdb.firebaseio.com/.json');
    const data = await res.json();
    this.setState({artists: data, showSnack: true})
  }
  componentDidMount(){
    this.getDb();
  }
  render(){
    let {artists} = this.state;
    const smoll = { height: "10px", padding: "3px" };
  return (
    <center style={{'padding':'15px'}}>
      <TableContainer style={{'maxWidth':'750px', 'padding':'15px'}}>
      <Table style={{'backgroundColor': '#f5f5f5','padding':'5px'}}>
        <TableHead>
          <TableRow style={{'backgroundColor': '#494949', 'outlineColor':'white'}}>
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
                  <Tooltip enterTouchDelay={1} leaveTouchDelay={2000} placement="bottom" title={artist.genre} interactive>
                  <div style={{'fontSize':'20'}}>{artist.name}</div>
                  </Tooltip>
                </TableCell>
                <TableCell style={smoll} align="center">
                <AwesomeButton size='small' disabled={!artist.tiktok} type='primary' onPress={()=> window.open(artist.tiktok, 'tiktok')}>TikTok</AwesomeButton>
                </TableCell>
                <TableCell style={smoll} align="center"><AwesomeButton size='small' disabled={!artist.spotify} type='secondary' onPress={()=> window.open(artist.spotify, 'spotify')}>Spotify</AwesomeButton></TableCell>
                <TableCell style={smoll} align="center"><AwesomeButton size='small' disabled={!artist.yt} type='link' onPress={()=> window.open(artist.yt, 'yt')}>Youtube</AwesomeButton></TableCell>
              </TableRow> );
          })}
        </TableBody>
      </Table>
      <AwesomeButton onPress={() => this.getDb() }><AutorenewRoundedIcon /></AwesomeButton>
      <AwesomeButton onPress={() => this.setState({...this.state, spotLook: !this.state.spotLook})} type="secondary">Spotify Playlist</AwesomeButton>
      </TableContainer>
      <Collapse isOpened={this.state.spotLook}>
      <center><iframe fart={styles} title='spoofydoodle' src="https://open.spotify.com/embed/playlist/1Gudo5j6pxf86CiP7E5Atq" width="400" height="600" frameBorder="0" allowtransparency="false" allow="encrypted-media"></iframe></center>
      </Collapse>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} message="List updated" open={this.state.showSnack} autoHideDuration={5000} onClose={() => this.setState({showSnack: false})} />
    </center>
      );
  }
}
  

export default App;
