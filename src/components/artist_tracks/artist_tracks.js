import React from 'react';
import './artist_tracks.scss';

export default (props) => {
  return(
    <div className="tracksBlock">
      {props.data.map((item, i) =>
        <div key={i} className="col-6 col-lg-4">
          <div className="tracksBlock__track">
            {item.name}
          </div>
        </div>
        )
      }
    </div>
  );
}
