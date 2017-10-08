import React from 'react';
import './topTrack_tab.scss';

export default (props) => {
    return(
        <div className="topTrackBlock">
            <div className="topTrackBlock__imgWrapper">
                <img className="topTrackBlock__img" src={props.data.image[2]['#text']} alt={props.data.name}/>
            </div>
            <div className="topTrackBlock__name">
                {props.data.name}
            </div>
        </div>
    )
};
