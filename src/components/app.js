import React, { Component } from 'react';

import SearchBar from '../containers/containers__searchBar';
import ArtistBlocks from '../containers/containers__artistBlock';

export default class App extends Component {
  render() {
    return (
      <main>
        <SearchBar />
        <ArtistBlocks />
      </main>
    );
  }
}
