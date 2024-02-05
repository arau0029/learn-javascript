let cardsEl = document.getElementById('cards-el');
let sumEl = document.querySelector('#sum-el');
let message = document.getElementById('message-el');
let playerEl = document.getElementById('player-el');
let sum = 0;
let cards = []
let player = {
    name: 'Rose',
    chips: 0
    // sayHello: function (){
    // }
    // this would be player.sayHello()
}
let hasBlackJack = false;
let isAlive = false;

playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
    let x = Math.random() * 11
    let y = Math.floor(x) + 1
    if (y === 1) {
        return 11
    } else if (y > 10) {
        return 10
    } else {
        return y
    }
}

//----------------------MATH RANDOM --------------------------------
// Math.random() generates a random number between 0 and 1 (not inclusive of 1). 
// If you multiply it, you can change the no. limit (eg. Math.random() * 6 -> limit is now 5.9999999999999...)
// Math.floor removes decimals


function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard]
    isAlive = true

    renderGame()
}

function renderGame() {
    
    cardsEl.textContent= 'Cards: '
    
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }
   
    sumEl.textContent= 'Sum: ' + sum

    if (sum <= 20) {
    message.textContent = 'Do you want to draw another card?';
    } else if (sum === 21) {
        message.textContent = 'You\'ve got Blackjack!';
        hasBlackJack = true;
        // here so we can keep track on wether the person got the blackjack
    } else {
        message.textContent = 'You lost.';
        isAlive = false;
    }

}

function newCard() {
    // if (sum < 21) {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    } 
}

// && -> AND; || -> OR