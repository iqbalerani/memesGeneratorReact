import React from "react";
import memesData from "../Components/memesData";

// function getMemeImage() {
//   const memesArray = memesData.data.memes;
//   const randomNumber = Math.floor(Math.random() * memesArray.length);
//   //   const url = memesArray[randomNumber].url;
//   //   console.log(url);
//   setMemeImage(memesArray[randomNumber].url);
// }

function Hero() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    //   const url = memesArray[randomNumber].url;
    //   console.log(url);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className="container">
      <div className="inputs-container">
        <input type="text" placeholder="Input 1" />
        <input type="text" placeholder="Input 2" />
      </div>
      <div className="btn--hero">
        <button className="btn1--hero" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <img src={memeImage} className="meme--img" />
    </div>
  );
}

export default Hero;
