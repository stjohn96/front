# Contributing to the Koala DeFi ecosystem 🥞

Thanks for taking the time to contribute !
You can start by reading our [Contribution guidelines](https://docs.pancakeswap.finance/code/contributing) first.

## Setup

Install the dependencies

```shell
yarn
yarn start
```

Don't forget to setup your IDE with `eslint` and `prettier`.

## Project structure

- **components** contains generic components used inside the application.
- **views** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **config** contains all the config files and ABIs.
- **state** contains the redux files for the global state of the app.
- **context** contains global contexts (separated from the redux store)
- **hooks** contains generic hooks.
- **utils** contains generic utilities functions.

## Tests

Run tests with `yarn test`.

### Adding translations



A hook expose the function you need to translate content.

```
import useI18n from 'hooks/useI18n'

...
const TranslateString = useI18n()
...

TranslateString(id, 'fallback')
```

