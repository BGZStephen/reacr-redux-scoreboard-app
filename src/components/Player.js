import React, { PropTypes } from "react";
import Counter from "./Counter";

const Player = (props) => {
  const name = React.PropTypes.string.isRequired;
  const score = React.PropTypes.number.isRequired;
  const onRemove = React.PropTypes.func.isRequired;
  const onScoreChange = React.PropTypes.func.isRequired;
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter onChange={props.onScoreChange} score={props.score} />
      </div>
    </div>
  );
}

export default Player;
