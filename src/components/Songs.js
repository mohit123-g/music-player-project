import "../App.css";
import { useState } from "react";
import Player from "./Player";

const Songs = (props) => {
  const [SearchSong, setSearchSong] = useState([0]);
  const [searchs, setSearch] = useState("");
  const [so, setSo] = useState([]);
  var input_box= document.getElementById('inputbox')
  const searchSongs = () => {
    
    var search =searchs;
    var flag = 0;
   if(search!=""){
    var arr=[]
    for (let i = 0; i < props.songs.length; i++) {
     var  j=search.length
      if (props.songs[i].name.slice(0,j).toLowerCase() === search.toLowerCase()) {
        // setSearchSong(i);
        arr.push(i)
        flag = 1;
        // document.getElementById('GO').disabled=false;
      }
    }setSo(arr) 
  }
    else{
      alert("search box is empty") 
            flag=1;
        }
  
    if (flag < 1) {
      alert("Song Not Found");
    }
  };

    const buttons=()=>{
     const button=[];//array of buttons
      for(let i=0;i<30;i++){
           button.push( //pushing butt  
           <a href={"player/"+i}>
          <img
            id="but1"
            src={props.songs[i].img}
            alt={props.songs[i].name}
          />
        </a> )
      }
      return button;
     }

     const buttons1=()=>{
      const button=[];//array of buttons
       for(let i=0;i<so.length;i++){
            button.push( //pushing butt  
            <a href={"player/"+so[i]}>
           <img
             id="but1"
             src={props.songs[so[i]].img}
           />
         </a> )
       }
       return button;
      }
    // useEffect(()=>{console.log("I Only run once (When the component gets mounted)") },[]);


  return (
    <div className="App">

       <h1>
        <input
          id="inputbox"
          placeholder="Enter song name"
          onChange={(event) => {
            setSearch(event.target.value);
            setSo([])
          }}
        />
         
         {/* <a href={"player/" + SearchSong}> */}
          <button id="searchButton" onClick={searchSongs}>
            Search
          </button>
          {/* </a> */}
 
          {/* <button  onClick={()=>{setSo(input_box.value)}}  >
          Go
          </button> */}
         
        <br></br>
        <div>{buttons1()}</div>

        {/* <a href={"player/" + SearchSong}>
          <button id="GO" onClick={searchSongs} value="Togglee" disabled='true' >
          Song is present click me to Go
          </button>
        </a> */}
        <br></br>
       {/* <div>{useEffect(()=>{console.log("I Only run once (When the component gets mounted)") },[])}</div> */}
           
           <div>{buttons()}</div>  
           </h1>
    </div>

  );

}
export default Songs;
