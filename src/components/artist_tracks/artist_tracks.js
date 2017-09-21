import React from 'react';
import './artist_tracks.scss';

export default (props) => {
  return(
    <div className="tracksBlock">
      <div className="tracksBlock__wrapperTitle">
        <div className="tracksBlock__title">Top Tracks</div>
      </div>
      <div className="row">
        {props.data.map((item, i) =>
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <div className="tracksBlock__track">
              {item.name}
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
}
