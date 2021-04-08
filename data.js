const comedian = {
    id: 'comedian',
    title: 'Make me Laugh',
    map: {
        top: '65%',
        left: '34%'
    },
    image: 'comedian.jpg',
    description: `
        Oh no!  It's Mr. Grumps, the grumpiest man in town!  Make him laugh to proceed!`,
    choices: [
        {
            id: 'dad-joke',
            description: 'What\'s brown and sticky?  A stick!',
            result: `
            "Was that supposed to be funny?  No points for you!"
            You walk away hanging your head in shame for stooping to such measures for a laugh.`,
            points: 0
        },
        {
            id: 'tickle',
            description: 'You tickle him relentlessly.',
            result: `
            "Bah!  Fine, take your points, I guess that counts."  You proceed unfettered by such a trivial challenge.`,
            points: 2
        },
        {
            id: 'accident',
            description: 'You walk up to Mr. Grumps and trip over your own feet, falling to the ground in a very comedic fashion.',
            result: `
            "Bwahahaha!  Now that's funny!  You get extra points!"  
            You leave happy with the points, but at what cost?`,
            points: 5
        } 
    ]
};

const lake = {
    id: 'lake',
    title: 'Cross the Lake',
    map: {
        top: '80%',
        left: '50%'
    },
    image: 'lake.jpg',
    description: `
        Can you cross Loch Thedoorwhenyougoout?`,
    choices: [
        {
            id: 'raft',
            description: 'Wait for the ferryman',
            result: `
            "A paying customer?  Step right up!"
            You pay the ferryman to cross the river, losing little time, but many money.`,
            points: 2
        },
        {
            id: 'swim',
            description: 'You try to swim across.',
            result: `
            You step into the lake, only to realize it's an inch deep.  You continue at a brisque pace and continue onwards.`,
            points: 5
        },
        {
            id: 'avoid',
            description: 'You run around the lake.',
            result: `
            You completely avoid the lake, deciding to run around it instead, wasting time and losing points.`,
            points: 0
        } 
    ]
};

const strength = {
    id: 'strength',
    title: 'Prove your Strength',
    map: {
        top: '42%',
        left: '10%'
    },
    image: 'strength.jpg',
    description: `
        You must prove your strength to the judges, but how?`,
    choices: [
        {
            id: 'moon',
            description: 'You point at the moon.',
            result: `
            In an absurd feat of strength and defying all logic, you flick the moon out of the sky, making it dissapear.  The judges are stunned.`,
            points: 5
        },
        {
            id: 'nails',
            description: 'You eat a bowl of nails.',
            result: `
            In a display of toughness, you eat a bowl of nails without any milk.  The judges respectfully applaud your efforts.`,
            points: 2
        },
        {
            id: 'cookie',
            description: 'You take out a cookie.',
            result: `
            You hold a delicious cookie in your hand, and through strength of will, don't eat it.  The judges aren't very impressed.`,
            points: 0
        } 
    ]
};
const trials = [
    comedian,
    lake,
    strength
];
export default trials;