import memesData from "../Components/memesData";

function getMemeImage() {
  const memesArray = memesData.data.memes;
  const randomNumber = Math.floor(Math.random() * memesArray.length);
  const url = memesArray[randomNumber].url;
  console.log(url);
}

function Hero() {
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
    </div>
  );
}

export default Hero;
