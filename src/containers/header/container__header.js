import React, {Component} from 'react';
import { connect } from 'react-redux';

export default class headerBlock extends Component{
  render(){
    return(
      <header>
        <button>search artist</button>
        <button>top artists</button>
        <button>Some else</button>
      </header>
    )
  }
}
