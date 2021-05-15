import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import landingimg from "./OBJECTS.svg";

function Home() {
  const [st, setSt] = useState(false);
  function handelClick() {
    setSt(!st);
  }
  return (
    <main className="home">
      <div className="home__landing">
        <div>
          <div className="home__landing__typography">
            <span className="typist">Hi, I'm Perrin</span>
            <div className="typist">
              <span className="I">I</span>
              <Typewriter
                options={{
                  wrapperClassName: "Typewriter__wrapper",
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                  pauseFor: 2300,
                  strings: ["Design", "Develop", "Improve"],
                }}
              />
            </div>
            <span className="typist">React Applications</span>
            <div className="home__landing__btns">
              <button className="btn--projects">Projects</button>
              <button className="btn--skills">Skills</button>
            </div>
          </div>
        </div>
        <object type="image/svg+xml" data={landingimg}>

        </object>
      </div>
    </main>
  );
}

export default Home;
