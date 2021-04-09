import { getUser, endRace } from '../local-storage/storage-utilities.js';
import { createTrialLink, createCompletedTrial } from '../test/utilities.js';
import trials from '../data.js';

const section = document.querySelector('section');

const user = getUser();

if (endRace(trials, user) === true) {
    window.location = '../results';
}
for (let trial of trials) {

    let linkDisplay = null;
   

    if (user.completed[trial.id]) {
        linkDisplay = createCompletedTrial(trial);
    } else {
        linkDisplay = createTrialLink(trial);
    }
    section.appendChild(linkDisplay);
}
   
