let scoreHome = document.getElementById('scoreHome');
let scoreGuest = document.getElementById('scoreGuest');

scoreHome.innerText=0;
scoreGuest.innerText=0;

function incHomeBy1(){
    scoreHome.textContent = 1 + Number(scoreHome.textContent);
    return scoreHome.textContent;
}
function incHomeBy2(){
    scoreHome.textContent = 2 + Number(scoreHome.textContent);
    return scoreHome.textContent;
}
function incHomeBy3(){
    scoreHome.textContent = 3 + Number(scoreHome.textContent);
    return scoreHome.textContent;
}
function incGuestBy1(){
    scoreGuest.textContent = 1 + Number(scoreGuest.textContent);
    return scoreGuest.textContent;
}
function incGuestBy2(){
    scoreGuest.textContent = 2 + Number(scoreGuest.textContent);
    return scoreGuest.textContent;
}
function incGuestBy3(){
    scoreGuest.textContent = 3 + Number(scoreGuest.textContent);
    return scoreGuest.textContent;
}



