import React from 'react';
import './topArtisct_tab.scss';

export default (props) => {
    return(
        <div className="topArtistBlock">
            <div className="topArtistBlock__imgWrapper">
                <img src={props.data.image[2]['#text']} alt={props.name}/>
            </div>
            <div className="topArtistBlock__name">
                {props.data.name}
            </div>
        </div>
    )
};