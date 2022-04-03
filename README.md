# Foo's JavaScript Challenge

On October 15th, 2022 Foo will be holding a JavaScript challenge open to anyone! To participtate you must register in advance to acquire an entry code used at the time of the event. For complete details or to register go to [www.foo.software](https://www.foo.software).

# How it Works

For complete rules and details go to [www.foo.software](https://www.foo.software).

In a nutshell, participants will register online in advance to redeem an entry code. At the event start time, the main branch of this repo will be updated and participants should create a private fork or update their existing one and pull it down. It's recommended to create a fork in advance and sync at the time of the event. Once pulled, participants should complete each of the 5 challenge parts in their respective directory. Each directory will contain the challenge JavaScript file to be populated by the participant, a test file and a `README.md` file to explain the challenge. Once completed, the participants should commit and push changes to their private fork and add @foo-software-bot user as a collaborator. Winners will be selected based on number of tests that pass and time of the final commit. For example, if a participant has the earliest final commit time and all tests pass, that person would be the winner... however, if one test failed and the next earliest participant passed all tests, that person would be the winner.

A practice version of the challenge is available in the [`practice`](https://github.com/foo-software/js-challenge-10-22/tree/practice) branch. The real challenge will follow the exact format of the [`practice`](https://github.com/foo-software/js-challenge-10-22/tree/practice) branch.

# Doing the Challenge

See the [`practice`](https://github.com/foo-software/js-challenge-10-22/tree/practice) branch to see the format of the actual challenge. The repo will contain 5 directories that will each contain an `index.js` file with an empty function to be populated by participants, a `README.md` file to explain the challenge and an `index.test.js` test file. The only files participants should change are the `index.js` files in each of the 5 directories. Participants should populate the empty function in each `index.js` file.

Steps:

1. `npm install`
2. Populate functions in each of the 5 directory `index.js` files.
3. Run `npm run test` anytime to run tests. Each respective test will pass when a challenge is correct.
