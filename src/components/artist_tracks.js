import React from 'react';

export default (props) => {
  return(
    <div className="tracksBlock">
      {props.data.map((item, i) =>
        <div className="col-6 col-lg-4">
          <div className="tracksBlock__track" key={i}>
            {item.name}
          </div>
        </div>
        )
      }
    </div>
  );
}
