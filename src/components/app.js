import React, { Component } from 'react';

import SearchBar from '../containers/searchBar/containers__searchBar';
import ArtistBlocks from '../containers/artistBlock/containers__artistBlock';
import TabsBlock from '../containers/tabs/container__tabs';
import RenderSelectTab from '../containers/activeTabs/container__activeTabs';

export default class App extends Component {
  render() {
    return (
      <main>
          <div className="container">
              <header className="header">
                header
              </header>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-9">
                      <SearchBar />
                      <ArtistBlocks />
                  </div>
                  <div className="col-3">
                      <TabsBlock />
                      <RenderSelectTab />
                  </div>
              </div>
          </div>

      </main>
    );
  }
}
