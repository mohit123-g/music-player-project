import "../App.css";
import { useState } from "react";
import Player from "./Player";
const Songs = (props) => {
  const [SearchSong, setSearchSong] = useState(-1);
  const searchSongs = () => {
    var search = props.search;
    var flag = 0;
    for (let i = 0; i < props.songs.length; i++) {
      if (props.songs[i].name === search) {
        setSearchSong(i + 1);
        flag = 1;
      }
    }
    if (flag < 1) {
      alert("Song is not found");
    }
  };

  return (
    <div className="song">
		
      <h1>
        <input
          id="inputbox"
          placeholder="Enter song name"
          onChange={(event) => {
            props.setSearch(event.target.value);
          }}
        />
        <a href={"player" + SearchSong}>
          <button id="searchButton" onClick={searchSongs}>
            Search
          </button>
        </a>

        <br></br>
        <br></br>
        <a href="player1">
          <img
            id="but1"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1/20/20"
          />
        </a>

        <a href="player2">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player3">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player4">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player5">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player6">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player7">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player8">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player9">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player10">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player11">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player12">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player13">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player14">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player15">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player16">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player17">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player18">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player19">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player20">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player21">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player22">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player23">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player24">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player25">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player26">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>
        <a href="player27">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player28">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player29">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>

        <a href="player30">
          <img
            id="but1"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/777/617/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
          />
        </a>
      </h1>
    </div>
  );
};

export default Songs;
