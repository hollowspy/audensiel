import React, { Component } from 'react';
import Playlist from './Playlist';
import Song from './Song';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './Music.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 'auto',
  },
});

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingMusic: [
        {
          name: 'Trop tard',
          artiste: 'Big flo et Oli',
          url: '/music/trop_tard.mp3',
        },
        {
          name: 'Ca va trop vite',
          artiste: 'Big flo et Oli',
          url: '/music/ca_va_trop_vite.mp3',
        },
        {
          name: 'Je suis',
          artiste: 'Big flo et Oli',
          url: '/music/je_suis.mp3',
        },
        {
          name: 'Seine St Denis',
          artiste: 'LEJ',
          url: '/music/seine_st_denis.mp3',
        },
        {
          name: 'La dalle',
          artiste: 'LEJ',
          url: '/music/la_dalle.mp3',
        },
      ],
      url: '',
      name: '',
      artiste: '',
      playlist: [],
    };

    this.onListen = this.onListen.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
    this.readPlaylist = this.readPlaylist.bind(this);
    this.deleteSongFromPlaylist = this.deleteSongFromPlaylist.bind(this);
  }

  onListen = (url, name, artiste) => {
    this.setState({
      url,
      name,
      artiste,
    });
  };

  addPlaylist = (url, name, artiste) => {
    let arrayPlaylist = [...this.state.playlist];
    arrayPlaylist.push({
      name: name,
      artiste: artiste,
      url: url,
    });
    this.setState({
      playlist: arrayPlaylist,
    });
  };

  readPlaylist = () => {
    let arrayPlaylist = [...this.state.playlist];
    console.log(arrayPlaylist);
    for (let i = 0; i < arrayPlaylist.length; i++) {
      this.setState({
        url: arrayPlaylist[i].url,
        name: arrayPlaylist[i].name,
        artiste: arrayPlaylist[i].artiste,
      });
    }
  };

  deleteSongFromPlaylist = index => {
    let arrayPlaylist = [...this.state.playlist];
    console.log(arrayPlaylist);
    for (let i = 0; i < arrayPlaylist.length; i++) {
      if (i === index) {
        arrayPlaylist.splice(index, 1);
      }
    }
    console.log(arrayPlaylist);
    this.setState({
      playlist: arrayPlaylist,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="containerBody">
        <h2> Voici mes superbes chanson !! </h2>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h3>Chansons disponibles / Have Fun </h3>
              <table className="tableau">
                <tbody>
                  <tr>
                    <td className="titre"> titre </td>
                    <td className="titre"> Artiste </td>
                    <td className="titre"> Lire la chanson </td>
                    <td className="titre"> Rajout playlist </td>
                  </tr>
                  {this.state.listingMusic.map((song, index) => (
                    <Song
                      key={index}
                      song={song}
                      onListen={this.onListen}
                      addPlaylist={this.addPlaylist}
                    />
                  ))}
                </tbody>
              </table>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h3>Créez ici votre propre playlist</h3>
              <table className="tableau">
                <tbody>
                  <tr>
                    <td className="titre">Titre</td>
                    <td className="titre">Artiste</td>
                    <td className="titre">Suppression</td>
                  </tr>
                  {this.state.playlist.map((songPlaylist, index) => (
                    <Playlist
                      key={index}
                      songPlaylist={songPlaylist}
                      deleteSongFromPlaylist={this.deleteSongFromPlaylist}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
              <button onClick={this.readPlaylist}> Lire la playlist</button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <h4> A l'écoute en ce moment </h4>
            <div>
              {this.state.name} / {this.state.artiste}
            </div>
            <audio
              key={this.state.url}
              controls="controls"
              autoPlay="autoplay"
              autostart="true"
            >
              <source src={this.state.url} type="audio/mp3" />
            </audio>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Music);
