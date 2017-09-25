import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectTab } from '../../actions/selectTab';

import './header.scss';

class headerBlock extends Component{
  renderTabs(tabs){
    return(
      tabs.map((item, j) =>
          <div key={j}>{item.title}</div>
      )
    )
  }

  render(){
    return(
      <header className="header">
        {this.renderTabs(this.props.tabs)}
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
