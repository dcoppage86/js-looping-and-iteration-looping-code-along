// Code your solutions in this file
const namesArray = ["Lisa", "Kaitlyn", "Jan"]

const celebrate = "surprise"

function writeCards(namesArray, celebrate) {
    let cards = []
    for (let i = 0; i < namesArray.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${celebrate} gift!`)
    }
    return cards;
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0){
        console.log(countDown);
        countDown -= 1;
    }
    console.log
}