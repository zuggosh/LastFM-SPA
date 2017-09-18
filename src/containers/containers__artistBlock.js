import React, {Component} from 'react';
import { connect } from 'react-redux';

import BlockArtistInfo from '../components/artist_info/artist_info';
import BlockArtistAlbums from '../components/artist_albums/artist_albums';
import BlockArtistTrack from '../components/artist_tracks/artist_tracks';


class ArtistBlocks extends Component{
  renderArtist (data){
      return (
          <div key={data.mbid}>
            <BlockArtistInfo data={data} />
          </div>
      );
  }

  renderTracks(data){
    return(
      <div key="artistTracks">
        <BlockArtistTrack data={data.toptracks.track} />
      </div>
    );
  }

  renderArtistTracks(data){
     return(
       <div key="artistAlbums">
        <BlockArtistAlbums data={data.topalbums.album} />
       </div>
     );
  }

  render(){
    return(
      <div className="row">
        {this.props.artist.map(this.renderArtist)}
        {this.props.artistTracks.map(this.renderTracks)}
        {this.props.artistAlbums.map(this.renderArtistTracks)}
      </div>
    )
  }
}

function mapStateToProps( state ) {
    return {
      artist: state.artist,
      artistTracks: state.artistTracks,
      artistAlbums: state.artistAlbums
    };
}

export default connect(mapStateToProps)(ArtistBlocks);
