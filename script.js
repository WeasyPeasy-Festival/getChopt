function GetChopt(){
    let baseWebsite = "https://media.gmscorner.dev/fortnite/";

    let difficulty = getVar("diff");
    let instrument = getVar("instrument");
    let squeeze = getVar('squeeze');
    let songname = document.getElementById("songInput").value;

    if(songname == ""){
        alert("Songname can't be empty!")
        return;
    }
    songname = songname.toLowerCase();
    songname = songname.replace(/ /g,"");
    let linkWebsite = baseWebsite + difficulty + "/" + instrument + "/" + songname + "." + squeeze + ".png" 

    window.open(linkWebsite); 
}
function getVar(searchQuery){
    var radios = document.getElementsByName(searchQuery);
    let variable = "";
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        variable = radios[i].value;
        break;
      }
    }
    return variable;
}

function Help(){
    alert("Hello fellow gamer!\nThis is a website to find your correct overdrive paths for Fortnite Festival songs!\nPlease type the full song in lowercase letters and without spaces or special characters! Then select your instrument, difficulty and squeeze percent!\nWrong inputs will not give any valid results (beware that some songs do not need to be typed fully)!\nYou might also need to allow pop-ups in order to get the paths!\nFor more information on how to spell songs (e.g: numbers) visit the 'gmscorner fortnite paths' website! <3")
}
function handleKeyPress(e){
    var key=e.keyCode;
    if (key==13){
        document.getElementById("getChopt").click();
    }
}
