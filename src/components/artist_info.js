import React from 'react';

export default (props) => {
  console.log(props);
  return(
        <div key={props.data.mbid}>
            <div>{props.data.name}</div>
            <div>
                {props.data.bio.content}
            </div>
            <div>
                <img src={props.data.image[5]['#text']}/>
            </div>

            <div>
                { props.data.similar.artist.map((item, i) =>
                    <div key={i}>
                        <div>{item.name}</div>
                        <div>
                            <img src={item.image[5]['#text']} alt={item.name} />
                        </div>
                    </div>)
                }
            </div>
            <div>{props.data.stats.listeners}</div>
            <div>{props.data.stats.playcount}</div>
            <div>
                { props.data.tags.tag.map((item, j) =>
                    <div key={item.name}>
                        <div>{item.name}</div>
                    </div>
                )}
            </div>
        </div>
  );
}
