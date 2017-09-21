import React from 'react';
import './artist_info.scss';

export default (props) => {
  return(
    <div className="ArtistInfo row" key={props.data.mbid}>
      <div className="col-12 col-lg-12">
        <div className="ArtistInfo__nameWrapper">
          <div className="ArtistInfo__name">{props.data.name}</div>
        </div>

        <div className="ArtistInfo__tagsBlock">
            Tags:
            { props.data.tags.tag.map((item, j) =>
                <div className="ArtistInfo__tag" key={item.name}>
                    {item.name}
                </div>
            )}
        </div>
      </div>
      <div className="col-12 col-lg-12">
        <div className="ArtistInfo__numberWrap">
          <div className="ArtistInfo__numberStat">
              listeners: {props.data.stats.listeners}
          </div>
          <div className="ArtistInfo__numberStat">
              playcount: {props.data.stats.playcount}
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-12">
          <div className="ArtistInfo__logoBlock">
            <div className="ArtistInfo__logoWrapper">
                <img className="ArtistInfo__logo" src={props.data.image[5]['#text']}/>
            </div>
            <div className="ArtistInfo__bio">
                {props.data.bio.content}
            </div>
          </div>
      </div>
      <div className="col-12 col-lg-12">
        <div className="ArtistInfo__similarText">Similar artist:</div>
        <div className="ArtistInfo__similarBlock">
            { props.data.similar.artist.map((item, i) =>
                <div className="ArtistInfo__similar" key={i}>
                    <div className="ArtistInfo__similarName">{item.name}</div>
                    <div className="ArtistInfo__similarImgWrapper">
                        <img className="ArtistInfo__similarImg" src={item.image[5]['#text']} alt={item.name} />
                    </div>
                </div>)
            }
        </div>
      </div>

    </div>
  );
}
