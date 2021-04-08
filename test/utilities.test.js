// IMPORT MODULES under test here:
import { getUser, setUser, updateUserChoice } from '../local-storage/storage.utilities.js';

const test = QUnit.test;

test('get user from local storage', (expect) => {
    
    const user = {
        name: 'billy',
        points: 0,
        completed: {}
    };

    localStorage.setItem('USER', JSON.stringify(user));
    const actual = getUser();

   
    expect.deepEqual(actual, user);
});

test('put user into local storage', (expect) => {
    
    const user = {
        name: 'billy',
        points: 0,
        completed: {}
    };

    setUser(user);
    
    const actual = JSON.parse(localStorage.getItem('USER'));
    

   
    expect.deepEqual(actual, user);
});


test('update local storage based on user choice', (expect) => {
    
    const choice = {
        points: 5,
    };

    const expected = {
        points: 5,
        name: 'billy',
        completed: {
            comedian: true
        }
    };
    updateUserChoice('comedian', choice);

    const actual = JSON.parse(localStorage.getItem('USER'));

   
    expect.deepEqual(actual, expected);
});
