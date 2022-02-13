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
        <img className="clients__logo" src={clara} alt="logo"></img>
        <img className="clients__logo" src={chain} alt="logo"></img>
        <img className="clients__logo" src={kelton} alt="logo"></img>
        <img className="clients__logo" src={logi} alt="logo"></img>
      </div>
    </main>
  );
}

export default Clients;
