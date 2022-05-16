import React from "react";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function generateMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme((prevState) => ({
      ...prevState,
      memeImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <input
          type="submit"
          value="Get a new meme image 🖼"
          className="form--button"
          onClick={generateMemeImage}
        />
      </div>
      <div className="meme">
        <img src={meme.memeImage} className="meme-img" />
        <h2 className="memeText top">{meme.topText}</h2>
        <h2 className="memeText bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
