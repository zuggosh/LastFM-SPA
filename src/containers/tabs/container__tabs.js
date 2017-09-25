import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectTab } from '../../actions/selectTab';

import './header.scss';

const test = [];

class headerBlock extends Component{
  renderTabs(tabs){
    return this.props.tabs.map( (tab) => {
      return (
        <div key={tab.title}>{tab.title}</div>
      )
    })
  }


  render(){
    return(
      <header className="header">
        {this.renderTabs(test)}
      </header>
    )
  }
}

function mapStateToProps( state ) {
    return {
        tabs: state.tabs
    };
}

function mapDispatchToProps (dispatch){
  return bindActionCreators( { selectTab: selectTab }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(headerBlock);
