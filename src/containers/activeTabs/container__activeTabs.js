import React, { Component } from 'react';
import { connect }  from 'react-redux';


class RenderSelectTab extends Component{
  render(){
    if (!this.props.tab){
      return <div>хуй знает что!</div>;
    }

    return (
      <div>
        <div>Title: {this.props.tab.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    tab: state.activeTab
  };
}

export default connect (mapStateToProps)(RenderSelectTab);
