const comedian = {
    id: 'comedian',
    title: 'Make me Laugh',
    map: {
        top: '70%',
        left: '60%'
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
            You walk away hanging your head in shame for stooping to such low measures for a laugh.`,
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
            description: 'Nothing.',
            result: `
            You walk up to Mr. Grumps and trip over your own feet, falling to the ground in a very comedic fashion.
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
        top: '20%',
        left: '65%'
    },
    image: 'lake.gif',
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
        left: '25%'
    },
    image: 'strength.gif',
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
            You hold a delicious cookie in your hand, and through sheer strength of will, don't eat it.  The judges aren't very impressed.`,
            points: 0
        } 
    ]
};

const brains = {
    id: 'brains',
    title: 'Demonstrate your Knowledge',
    map: {
        top: '12%',
        left: '22%'
    },
    image: 'brains.png',
    description: `
        Mayor's need to know lots of things, what do you know?`,
    choices: [
        {
            id: 'numbers',
            description: 'You hold up your hands.',
            result: `
            You proudly exclaim you can count to ten.  The judges are confused.`,
            points: 2
        },
        {
            id: 'trick',
            description: 'You attempt to outwit them.',
            result: `
            "Look behind you!" you cry pointing behind the judges.  They turn to look behind them, giving you an opportunity to give yourself points.`,
            points: 10
        }, 
        {
            id: 'dumb',
            description: 'You attempt to double outwit them.',
            result: `
            You state that only a fool would try to prove their intelligence.  The judges award no points, you fool!`,
            points: 0
        }
        
    ]
};
const traffic = {
    id: 'traffic',
    title: 'Rules of the Road',
    map: {
        top: '75%',
        left: '30%'
    },
    image: 'yield.png',
    description: `
        Surely the future Mayor knows what this Traffic Sign means?`,
    choices: [
        {
            id: 'triangle',
            description: 'Triangle!',
            result: `
            The Judges shuffle nervously, unsure how to respond to such a confident answer.  They give you points to make you leave.`,
            points: 2
        },
        {
            id: 'yield',
            description: 'Yield.',
            result: `
            You yield?  Suit yourself, no points for you.`,
            points: 0
        }, 
        {
            id: 'slow',
            description: 'Slow Down.',
            result: `
            "W-H-A-T D-O-E-S T-H-I-S S-I-G-N M-E-A-N?" repeat the Judges, slower this time.  You repeat your statement.  They slow down more.  The cycle continues until the judges die of old age (and frustration).  I guess you get points?`,
            points: 5
        }
        
    ]
};
const trials = [
    comedian,
    lake,
    strength,
    brains,
    traffic
];
export default trials;