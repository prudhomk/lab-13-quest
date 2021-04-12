import { setUser } from './local-storage/storage-utilities.js';
const form = document.querySelector('.entry');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.open('./music', 'popUpWindow', 'height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    
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