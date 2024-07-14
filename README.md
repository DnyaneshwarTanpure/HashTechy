This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


## Step 1: Installation
### Clone the repository:
### Install the project dependencies:
npm install
### Install the necessary pods for iOS:
cd ios
pod install
cd ..


## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 4: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Project Structure:
App.js: The entry point of the application. It sets up the Redux provider and renders the UserList component.
ios and android: Platform-specific code for iOS and Android.
src/components/UserList.js: The component that displays the list of users and handles infinite scrolling.
src/redux/store.js: Configures the Redux store with redux-thunk middleware.
src/redux/userActions.js: Contains async actions for fetching user data from the API.
src/redux/userSelectors.js: Contains selectors to retrieve specific pieces of state from the Redux store.
src/redux/userSlice.js: Defines the Redux slice for managing user data, including actions and reducers.


## Key Decisions
### State Management with Redux
We chose Redux for state management to handle user data and pagination state centrally. This helps in maintaining a single source of truth for the application's state and makes it easier to manage and debug the application.

### Async Actions with redux-thunk
redux-thunk is used for handling asynchronous actions such as fetching user data from the API. It allows us to write action creators that return a function instead of an action, enabling us to perform async operations and dispatch actions based on the result.

### Infinite Scrolling with FlatList
The FlatList component from React Native is used to display the list of users and handle infinite scrolling. The onEndReached prop is used to detect when the end of the list is reached, triggering the fetch of more user data.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
