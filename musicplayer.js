const prevButton = document.getElementById("previous");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const shuffleButton = document.getElementById("shuffle");

const mySongs = [
    {
        id:0,
        title:"world titch",
        artist:"costa titch",
        duration:"5:00",
        source:"music-player/@costatitchworld_-_Big_Flexa_ft._C'buda_M,_Alfa_Kat,_Banaba_Des,_Sdida_&_Man_T_(Official_Music_Video)(128k).m4a"
    
    },
    {
        id:1 ,
        title:"shape of you ",
        artist:"ed sheeran ",
        duration:"5:00 ",
        source:"music-player/Ed_Sheeran_-_Shape_Of_You_(Lyrics)(128k).m4a "
    },
    {
        id:2 ,
        title:"cough ",
        artist:"kizz daniel ",
        duration:"6:00 ",
        source:"music-player/Kizz_Daniel,_EMPIRE_-_Cough_(Official_Video)(128k).m4a "
    },
    {
        id:3 ,
        title:"mama amina ",
        artist:"marioo ft madjoz ",
        duration:"5:00 ",
        source:"music-player/Marioo_ft_Sho_Madjozi_&_Bontle_Smith_-_Mama_Amina_(Official_Video)(128k).m4a "
    } 
]
//create a new HTMLAudioElement 
const audio = new Audio();

//new object to alternate
const alterData = {
    songs:[...mySongs],
    songCurrentTime : 0,
    currentSong:null
};

//function to play song
//find method returns the value of the first element that passes a test
const playSongFunc = () =>{

}

