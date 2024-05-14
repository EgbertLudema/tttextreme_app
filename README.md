<!-- 
First make sure you are in correct folder "C:\Users\egber\Projects\tttextreme_app\tttextreme_app>"

Command: "cd tttextreme_app"

Once you are in the correct folder make sure android studio emulator is running. 
Device: Pixel 3a API 34 ......

Then run the command to start the app on android:

Command: "npx react-native run-android"

 -->

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# tttextreme_app Documentation

>**Note**: To check how each screen works go to [Screens](#screens). I uses [the odin project](https://www.theodinproject.com/paths/full-stack-javascript/courses/react) tutorial for a big part of the webdevelopment

## Overview

This document provides a comprehensive overview of the `tttextreme_app`, a React Native application designed for a online and offline tictactoe game. Currently a work in progress where you're only able to play as a guest and offline. I'm working on making it online where you can 1v1 either a random or a friend.

## Installation and Setup

To set up the `tttextreme_app` locally, you'll need to have Node.js (version 18 or higher) installed on your machine. Follow the steps below to get the app running:

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install all the necessary dependencies.
3. Once the dependencies are installed, you can start the app by running `npm start` for a development server or `npm run android`/`npm run ios` to run the app on a specific platform.

>**Note**: Personally I'm working with android studio and I run the app on a emulator. I haven't tested anything for IOS!!!

## Key Dependencies

The app is built using React Native (`v0.73.4`) and currently only utilizes one package:

- `@react-navigation/native` and related packages for navigation between different screens within the app.

For a full list of dependencies, refer to the `package.json` file in the project's root directory.

## Application Structure

The `tttextreme_app` is structured into several key directories and files:

- `src/screens`: Contains the UI components for different screens (LoginScreen, LandingScreen, MainScreen).
- `src/navigation`: Manages the navigation logic for the app, including `GuestTabNavigator` and `UserTabNavigator` for handling guest and user navigation respectively.
- `src/context`: Houses the `AuthContext` for managing authentication state throughout the app.

The entry point of the application is `App.js`, which sets up the navigation and global context providers.

## Features

- **Authentication**: The app supports authentication, directing users to either guest or user flows based on their authentication state.
- **Navigation**: Utilizes `@react-navigation` to manage navigation between different screens and states within the app.
- **Dynamic Screen Rendering**: Based on the user's state, dynamically decides which main screen (guest or user tab) to display.


## Screens

>**Note**: All Screens and other sources are build in "/src/", and I updated the "App.tsx" file! I developed the app using a android studio emulator(I haven't tested anything on IOS yet).

### LandingScreen:
First I build a landing screen. On the landing screen the user should be able to pick either to play as a guest or login. Clicking on the guest button directs the user to the Main Navigator. The main navigator shows the GuestScreen if the user is not logged in. The Login button redirects the user to LoginScreen.

### Guest screen:
As soon you the user enters the guest screen they get to see 2 buttons (classic and extreme) that alternate the board between the classic and extreme version of the game. The games played is offline(local).

### Login screen:
Before I could build a login screen I had to build a API on my server. Currently I have 1 API call that gathers the userinfo of the given username.

The login screen contains a form where the user can fill in their cridentials. Once the user clicks the login button JS tries to fetch the API response sending the login cridentials. The API compares the send password with the password of the username it gathered from the database. If it's a match the response is succes and the user is being redirected to the Main Navigation.

### Main Navigation
Here I utilize `@react-navigation` for handlin the navigation between screens. Also I alternate the navigation based on the login status.
The Main navigator is the bottom menu of the app and handles showing different screens. 

## UserScreen, ScoreboardScreen & ProfileScreen
Currently I'm working on the these screens. So nothing to see here :P

-----
