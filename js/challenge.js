// Grabbing Elements
const counter = document.querySelector('#counter')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const pause = document.querySelector('#pause')
const heart = document.querySelector('#heart')
const likesList = document.querySelector('.likes')
const commentInput = document.querySelector('#comment-input')
const commentForm = document.querySelector('#comment-form')
const commentsList = document.querySelector('#list')

//initialize timer, initialize like frequency count
let timerID = 0;
let count = 0;
let likeFrequency = 0;
const likesArray = [];

// initialize pause button status
let paused = false;

// Set timer
function oneSecondTimer() {
    timerID += 1
    return setInterval(timerBehavior, 1000);
}
oneSecondTimer();

//timer
function timerBehavior() {
    count += 1;
    counter.textContent = count;
    //console.log(count)
    //if (count === 10) clearInterval(1);
}

// Event Listeners
minus.addEventListener('click', minusButtonBehavior)
plus.addEventListener('click', plusButtonBehavior)
heart.addEventListener('click', likeButtonBehavior)
pause.addEventListener('click', pauseButtonBehavior)
commentForm.addEventListener('submit', submitButtonBehavior)

// Button Behaviors
function minusButtonBehavior() {
    count -= 1;
    counter.textContent = count;
}
function plusButtonBehavior() {
    count += 1;
    counter.textContent = count;
}
function likeButtonBehavior() {
// _ has been liked _ times
    if (document.getElementById(`${count}`) === null) {
        const like = document.createElement('p')

        like.id = `${count}`;
        likeFrequency = 1;
        like.textContent = `${count} has been liked ${likeFrequency} times`;
        likesList.append(like)
    } else {
        const message = document.getElementById(`${count}`)

        likeFrequency += 1;
        message.textContent = `${count} has been liked ${likeFrequency} times`;
    }
}
function pauseButtonBehavior() {
    if (paused === false) {
        console.log('paused')
        clearInterval(timerID)
        paused = true;
    } else {
        console.log('unpaused')
        oneSecondTimer();
        paused = false;
    } 
}
function submitButtonBehavior(e) {
    e.preventDefault();

    const commentsListItem = document.createElement('p')
    commentsListItem.textContent = commentInput.value
    commentsList.append(commentsListItem)

}

