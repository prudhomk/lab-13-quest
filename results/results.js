import { getUser } from '../local-storage/storage-utilities.js';

const user = getUser();
const resultPrompt = document.querySelector('section');
resultPrompt.classList.add('results');
const results = document.createElement('p');
results.classList.add('result-prompt');
const button = document.querySelector('button');
button.classList.add('reset-button');

if (user.points === 15) {
    results.textContent = 'You have bested the rest of them, you are now the Mayor.  Are mayors strong?';
} else if (user.points === 0) {
    results.textContent = 'You aren\'t fit to be mayor.  Heck, you aren\'t even fit to be the Vice Mayor!';
} else if (user.points > 0 && user.points < 15) {
    results.textContent = 'You put on a good effort, but not good enough for Mayor.  How does Assistant to the Mayor sound?';
} else {
    results.textContent = 'oops';
}

resultPrompt.append(results, button);


button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});