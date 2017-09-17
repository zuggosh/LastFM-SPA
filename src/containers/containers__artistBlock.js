import React, {Component} from 'react';
import { connect } from 'react-redux';

import InfoBlock from '../components/artist_info';



class ArtistBlocks extends Component{
  renderArtist (data){
      return (
          <div key={data.mbid}>
            <InfoBlock data={data}  />
          </div>
      );
  }
  renderArtistTracks(data){
     console.log(data);
  }

  render(){
    return(
      <div>
        {this.props.artist.map(this.renderArtist)}
        {this.props.artistTracks.map(this.renderArtistTracks)}
      </div>
    )
  }
}

function mapStateToProps( state ) {
    return {
      artist: state.artist,
      artistTracks: state.artistTracks
    };
}

export default connect(mapStateToProps)(ArtistBlocks);
