# Foo's JavaScript Challenge

On October 15th, 2022 at 12pm EST Foo will be holding a JavaScript competition! To participtate you must register in advance. For details visit the [JavaScript Challenge page on our website](https://www.foo.software/javascript-challenge-2022).

At exactly 12pm on October 15th, this project will be updated with the real challenges. Until then, see the [`example`](https://github.com/foo-software/js-challenge-10-22/tree/example) branch to see the format. Refer to the official [competition terms and conditions](https://www.foo.software/javascript-challenge-2022-terms) for specific details on how to participate.

# Prepare

- Make sure you've registered and read through the [competition terms and conditions](https://www.foo.software/javascript-challenge-2022-terms).
- Fork this project as a private fork so at the time of the event you'll only need to sync and pull. Make sure the fork is [correctly configured with this repo set as the upstream](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork).
- In your fork populate the ["author" field](https://docs.npmjs.com/creating-a-package-json-file#author-field) of `package.json`. This field should include the same email you registered with. This will be our method of verifying entrants.
- Make sure you know [how to sync a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork), so that you're ready to go when this repo is updated at the time of the event. It's recommended to try a sync beforehand to avoid problems at the time of the event.
- Make sure you have a Node.js version at least 16 installed on your computer. Use a Node.js version manager like [`n`](https://www.npmjs.com/package/n) if you need to switch between versions.
- In your private fork, checkout the [`example`](https://github.com/foo-software/js-challenge-10-22/tree/example) branch locally and make sure you're able to run tests by following the steps in the below section.

# Doing the Challenge

See the [`example`](https://github.com/foo-software/js-challenge-10-22/tree/example) branch to see the structure of the actual challenges. At exactly 12pm EST, 10/15/2022 - this project will be updated with the real challenges in numbered directories within the root of the project (1 - 5). Each directory will have a challenge; including 1 markdown file describing the challenge, 1 JavaScript file for you to populate empty function/s, and 1 test file that will fail in its current state. The goal will be to make all tests pass. The challenge will run in a Node.js runtime. Setup simply consists of the steps below. We recommend confirming your setup and try running the example tests by checking out the `example` branch linked above.

The only files participants should change are the `index.js` files in each of the 5 directories. Participants should populate the empty function in each `index.js` file. You may add functions called within the main function as needed.

Steps:

1. `npm install`
2. Populate functions in each of the 5 directory `index.js` files.
3. Run `npm run test` anytime to run tests. Each respective test will pass when a challenge is correct.
