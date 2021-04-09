

const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    const user = localStorage.getItem(USER);
    return JSON.parse(user);
}

export function updateUserChoice(trialId, choice) {
    const user = getUser();
    user.points += choice.points;
    user.completed[trialId] = true;
    setUser(user);
}

export function endRace(trials, user) {
    for (let i = 0; i < trials.length; i++) {
        const trial = trials[i];
        if (!user.completed[trial.id]) {
            return false;
        }
    }
    return true;
}