import React, { Component } from 'react';

import SearchBar from '../containers/searchBar/containers__searchBar';
import ArtistBlocks from '../containers/artistBlock/containers__artistBlock';
import HeaderBlock from '../containers/tabs/container__tabs';
import RenderSelectTab from '../containers/activeTabs/container__activeTabs';

export default class App extends Component {
  render() {
    return (
      <main>
        <HeaderBlock />
        <SearchBar />
        <ArtistBlocks />
        <RenderSelectTab />
      </main>
    );
  }
}
