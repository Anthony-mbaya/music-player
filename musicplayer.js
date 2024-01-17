const prevButton = document.getElementById("previous");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const shuffleButton = document.getElementById("shuffle");
const playListSongs = document.getElementById("playlist-songs");

const mySongs = [
    {
        no:0,
        title:"Superstar",
        artist:"Costa Titch",
        duration:"5:45",
        source:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3"
    
    },
    {
        no:1 ,
        title:"Shape Of You ",
        artist:"Ed Sheeran ",
        duration:"4:32 ",
        source:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3 "
    },
    {
        no:2 ,
        title:"Cough",
        artist:"Kizz Daniel",
        duration:"6:00 ",
        source:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3 "
    },
    {
        no:3 ,
        title:"John Cena",
        artist:"Sho Madjoz",
        duration:"3:10 ",
        source:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3 "
    } 
]

//createS a new HTMLAudioElement 
//its a WEB AUDIO API
const audio = new Audio();

//new object to alternate
const alterData = {
    songs:[...mySongs],//copy of all songs
    currentSong:null,
    songCurrentTime : 0
    
};

//Optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined. 
const dispSongs =(arr)=>{
    //creates a new array after performing a function for every array element. 
   const songToHtml = arr.map((theSong) => {
        return `
        <li id="${theSong.no}" class="songList"> 
        <button onclick="playSongFunc(${theSong.no})" class="dispButton"> 
             <span class="display one">${theSong.title}</span> 
             <span class="display two">${theSong.artist}</span>
               <span class="display three">${theSong.duration}</span>
        </button> </li>
        `;
        // used to concatenate all the elements of an array into a single string
    }).join("");
    playListSongs.innerHTML = songToHtml;
}

dispSongs(alterData?.songs);

//want to display current playing song
const setPlayerDisplay =()=>{
    const playingsongTitle = document.getElementById("sTitle");
    const playingsongArtist = document.getElementById("sArtist");
    const playingsongTime = document.getElementById("sTime");
    
    const currentTitle = alterData?.currentSong?.title;
    const currentArtist = alterData?.currentSong?.artist;
    const currentTime = alterData?.currentSong?.duration;

    playingsongTitle.textContent = currentTitle ? currentTitle: "";
    playingsongArtist.textContent = currentArtist ? currentArtist:"";
    playingsongTime.textContent = currentTime ? currentTime: "";
}

//function to play song
const playSongFunc = (no) =>{
    //find method returns the value of the first element that passes the test
    const findSong = alterData?.songs.find((fSong) => fSong.no === no);

    audio.src = findSong.source;
    audio.title = findSong.title;

    //if state to check if there is song playing
    if(alterData?.currentSong === null || alterData.currentSong.x !== findSong.no){
        audio.currentTime = 0;
    }else{
        audio.currentTime = alterData.songCurrentTime;
    }
    alterData.currentSong = findSong;

    setPlayerDisplay();

    audio.play();
}

 
playButton.addEventListener("click",() =>{
    if(alterData?.currentSong === null){
        playSongFunc(alterData?.songs[0].no);
    }else{
        playSongFunc(alterData?.currentSong.no);
    }
});

const pauseSongFunc =() =>{
     alterData.songCurrentTime = audio.currentTime;
     audio.pause();
}

pauseButton.addEventListener("click",pauseSongFunc);



const nextSongFunc =()=>{
    if(alterData?.currentSong === null){
        playSongFunc(alterData?.songs[0].no);
    }else{
        const currentSongIndex = getPlayingSongIndex();
        const nextSong = alterData?.songs[currentSongIndex + 1];

        playSongFunc(nextSong.no);
    }
};

nextButton.addEventListener("click",nextSongFunc);

//indexOf returns the first index at which a given element can be found in the array,
const getPlayingSongIndex = () => alterData?.songs.indexOf(alterData.currentSong);

const prevSongFunc =()=>{
    if(alterData?.currentSong === null){
        return;
    }else{
        const currentSongIndex = getPlayingSongIndex();
        const prevSong = alterData?.songs[currentSongIndex - 1];

        playSongFunc(prevSong.no);
    }
};

prevButton.addEventListener("click",prevSongFunc);


const shuffleFunc =()=>{
    alterData?.songs.sort(() => Math.random() - 0.5);
    alterData.currentSong = null;
    alterData.songCurrentTime = 0;

    dispSongs(alterData?.songs);
    playSongFunc();
    setPlayerDisplay();
}

shuffleButton.addEventListener("click",shuffleFunc);

//creating an autonext
audio.addEventListener("ended",() => {
const currentSongPlayingInd = getPlayingSongIndex();
const autoNext = alterData?.songs[currentSongPlayingInd + 1] !== undefined;
if (autoNext) {
    nextSongFunc();
}else{
    alterData,currentSong - null;
    alterData.songCurrentTime = 0;
    pauseSongFunc();
    setPlayerDisplay();
}
});


