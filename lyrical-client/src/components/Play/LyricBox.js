import React from 'react';
import Box from '@material-ui/core/Box';
import './LyricBox.css';

class LyricBox extends React.Component{
  
    
  render(){
    const isPlaying = this.props.title;
    if (isPlaying === ""){
      return(null);
    }else{
      return(
        <Box  m={1} border={1} borderColor="white" borderRadius={16}>
          <h2 id="displayLyricTitle">{this.props.title}</h2>
          <h4 id="displayArtistTitle">{this.props.artist}</h4>
          <p id="displayLyrics" dangerouslySetInnerHTML={{ __html: this.props.lyrics}}></p>
        </Box>
      ) 
    }
  }

}export default LyricBox;