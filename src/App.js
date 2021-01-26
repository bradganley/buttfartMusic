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
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AutorenewRoundedIcon from '@material-ui/icons/AutorenewRounded';
import Snackbar from '@material-ui/core/Snackbar';


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
      <Paper style={{maxWidth:'900px','background-color': '#7d7d7d', 'padding':'15px'}} elevation={10}>
      <TableContainer style={{'maxWidth':'800px', 'padding':'15px'}}>
      <Table style={{'background-color': '#f5f5f5','padding':'5px'}}>
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
                  <Tooltip enterTouchDelay={1} leaveTouchDelay={2000} placement="bottom" title={artist.genre} interactive>
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
      <IconButton size='small' variant="outlined" color="primary" onClick={() => this.getDb() }><AutorenewRoundedIcon /></IconButton>
      </Paper> 
      <Paper style={{maxWidth:'500px','background-color': '#052323', 'padding':'15px'}} elevation={10}> 
      <iframe title='spoofydoodle' src="https://open.spotify.com/embed/playlist/1Gudo5j6pxf86CiP7E5Atq" width="400" height="600" frameborder="0" allowtransparency="false" allow="encrypted-media"></iframe>
      </Paper>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} message="List updated" open={this.state.showSnack} autoHideDuration={5000} onClose={() => this.setState({showSnack: false})} />
    </center>

      );
  }
}
  

export default App;
