import { findById } from '../test/utilities.js';
import trials from '../data.js';
import { getUser, updateUserChoice } from '../local-storage/storage-utilities.js';

//obtaining correct trial ID for links
const params = new URLSearchParams(window.location.search);
console.log(params);
const trialId = params.get('id');

const trial = findById(trials, trialId);


//DOM generation
const section = document.querySelector('section');
const image = document.createElement('img');
const h2 = document.createElement('h2');

image.src = `../assets/${trial.image}`;

h2.textContent = trial.title;

const form = document.createElement('form');

for (let choice of trial.choices) {
    const label = document.createElement('label');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;
    label.append(choice.description, radio);

    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Select';

form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const choiceId = formData.get('choice');
    
    const choice = findById(trial.choices, choiceId);
    updateUserChoice(trialId, choice);

    alert(JSON.stringify(getUser(), true, 2));
    window.location = '../map';
});

section.append(h2, image, form);