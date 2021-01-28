import './App.css';
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AutorenewRoundedIcon from '@material-ui/icons/AutorenewRounded';
import Snackbar from '@material-ui/core/Snackbar';
import { AwesomeButton } from 'react-awesome-button';
import styles from 'react-awesome-button/src/styles/themes/theme-c137';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {artists: {}, showSnack: false}
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
      <TableContainer style={{'maxWidth':'800px', 'padding':'15px'}}>
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
                <TableCell style={smoll} align="center"><AwesomeButton cssModule={styles} size='small' disabled={!artist.spotify} type='secondary' onPress={()=> window.open(artist.spotify, 'tiktok')}>Spotify</AwesomeButton></TableCell>
                <TableCell style={smoll} align="center"><AwesomeButton size='small' disabled={!artist.yt} type='link' onPress={()=> window.open(artist.yt, 'tiktok')}>Youtube</AwesomeButton></TableCell>
              </TableRow> );
          })}
        </TableBody>
      </Table>
      </TableContainer>
      <IconButton size='small' variant="outlined" onClick={() => this.getDb() }><AutorenewRoundedIcon /></IconButton>
      <Paper style={{maxWidth:'500px','backgroundColor': '#052323', 'padding':'15px'}} elevation={10}> 
      <iframe title='spoofydoodle' src="https://open.spotify.com/embed/playlist/1Gudo5j6pxf86CiP7E5Atq" width="400" height="600" frameBorder="0" allowtransparency="false" allow="encrypted-media"></iframe>
      </Paper>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} message="List updated" open={this.state.showSnack} autoHideDuration={5000} onClose={() => this.setState({showSnack: false})} />
    </center>

      );
  }
}
  

export default App;
