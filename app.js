import { setUser } from './local-storage/storage-utilities.js';
const form = document.querySelector('.entry');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.open('../music');
    
    const data = new FormData(form);
    const name = data.get('name');
    
    const user = {
        name: name,
        points: 0,
        completed: {}
    };

    setUser(user);
    window.location = './map';
});