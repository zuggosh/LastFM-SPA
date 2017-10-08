import React, { Component } from 'react';
import { connect }  from 'react-redux';

import ChartArtists from '../../components/active_chart/artist/topArtist_tab';
import ChartTracks from '../../components/active_chart/track/topTrack_tab';
import ChartTag from '../../components/active_chart/tag/topTag_tab';

class RenderSelectTab extends Component{

   renderArtists(data){
     return <ChartArtists key={data.name} data={data} />
   }

   renderTracks(data){
     return <ChartTracks key={data.name} data={data} />
   }

   renderTags(data){
     return <ChartTag key={data.name} data={data} />;
   }

  render(){
    if (!this.props.tab){
      return <div>select tab!</div>;
    } else if (this.props.tab.artists){
      return (
        <div>
          {this.props.tab.artists.artist.map(this.renderArtists)}
        </div>firebase login
      )
    } else if (this.props.tab.tracks){
      return (
        <div>
          {this.props.tab.tracks.track.map(this.renderTracks)}
        </div>
      )
    } else if(this.props.tab.tags){
      return (
        <div>
          {this.props.tab.tags.tag.map(this.renderTags)}
        </div>
      )
    }
    else {
      return 'Ooops... some one was going wrong!'
    }
  }
}

function mapStateToProps(state){
  return {
    tab: state.activeTab
  };
}

export default connect (mapStateToProps)(RenderSelectTab);
