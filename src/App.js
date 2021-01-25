//import logo from './logo.svg';
import './App.css';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

const assembleArtist = (artist, ttLink, spotifyLink, ytLink) =>{
  return { artist, ttLink, spotifyLink, ytLink }
}

const rows = [
  assembleArtist('Broken at Best', 'https://www.tiktok.com/@brokenatbest', 'https://open.spotify.com/artist/4CJazbFqEso8BiGP10gz9L?si=V7_KtkpZQyWmFjx5gJb5xg'),
  assembleArtist('Skatune Network ', 'https://www.tiktok.com/@skatunenetwork', 'https://open.spotify.com/artist/7Gas5IrI1Y8PSrJPyRkwtC?si=k7Xey1B6RV2OQPCyYYjO_g','https://www.youtube.com/channel/UCji2l5wcs6GoYJY1GgG_slQ')
]

function App() {
  return (
      <Container maxWidth="md">
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head" align="center"><b>Artist</b></TableCell>
            <TableCell variant="head" align="center"><b>TikTok Profile Link</b></TableCell>
            <TableCell align="center"><b>Spotify Link</b></TableCell>
            <TableCell align="center"><b>Youtube Link</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => 
            ( <TableRow key={row.artist}>
            <TableCell component="th" scope="row">
              {row.artist}
            </TableCell>
            <TableCell align="center">
            <Button variant="contained" onClick={()=> window.open(row.ttLink, 'tiktok')}>TikTok</Button>
            </TableCell>
            <TableCell align="center"><Button variant="contained" onClick={()=> window.open(row.spotifyLink, 'Spotify')}>Spotify</Button></TableCell>
            <TableCell align="center"><Button variant="contained" onClick={()=> window.open(row.yt, 'Youtube')}>Youtube</Button></TableCell>
          </TableRow> )
          )}
        </TableBody>
      </Table>
      </TableContainer>
      </Container> 
  );
}

export default App;
