//import { getUser } from './local-storage/storage.utilities.js';
import trials from '../data.js';

const section = document.querySelector('section');



for (let trial of trials) {
    const link = document.createElement('a');
    link.textContent = trial.title;
    console.log(link);
    link.href = `../trials/?id=${trial.id}`;

    section.append(link);
}












    
    //const user = getUser();
    //if (hasCompletedAllTrials(trials, user) {
    //    window.location = '../results';
    //}
    //
    //const nav = document.getElementById(trials);
    //for(let task of trials) {
    //    let trialDisplay = null;
    //    if(user.completed[trialId]) {
    //        trialDisplay = createCompletedTrial(trial);
    //    } else {
    //        trialDisplay = createTrialLink(trial);
//
    //    }
    //    nav.appendChild(trialDisplay);
    //}