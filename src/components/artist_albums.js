import React from 'react';

export default (props) => {
  return(
      <div className="albumsBlock">
        {props.data.map((item, i) =>
          <div className="col-6 col-lg-4">
            <div className="albumsBlock__album" key={i}>
              <div className="albumsBlock__wrapperImg">
                <img className="albumsBlock__img" src={item.image[1]['#text']} alt={item.name}/>
              </div>
              <div className="albumsBlock__albumTitle">
                {item.name}
              </div>
            </div>
          </div>
          )
        }
      </div>
  );
}
