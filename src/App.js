import Player from "./components/Player";
import Songs from "./components/Songs";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
// import song1 from "./songs/A.mp3";
import { render } from "@testing-library/react";
export default function App() {
  
  const [songs, setSongs] = useState([
    { audio: "https://dl.sndup.net/t2qq/Aaaram.mp3", name: "Aaaram",img:"https://i1.sndcdn.com/artworks-KnfFAVj2tOl9sKJa-zlNsRQ-t500x500.jpg" },
    { audio: "https://dl.sndup.net/bvwn/B.mp3", name: "Flashup By Knox",img:"https://i.ytimg.com/vi/T5rmd-vKQeM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBY93RrjlsC-axKzyFZ2jtIunMR-w" },
    { audio: "https://dl.sndup.net/zmwy/Badshah%20-%20SANAK.mp3", name: "Sanak" ,img:"https://i.ytimg.com/vi/lAUf0q711Ew/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoEaBQTeCERYADKDutn5T-ToSkHA"},
    { audio: "https://dl.sndup.net/h46f/Bekhayali%20Full%20Song%20_%20Kabir%20Singh.mp3", name: "Bekhayali" ,img:"https://i.ytimg.com/vi/VOLKJJvfAbg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBHYQix91_Z95o9NglZge2a37pdug"},
    { audio: "https://dl.sndup.net/symp/Dil%20Dooba%20Lyrical%20Video%20Song.mp3", name: "Dil Dooba" ,img:"https://i.ytimg.com/vi/vWFjx4i1ixQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhdIF0oXTAP&rs=AOn4CLD3-43Fbvk10XCV3QCIOMb42kV4aQ"},
    { audio: "https://dl.sndup.net/v2r5/Kesariya%20-%20Brahm%C4%81stra.mp3",name: "Kesariya",img:"https://i.ytimg.com/vi/BddP6PYo2gs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkH6mntazw0BSfrHhPwTiqmBIZuQ"},
    { audio: "https://dl.sndup.net/jbpb/Aasma%20ko%20chukar%20dekho_.mp3" ,name: "Aasma Ko Chukar Dekha",img:"https://i.ytimg.com/vi/uHz2ng84hFE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDOFVC2LglRWiQs0k_v8Q3mGfKJbQ"},
    { audio: "https://dl.sndup.net/zcph/Ram%20Siya%20Ram.mp3",name: "Ram Siya Ram" ,img:"https://i.ytimg.com/vi/GXWfue9VhTY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF6BIxDFNsUust9AnuIsoLK5M-XQ"},
    { audio: "https://dl.sndup.net/6yss/Bhaag%20Ganje%20Bhaag.mp3" ,name: "Bhag Ganje Bhag",img:"https://i.ytimg.com/vi/-C8dhJDwMEM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQHSZPsSnFo6RaEUdj3dm8hb_thQ"},
    { audio: "https://dl.sndup.net/7w57/Dil%20Ne%20Ye%20Kaha%20Hai%20Dil%20Se.mp3",name: "Dil Ne Ya Kaha Dil Se" ,img:"https://i.ytimg.com/vi/zDngjMYHSP8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJR6zO7zKNwnVpDRteRhpSeeOVTw"},
    { audio: "https://dl.sndup.net/p5xh/Heer%20Ranjha.mp3" ,name: "Heer Ranja",img:"https://i.ytimg.com/vi/kSFJGEHDCrQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDk51oXpF_Cg1IwH7a15ldusPCwfQ"},
    { audio: "https://dl.sndup.net/pjrk/Imagine%20Dragons.mp3",name: "Believer" ,img:"https://i.ytimg.com/vi/W0DM5lcj6mw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwZDsbDf7CdXKF-hMCAD6VXj18XA"},
    { audio: "https://dl.sndup.net/zprg/David%20Guetta.mp3" ,name: "Hey Mama",img:"https://i.ytimg.com/vi/HFkaU_CQMvI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDk-Ful0IOTUosEcIlT6TlzOnVanw"},
    { audio: "https://dl.sndup.net/rjsp/De%20Taali%20Bhool%20Bhulaiyaa%202.mp3" ,name: "De Taali",img:"https://i.ytimg.com/vi/24VdCJo-FIA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC5QWuwrVFm1NhD2KFlagTC4-olQ"},
    { audio: "https://dl.sndup.net/tqcd/Title%20Track%20Bhool%20Bhulaiyaa%202.mp3" ,name: "Bhool Bhulaiyaa",img:"https://i.ytimg.com/vi/J1rOfVst-EQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDm7JEj4CFTOQYLzwcs2v3e0VElrg"},
    { audio: "https://dl.sndup.net/y4zk/Mercy.mp3" ,name: "Mercy",img:"https://i.ytimg.com/vi/Jyst8oIHOAY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiY3unDapyJfnr6A9Csc5lFhpu4w"},
    { audio: "https://dl.sndup.net/fh9q/Mann%20Bharryaa.mp3" ,name: "Chhor Denge",img:"https://i.ytimg.com/vi/hGf8rOwFzvo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAeMQi1jbbbt-qIJ2v4qPeaP8t_CQ"},
    { audio: "https://dl.sndup.net/6g64/O%20Bedardeya.m4a" ,name: "Bedardeya",img:"https://i.ytimg.com/vi/EdftT8GMU1U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxTPCveWz700Bst6xXFBrtybXiOg"},
    { audio: "https://dl.sndup.net/r2jx/Main%20Dhoondne%20Ko%20Zamaane%20Mein.mp3",name: "Main Dhoondne Ko Zamaane Mein",img:"https://i.ytimg.com/vi/XG5D6IJFU54/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXd2RRgrmgfkLkaVvnb6VNvhc-rw" },
    { audio: "https://dl.sndup.net/nrrv/Satisfya%20-%20I%20am%20a%20Rider.mp3",name: "Rider" ,img:"https://i.ytimg.com/vi/Bz2UMkilN1M/hq2.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRdpzPQpwJ9XBO8ZIlcfVhgCR5ZQ"},
    { audio: "https://dl.sndup.net/pmwf/Balam%20Pichkari.mp3" ,name: "Balam Pichkari",img:"https://i.ytimg.com/vi/0WtRNGubWGA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtafFioTFBR1GhMqRe9Xjg1Gic5w"},
    { audio: "https://dl.sndup.net/24nx/Ghagra.mp3" ,name: "Ghagra",img:"https://i.ytimg.com/vi/caoGNx1LF2Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrC4jUZsGMNrMSZjGtRlIQXH82Vw"},
    { audio: "https://dl.sndup.net/ts9w/EMIWAY%20-%20SEEDHA%20TAKEOVER.m4a" ,name: "Sheeda Takeover",img:"https://i.ytimg.com/vi/wrJ7LbSdk3Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLcWrhFLXA3e-b9_bE7gdMS4FJcA"},
    { audio: "https://dl.sndup.net/6q3s/Badtameez%20Dill.mp3" ,name: "Badtameez Dill",img:"https://i.ytimg.com/vi/II2EO3Nw4m0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6IFvFlpMk4Z1ds6y2D5OtrUuQMw"},
    { audio: "https://dl.sndup.net/gmmf/Dilliwaali%20Girlfriend.mp3" ,name: "Dilliwaali Girlfriend ",img:"https://i.ytimg.com/vi/1cDoRqPnCXU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN6y8Zbq-zoWjgjAvuSPEID_KV7A"},
    { audio: "https://dl.sndup.net/p94g/Ilahi%20Yeh%20Jawaani%20Hai%20Deewani%20128%20Kbps.mp3" ,name: "Iilahi",img:"https://i.ytimg.com/vi/AicKz1ISNjU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmeS10rLonE4V1UB0B2e6LQOU8xQ"},
    { audio: "https://dl.sndup.net/m7rt/Aal%20Izz%20Well%20-%203%20Idiots%20128%20Kbps.mp3" ,name: "All Izz Well",img:"https://i.ytimg.com/vi/7PzwOiW8-n0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3cKM70HwsBrvTvsqqBBw1PgtRjQ"},
    { audio: "https://dl.sndup.net/xfhj/Behti%20Hawa%20Sa%20Tha%20Woh%20-%203%20Idiots%20128%20Kbps.mp3" ,name: "Behti Hawa Sa Tha Woh",img:"https://i.ytimg.com/vi/ewvddSUEONQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAJ7RabM0sCa3Bp6BSqDW6DQKruA"},
    { audio: "https://dl.sndup.net/qwp3/Jaane%20Nahin%20Denge%20Tujhe.mp3",name: "Jaane Nahi Denge Tujhe" ,img:"https://i.ytimg.com/vi/jE3deqmhZy4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOp-l51D73Kahgk6hbAPbk9ai7GQ"},
    { audio: "https://dl.sndup.net/xnqv/Tere%20Pyaar%20Mein.mp3",name:"Tere Pyaar Mein" ,img:"https://i.ytimg.com/vi/zBlklssMFEo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIRJvoWdPNGasQwywegAHGDp38IA"},
  ]);
  // const [search, setSearch] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="home">

          <h2 id="title">SPOTIFY LITE</h2>
        </Link>
       

        {console.log(songs)}
        <Routes>
          <Route
            path="home"
            index
            element={
              <Songs
                // search={search}
                // setSearch={setSearch}
                songs={songs}
                setSongs={setSongs}
              />
            }
          ></Route>
          <Route path="player" index element={<Player />}></Route>
          <Route path="player/:id"  element={<Player song={songs}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
