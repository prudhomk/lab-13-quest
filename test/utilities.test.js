// IMPORT MODULES under test here:
import { getUser, setUser, updateUserChoice, endRace } from '../local-storage/storage-utilities.js';
import { findById } from '../test/utilities.js';

const test = QUnit.test;

const trials = [
    { id: 'a' },
    { id: 'b' },
    { id: 'c' }
];

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

test('Takes an array and returns an item by matching ID', (expect) => {

    const array = [
        { id: 'one', type: 'number' },
        { id: 'two', type: 'number' }
    ];
    const expected = { id: 'one', type: 'number' };
    const actual = findById(array, 'one');

    expect.deepEqual(actual, expected);
});

test('check if all trials are complete', (expect) => {

    const user = {
        completed: {
            'a': true,
            'b': true,
            'c': true
        }
    };

    const actual = endRace(trials, user);

    expect.equal(actual, true);
});