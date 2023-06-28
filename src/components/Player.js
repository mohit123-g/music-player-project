import { useEffect, useState } from "react";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import "../styles.css";
function Player(props) {  
    var [i,setI]=useState(props.index);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });


  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(props.song[i].audio);


   useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      }
      );
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  function playingButton() {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  }
      
  return (
    <div className="component">
      <h2>Playing Now</h2>
      <img className="musicCover" src="https://picsum.photos/200/200" />
      <div>
        <h3 className="title">{props.song[i].name}</h3>
             {console.log(props.index)}
        <p className="subTitle">MOHIT</p>
      </div>
      <div>
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
      <div><h1>
        <button className="playButton" onClick={()=>{
          if(i>=0)
         { pause()
          setI(i--)
          setIsPlaying(false);}
          else
          {alert("No previous song")}
          }}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
      <button className="playButton"  onClick={()=>{
      if(i<props.song.length)
      { pause()
       setI(i++)
       setIsPlaying(false);}
       else
       {alert("No Next Song")}
        }}>
                    {console.log(i)}
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button></h1>
      </div>
    </div>
  );
}
export default Player;