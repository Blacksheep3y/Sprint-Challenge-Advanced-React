import React from 'react';

const WWC = props => {
    return (
      <div>
          <dl className="player-name">
              Player Names:
              <dt>{props.propName[0]}</dt>
          </dl>
          <dl className="player-country">
              Player Countries:
              <dt>{props.propCountry[0]}</dt>
          </dl>
          <dl className="player-searches">
              Player Searches:
              <dt>{props.propSearches[0]}</dt>
          </dl>
          <dl className="player-id">
              Player Id:
              <dt>{props.propId[0]}</dt>
          </dl>
      </div>
      );
};

export default WWC;