import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  return <button onClock={tickle}>Tickle me!</button>;
}

export default Tickler;
