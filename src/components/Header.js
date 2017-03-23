import React, { PropTypes } from "react";
import Stopwatch from "./Stopwatch";
import Stats from "./Stats";

const Header = (props) => {
  const players = React.PropTypes.array.isRequired;
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </div>
  );
}

export default Header;
