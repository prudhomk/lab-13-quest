import { getUser } from '../local-storage/storage-utilities.js';

const user = getUser();
const caption = document.createElement('div');
caption.classList.add('caption');
const resultPrompt = document.querySelector('section');
resultPrompt.classList.add('results');
const results = document.createElement('p');

const button = document.querySelector('button');
button.classList.add('reset-button');
const resultImage = document.createElement('img');
resultImage.classList.add('resultImage');

if (user.points === 30) {
    results.textContent = `A perfect score of ${user.points}!  You have bested the rest of them ${user.name}, you are now the Mayor.  Are mayors strong?`;
    resultImage.src = '../assets/victory.gif';
    parade();
    
} else if (user.points === 0 || user.points <= 10) {
    results.textContent = `You aren't fit to be Mayor ${user.name}!  Heck, you aren't even fit to be the Vice Mayor! ${user.points} points?  Get outta here!`;
    resultImage.src = '../assets/lose.gif';
} else if (user.points > 10 && user.points < 30) {
    results.textContent = `You put on a good effort ${user.name}, but a score of ${user.points} is not good enough for Mayor. You can be the Traffic Controller instead.`;
    resultImage.src = '../assets/average.gif';
} else {
    results.textContent = 'Something went wrong, try it again from the top';
}

resultPrompt.append(resultImage, results, button);

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});


//Confetti npm import
export function parade() {   
    var myCanvas = document.createElement('canvas');
    console.log(myCanvas);
    resultPrompt.appendChild(myCanvas);

    var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });
    myConfetti();
    myConfetti({
        particleCount: 100,
        spread: 160
  // any other options from the global
  // confetti function
    });
// do this for 30 seconds
    var duration = 30 * 1000;
    var end = Date.now() + duration;
    (function frame() {
  // launch a few confetti from the left edge
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
  //     and launch a few from the right edge
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
  //     keep going until we are out of time
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}