import { findById } from '../test/utilities.js';
import trials from '../data.js';
import { getUser, updateUserChoice } from '../local-storage/storage-utilities.js';

//obtaining correct trial ID for links
const params = new URLSearchParams(window.location.search);

const trialId = params.get('id');

const trial = findById(trials, trialId);


//DOM generation
const section = document.querySelector('section');
const image = document.createElement('img');
image.classList.add('trial-image');
const h2 = document.createElement('h2');

image.src = `../assets/${trial.image}`;

h2.textContent = trial.title;
const pDescription = document.createElement('p');
pDescription.textContent = trial.description;
const pResult = document.createElement('p');

const form = document.createElement('form');

for (let choice of trial.choices) {
    const label = document.createElement('label');

    const radio = document.createElement('input');
    radio.classList.add('radio');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;
    label.append(choice.description, radio);
    pResult.textContent = choice.result;
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

    alert(choice.result);
    window.location = '../map';
});

section.append(h2, pDescription, image, form);