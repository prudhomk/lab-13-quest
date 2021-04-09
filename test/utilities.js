import trials from '../data.js';

export function findById(array, id) {
    
    return array.find(item => item.id === id);
    
}

export function createCompletedTrial(trial) {
   
    const completedLink = document.createElement('span');
    completedLink.classList.add('complete');
    completedLink.textContent = trial.title;
    completedLink.style.top = trial.map.top;
    completedLink.style.left = trial.map.left;
    return completedLink; 
    
}

export function createTrialLink(trial) {
    
    const link = document.createElement('a');
    link.textContent = trial.title;
    link.classList.add('active-link');
    console.log(link);
    link.href = `../trials/?id=${trial.id}`;
    
    link.style.top = trial.map.top;
    link.style.left = trial.map.left;
    return link;
    
}


