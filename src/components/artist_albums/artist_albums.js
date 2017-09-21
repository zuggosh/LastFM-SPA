import React from 'react';
import './artist_albums.scss';

export default (props) => {
  return(
      <div className="albumsBlock">
          <div className="albumsBlock__wrapperTitle">
              <div className="albumsBlock__title">Albums</div>
          </div>
          <div className="row">
            {props.data.map((item, i) =>
              <div key={i} className="col-6 col-lg-4">
                <div className="albumsBlock__album">
                  <div className="albumsBlock__wrapperImg">
                    <img className="albumsBlock__img" src={item.image[1]['#text'] ? item.image[1]['#text'] : '../img/default.png'}  alt={item.name}/>
                  </div>
                  <div className="albumsBlock__albumTitle">
                    {item.name}
                  </div>
                </div>
              </div>
              )
            }
          </div>
      </div>
  );
}
