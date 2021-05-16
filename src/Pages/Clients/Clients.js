import React from "react";
import clara from "../../Images/clarabridge.png";
import chain from "../../Images/chainbridgebank.png";
import kelton from "../../Images/keltontech.png";
import logi from "../../Images/logi.png";

function Clients() {
  return (
    <main className="clients">
      <h1 className="clients__header">Worked with leading clients</h1>
      <div>
        <img className="clients__logo" src={clara}></img>
        <img className="clients__logo" src={chain}></img>
        <img className="clients__logo" src={kelton}></img>
        <img className="clients__logo" src={logi}></img>
      </div>
    </main>
  );
}

export default Clients;
