import React from "react";

const convert = ms => {
  const hours = Math.floor(ms / (60 * 60 * 1000));
  const resthours = ms % (60 * 60 * 1000);
  const minutes = Math.floor(resthours / (60 * 1000));
  const restminutes = resthours % (60 * 1000);
  const seconds = Math.floor(restminutes / 1000);
  return String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
};
const Timer = props => {
  const ms = props.ms;

  return (
    <div>
      
     
        <div className="time">{convert(ms)}</div>


      
    </div>
  );
};

export default Timer;
