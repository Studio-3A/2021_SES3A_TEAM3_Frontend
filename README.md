# Travelogue - Front-end (Web)

### Overview

Travelogue's front-end, split into web and mobile, with an additional folder for shared resources.

### Technologies

#### Web

- Node.js (version 12.x)
- TypeScript (version 4.2.3)
- React (version 17.0.3)

# Travelogue - Mobile repository

### Overview

The mobile repo for Travelogue utilises expo which sits above react native, masking the specific iOS & Android directories.

### Technologies

#### Mobile

- TypeScript (version 4.0.0)
- Expo (version 40.0.0)

#### Preparation

1. Install TypeScript as a global module using the command `npm i -g typescript` and verify it was installed by running `tsc -v`.

2. Within the root directory of the repo, run the command `npm install` to install the project dependencies.

3. Please also install watchman (especially on if you are on MacOS, so that arbitrary files can be managed appropriately).

   - Install with npm in the repo's root directory: npm i fb-watchman.
   - Install with homebrew on MacOS terminal: brew install watchman

4. Install Expo using npm: npm i -g expo-cli

#### Running the mobile application in a simulator

- Use the command: expo start OR npm start (opens browser with Metro bundler)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
