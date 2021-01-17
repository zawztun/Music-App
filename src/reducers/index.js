
import {combineReducers}from 'redux';
import Piano_Men from './songs/Piano_Men.mp3';
import Hotel_California from './songs/Hotel_California.mp3';
import The_Girl_From_Yesterday from './songs/The_Girl_From_Yesterday.mp3';
import Country_Road_Take_Me_Home from './songs/Country_Road_Take_Me_Home.mp3';
//Reducers
const songReducer = () =>{
    return [
        {title : ' Piano man', Sing: "Billy Joe", src : Piano_Men},
        {title : ' Hotel California ', Sing:' The Eagle', src:Hotel_California},
        {title : 'The girl form yesterday', Sing: 'Eagle', src:The_Girl_From_Yesterday },
        {title : ' Country Road', Sing: 'John Denver', src:Country_Road_Take_Me_Home}
    ] 
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers ({
    songs: songReducer,
    selectedSong: selectedSongReducer
});
