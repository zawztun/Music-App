import React, { useState, useEffect } from 'react';
import ReactHowler from 'react-howler';
import {connect} from 'react-redux';



const SongDetails= ({song}) =>{

    const[selectedSound, setSelectedSound] = useState(null);
    const [playing, setPlaying] = useState(false);
    useEffect(() => {
        console.log('song : ', song);
        if(song) {
            setSelectedSound(song.src);
        }
    },[song]);

    const play = () => {
        setPlaying(true);
    }

    const stop =() => {
        setPlaying(false);
    }
 
    if(!song){
        return <div>Select a song</div>
    }
    return (
    <div> 
        <h1>Song Details:</h1>
       <h2> 
           Title:{song.title}
           <br />
           Singer:{song.Sing}
        </h2>
        <div className="audio-player">
            <button onClick={()=> play()}> play</button>
            <button onClick={()=> stop()}> stop</button>
        </div>
       
       {/* <audio controls >
       <source src={selectedSound} type="audio/mpeg"/>
       </audio> */}
       {(
           selectedSound &&
           <ReactHowler
           src= {selectedSound} type="audio/mpeg"
           playing = {playing}/>

       )}

    </div>
    )};
const mapStateToprops = (state)=>{
    return {song:state.selectedSong}
}
export default connect(mapStateToprops)(SongDetails)