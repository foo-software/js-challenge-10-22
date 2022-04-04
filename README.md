# Foo's JavaScript Challenge

On October 15th, 2022 Foo will be holding a JavaScript challenge open to anyone! To participtate you must register in advance to acquire an entry code used at the time of the event. For complete details or to register go to [www.foo.software](https://www.foo.software).

# How it Works

For complete rules and details go to [www.foo.software](https://www.foo.software).

Participants will register online in advance to redeem an entry code. At the event start time, the main branch of this repo will be updated and participants should create a private fork or sync their existing one and pull it down. It's recommended to create a fork in advance and sync at the time of the event. Once pulled, participants should complete each of the 5 challenges. Once completed, participants should commit and push changes to their private fork and add [`foo-software-bot`](https://github.com/foo-software-bot) user as a collaborator. Winners will be selected based on number of tests that pass and time of the final commit. For example, if a participant has the earliest final commit time and all tests pass, that person would be the winner... however, if one test failed and the next earliest participant passed all tests, that person would be the winner.

An example version of the challenge is available in the [`example`](https://github.com/foo-software/js-challenge-10-22/tree/example) branch.

# Prepare

After registering for the challenge, the following steps should be done in advance.

- Read through the [rules on www.foo.software](https://www.foo.software).
- Fork this repo as a private repo so at the time of the event you'll only need to sync and pull. Make sure the fork is [correctly configured with this repo set as the upstream](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork).
- Make sure you know [how to sync a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork), so that you're ready to go when this repo is updated at the time of the event. It's recommended to try a sync beforehand to avoid problems at the time of the event.
- Make sure you have a Node.js version at least 16 installed on your computer. Use a Node.js version manager like [`n`](https://www.npmjs.com/package/n) if you need to switch between versions.
- In your private fork, checkout the [`example`](https://github.com/foo-software/js-challenge-10-22/tree/example) branch locally and make sure you're able to run tests by following the steps in the below section.

# Doing the Challenge

See the [`example`](https://github.com/foo-software/js-challenge-10-22/tree/example) branch to see the format of the actual challenge. The repo will contain 5 directories that will each contain an `index.js` file with an empty function to be populated by participants, a `README.md` file to explain the challenge and an `index.test.js` test file. The only files participants should change are the `index.js` files in each of the 5 directories. Participants should populate the empty function in each `index.js` file.

Steps:

1. `npm install`
2. Populate functions in each of the 5 directory `index.js` files.
3. Run `npm run test` anytime to run tests. Each respective test will pass when a challenge is correct.
