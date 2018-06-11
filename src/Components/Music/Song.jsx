import React, {Component} from 'react'
import Icon from '@material-ui/core/Icon';

class Song extends Component {
  
  render() { 
const {song, onListen, addPlaylist} = this.props

    return ( 
      <tr>
      <td> {song.name}</td>
      <td> {song.artiste}</td>
      <td> <Icon onClick={() => {onListen(song.url, song.name, song.artiste)}}> play_circle_filled </Icon></td>
      <td> <Icon onClick={() => {addPlaylist(song.url, song.name, song.artiste)}}> add_circle_outline </Icon></td>
    </tr>
         )
  }
}
 
export default Song ;

