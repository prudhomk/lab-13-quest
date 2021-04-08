## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

Theme: Super Pengiun Grand Prix

functions needed:
getbyId, updateUserChoice, Setuser, GetUser, ScoreQuest
User input page:
-User name
-Contestant number

Nav/Map Page:
-Background image
-Links to quests/trials on page

-Quests:
at least 3
-Make me Laugh, Cross the Lake, Prove your Strength
-Three options each, with description and image
-User state updated with choices made (hold a point value that is reflected)

-Results:
-display final results after all quests are complete
-Point total based on selections made
-Reset button to replay and clear local storage.