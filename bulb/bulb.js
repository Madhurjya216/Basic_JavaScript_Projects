let bulbon = document.getElementById("bulbon");
let bulboff = document.getElementById("bulboff");

function showon(){
    if(bulboff.style.display == "block"){
        bulboff.style.display = "none";
    }
    else{
        bulbon.style.display = "block";
    }
}

function showoff(){
    if(bulbon.style.display == "block"){
        bulbon.style.display = "none";
    }
    else{
        bulboff.style.display = "block";
    }
}