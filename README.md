<!-- 
First make sure you are in correct folder "C:\Users\egber\Projects\tttextreme_app\tttextreme_app>"

Command: "cd tttextreme_app"

Once you are in the correct folder make sure android studio emulator is running. 
Device: Pixel 3a API 34 ......

Then run the command to start the app on android:

Command: "npx react-native run-android"

 -->

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# What I've done:

>**Note**: All Screens and other sources are build in "/src/", and I updated the "App.tsx" file! I developed the app using a android studio emulator(I haven't tested anything on IOS yet).

## Build a LandingScreen:
First I build a landing screen. On the landing screen the user should be able to pick either to play as a guest or login. Clicking on the guest button directs the user to the Main Navigator. The main navigator shows the GuestScreen if the user is not logged in. The Login button redirects the user to LoginScreen.

## Guest screen:
As soon you the user enters the guest screen they get to see 2 buttons (classic and extreme) that alternate the board between the classic and extreme version of the game. The games played is offline(local).

## Login screen:
Before I could build a login screen I had to build a API on my server. Currently I have 1 API call that gathers the userinfo of the given username.

The login screen contains a form where the user can fill in their cridentials. Once the user clicks the login button JS tries to fetch the API response sending the login cridentials. The API compares the send password with the password of the username it gathered from the database. If it's a match the response is succes and the user is being redirected to the Main Navigation.

## Main Navigation
The Main navigator is the bottom menu of the app and handles showing different screens. It also checks if the user logged in or not. If so is shows the UserScreen and if not it shows the GuestScreen.

## UserScreen
Currently I'm working on the UserScreen. So nothing to see here :P


>**Note**: All below is documentation for developing the app!!!!

# Getting Started(Building the app)

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

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

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
