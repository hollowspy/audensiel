import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './Playlist.css'

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
const {songPlaylist, deleteSongFromPlaylist, index } = this.props

   return (
      <tr>
        <td>{songPlaylist.name}</td>
        <td>{songPlaylist.artiste}</td>
        <td> <Icon onClick={() => {deleteSongFromPlaylist(index)}}> clear </Icon></td>
     
      </tr>
      
    );
  }
}

export default Playlist;
