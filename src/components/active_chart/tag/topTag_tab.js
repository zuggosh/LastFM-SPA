import React from 'react';
import './topTag_tab.scss';

export default (props) => {
    return (
        <div className="topTagBlock">
            <div className="topTagBlock__tag">
                {props.data.name}
            </div>
        </div>
    )
}
