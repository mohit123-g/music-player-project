import Player from "./components/Player";
import Songs from "./components/Songs";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
// import song1 from "./songs/A.mp3";
import { render } from "@testing-library/react";
export default function App() {
  
  const [songs, setSongs] = useState([
    { audio: "https://dl.sndup.net/t2qq/Aaaram.mp3", name: "Aaaram" },
    { audio: "https://dl.sndup.net/bvwn/B.mp3", name: "Knox" },
    { audio: "https://dl.sndup.net/zmwy/Badshah%20-%20SANAK.mp3", name: "Sanak" },
    { audio: "https://dl.sndup.net/h46f/Bekhayali%20Full%20Song%20_%20Kabir%20Singh.mp3" },
    { audio: "https://dl.sndup.net/symp/Dil%20Dooba%20Lyrical%20Video%20Song.mp3" },
    { audio: "https://dl.sndup.net/v2r5/Kesariya%20-%20Brahm%C4%81stra.mp3"},
    { audio: "https://dl.sndup.net/jbpb/Aasma%20ko%20chukar%20dekho_.mp3" },
    { audio: "https://dl.sndup.net/zcph/Ram%20Siya%20Ram.mp3" },
    { audio: "https://dl.sndup.net/6yss/Bhaag%20Ganje%20Bhaag.mp3" },
    { audio: "https://dl.sndup.net/7w57/Dil%20Ne%20Ye%20Kaha%20Hai%20Dil%20Se.mp3" },
    { audio: "https://dl.sndup.net/p5xh/Heer%20Ranjha.mp3" },
    { audio: "https://dl.sndup.net/pjrk/Imagine%20Dragons.mp3" },
    { audio: "https://dl.sndup.net/zprg/David%20Guetta.mp3" },
    { audio: "https://dl.sndup.net/x7x2/Main%20Hoon%20Ghatothkach.mp3" },
    { audio: "https://dl.sndup.net/dkfc/Maine%20Royaan.mp3" },
    { audio: "https://dl.sndup.net/3xqg/laree%20Choote.mp3" },
    { audio: "https://dl.sndup.net/fh9q/Mann%20Bharryaa.mp3" },
    { audio: "https://dl.sndup.net/6g64/O%20Bedardeya.m4a" },
    { audio: "https://dl.sndup.net/r2jx/Main%20Dhoondne%20Ko%20Zamaane%20Mein.mp3" },
    { audio: "https://dl.sndup.net/nrrv/Satisfya%20-%20I%20am%20a%20Rider.mp3" },
    { audio: "https://dl.sndup.net/b3md/EMIWAY%20-%20Freeverse%20Feast.m4a" },
    { audio: "https://dl.sndup.net/cjvy/FREEVERSE%20FEAST%20_%20KR_NA.m4a" },
    { audio: "https://dl.sndup.net/ts9w/EMIWAY%20-%20SEEDHA%20TAKEOVER.m4a" },
    { audio: "https://dl.sndup.net/jqwc/KR_NA%20-%20SEEDHA%20MAKEOVER.m4a" },
    { audio: "https://dl.sndup.net/pcm3/EMIWAY%20-%20CHUSAMBA.m4a" },
    { audio: "https://dl.sndup.net/jppy/KR_NA%20-%20Lil%20Bunty.m4a" },
    { audio: "https://dl.sndup.net/hp9d/EMIWAY%20-%20KR%20L_DA%20SIGN.m4a" },
    { audio: "https://dl.sndup.net/q64v/KR_NA%20-%20Machayenge%204.m4a" },
    { audio: "https://dl.sndup.net/hkcr/MACHAYENGE%204.m4a" },
    { audio: "https://dl.sndup.net/gwmh/Ghost%20Sound%20Effects.mp3",name:"😱" },
  ]);
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="home">

          <h2 id="title">HOME</h2>
        </Link>
       

        {console.log(songs)}
        <Routes>
          <Route
            path="home"
            index
            element={
              <Songs
                search={search}
                setSearch={setSearch}
                songs={songs}
                setSongs={setSongs}
              />
            }
          ></Route>
          <Route path="player" index element={<Player />}></Route>

          <Route
            path="player1"
            index
            element={<Player song={songs} index={0} />}
          ></Route>
          <Route
            path="player2"
            index
            element={<Player song={songs} index={1} />}
          ></Route>
          <Route
            path="player3"
            index
            element={<Player song={songs} index={2} />}
          ></Route>
          <Route
            path="player4"
            index
            element={<Player song={songs} index={3} />}
          ></Route>
          <Route
            path="player5"
            index
            element={<Player song={songs} index={4} />}
          ></Route>
          <Route
            path="player6"
            index
            element={<Player song={songs} index={5} />}
          ></Route>
          <Route
            path="player7"
            index
            element={<Player song={songs} index={6} />}
          ></Route>
          <Route
            path="player8"
            index
            element={<Player song={songs} index={7} />}
          ></Route>
          <Route
            path="player9"
            index
            element={<Player song={songs} index={8} />}
          ></Route>
          <Route
            path="player10"
            index
            element={<Player song={songs} index={9} />}
          ></Route>
          <Route
            path="player11"
            index
            element={<Player song={songs} index={10} />}
          ></Route>
          <Route
            path="player12"
            index
            element={<Player song={songs} index={11} />}
          ></Route>
          <Route
            path="player13"
            index
            element={<Player song={songs} index={12} />}
          ></Route>
          <Route
            path="player14"
            index
            element={<Player song={songs} index={13} />}
          ></Route>
          <Route
            path="player15"
            index
            element={<Player song={songs} index={14} />}
          ></Route>
          <Route
            path="player16"
            index
            element={<Player song={songs} index={15} />}
          ></Route>
          <Route
            path="player17"
            index
            element={<Player song={songs} index={16} />}
          ></Route>
          <Route
            path="player18"
            index
            element={<Player song={songs} index={17} />}
          ></Route>
          <Route
            path="player19"
            index
            element={<Player song={songs} index={18} />}
          ></Route>
          <Route
            path="player20"
            index
            element={<Player song={songs} index={19} />}
          ></Route>
          <Route
            path="player21"
            index
            element={<Player song={songs} index={20} />}
          ></Route>
          <Route
            path="player22"
            index
            element={<Player song={songs} index={21} />}
          ></Route>
          <Route
            path="player23"
            index
            element={<Player song={songs} index={22} />}
          ></Route>
          <Route
            path="player24"
            index
            element={<Player song={songs} index={23} />}
          ></Route>
          <Route
            path="player25"
            index
            element={<Player song={songs} index={24} />}
          ></Route>
          <Route
            path="player26"
            index
            element={<Player song={songs} index={25} />}
          ></Route>
           <Route
            path="player27"
            index
            element={<Player song={songs} index={26} />}
          ></Route>
           <Route
            path="player28"
            index
            element={<Player song={songs} index={27} />}
          ></Route>
           <Route
            path="player29"
            index
            element={<Player song={songs} index={28} />}
          ></Route>
           <Route
            path="player30"
            index
            element={<Player song={songs} index={29} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
