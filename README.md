## Awari tests

### Requirements

- node
- npm or yarn

### Commands

- `yarn` or `npm install` to install dependencies
- `yarn test` or `npm run test` to tests all functions
- `yarn test -- src/lesson10` or `npm run test -- src/lesson10` to test one lesson

### How to update your fork

- `git remote add upstream https://github.com/DavidDimon/awari-tests.git` to add a new remote repository
- `git fetch upstream` to get all branchs
- `git rebase upstream/master` to update master branch
- `git push -f origin master` to commit new update
