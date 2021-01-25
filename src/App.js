//import logo from './logo.svg';
import './App.css';


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

const assembleArtist = (artist, ttLink, spotifyLink, ytLink, genre) =>{
  return { artist, ttLink, spotifyLink, ytLink, genre }
}

const rows = [
  assembleArtist('Broken at Best', 'https://www.tiktok.com/@brokenatbest', 'https://open.spotify.com/artist/4CJazbFqEso8BiGP10gz9L?si=V7_KtkpZQyWmFjx5gJb5xg','https://www.youtube.com/channel/UCnUNOc1gKJ0tWfD9MaY_Fvw', 'Acoustic'),
  assembleArtist('Skatune Network ', 'https://www.tiktok.com/@skatunenetwork', 'https://open.spotify.com/artist/7Gas5IrI1Y8PSrJPyRkwtC?si=k7Xey1B6RV2OQPCyYYjO_g','https://www.youtube.com/channel/UCji2l5wcs6GoYJY1GgG_slQ', 'Ska'),
  assembleArtist('Adjust the Sails', 'https://vm.tiktok.com/ZMJt7gcnW/', 'https://hypeddit.com/link/oxn8il#spotify','https://youtu.be/5mMbAQ9jew0', 'Midwest Emo'),
  assembleArtist('The Upfux', 'https://www.tiktok.com/@juul.thief?lang=en','https://open.spotify.com/artist/5xdshsLn3F7WL9FhC3aJoU?si=C-gXpeSrRP2Sw20pGjE-3w', null, 'Aggressively Ska')
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
            <TableCell align="center">
              <Tooltip placement="bottom-end" title={row.genre} interactive arrow>
              <div>{row.artist}</div>
              </Tooltip>
            </TableCell>
            <TableCell align="center">
            <Button disabled={!row.ttLink} variant="contained" onClick={()=> window.open(row.ttLink, 'tiktok')}>TikTok</Button>
            </TableCell>
            <TableCell align="center"><Button disabled={!row.spotifyLink} variant="contained" onClick={()=> window.open(row.spotifyLink, 'Spotify')}>Spotify</Button></TableCell>
            <TableCell align="center"><Button disabled={!row.ytLink} variant="contained" onClick={()=> window.open(row.ytLink, 'Youtube')}>Youtube</Button></TableCell>
          </TableRow> )
          )}
        </TableBody>
      </Table>
      </TableContainer>
      </Container> 
  );
}

export default App;
