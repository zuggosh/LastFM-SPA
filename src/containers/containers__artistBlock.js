import React, {Component} from 'react';
import { connect } from 'react-redux';

import InfoBlock from '../components/artist_info';


class ArtistBlocks extends Component{

  renderArtist(data){
    return (
      <div>
        <InfoBlock key={data.name} props={data}/>
      </div>
    )
  }


  render(){
    return(
      <div>
        {this.props.artist.map(this.renderArtist)}
      </div>
    )
  }
}

function mapStateToProps( {artist} ) {
    return {artist};
}

export default connect(mapStateToProps)(ArtistBlocks);
