import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchArtist } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { value: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({ value: e.target.value });
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchArtist(this.state.value);
    this.setState({value: ''});
  }

  render (){
    return(
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
            placeholder="enter artist... "
            className=""
            value={this.state.value}
            onChange={this.onInputChange}
        />
        <span className="">
            <button type="submit" className="">Submit</button>
        </span>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchArtist }, dispatch);
}

export default connect(null, mapDispatchToProps) (SearchBar);
