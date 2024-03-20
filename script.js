function changeText() {
    let potentialTexts = ['T1_2023','T2_2023', 'T3_2023', 'T1_2024', 'T2_2024'];
    let randomNumber = getRandomNumber(0, potentialTexts.length - 1) ;
    let textToChangeTo = potentialTexts [randomNumber] ;
    document.getElementById('header').innerHTML = textToChangeTo;
}

function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}