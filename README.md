# DOCKER INSTRUCTIONS

## How to build docker image

```sh
$ npm run docker:build:image
```

## How to run docker image in container

```sh
$ npm run docker:run:container
```

## How to connect interactive shell to docker image

```sh
$ npm run docker:run:shell
```

## How to connect interactive shell to running container

```sh
$ npm run docker:connect:shell
```

# FIREBASE INSTRUCTIONS

You need to create a web project in Firebase
You need to ensure a .env file exists in your project folder
Your .env file should have values for the following properties
which can be copied over from your firebase application configuration

```sh
apiKey=<add-your-one-here>
authDomain=<add-your-one-here>
projectId=<add-your-one-here>
storageBucket=<add-your-one-here>
messagingSenderId=<add-your-one-here>
appId=<add-your-one-here>
```

# HEROKU INSTRUCTIONS

(1) To create your project initially you can type in the following (Substitute ts-crwn-clothing for the name of your own project)

```sh
$ heroku create ts-crwn-clothing --buildpack https://github.com/mars/create-react-app-buildpack.git
```

(2) After you have committed any outstanding changes to git, you can deploy to heroku as follows: (This will rebuild your bundle for you)

```sh
$ git push heroku master
```

(3) You will have to update Firebase by going to https://console.firebase.google.com/project/crwn-database-6e123/authentication/providers and adding your heroku domain to it's list of authorized domains e.g. ts-crwn-clothing.herokuapp.com/

(4) You will need to update Heroku by adding all the variables in your .env file as config vars into your Heroku project via their website i.e.
https://dashboard.heroku.com/apps/ts-crwn-clothing/settings

# TODO

• Use async/await exclusively (Not mix it up with promise chains)
• Abstract Firebase interactions behind a DatabaseService interface with FirebaseDatabaseService as a concrete implementation
• Tidy up the scss which has a mix of pixels, rems, etc.
• Replace classes with functions and lifecycle methods with hooks
• Replace local state with Redux state
• Use Storybook for the presentation components
• Use react-i18n to support multiple languages
• Handle the case where User tries to sign in again after already being signed in by explicitly navigating to "http://localhost:3000/sign"
• Make the site work across cellphone, tablet and desktop views
• There is a flicker between "Sign In" and "Sign Out" in the Header when you sign in/out
• Skeleton loaders for cards?
• Now that you are no longer using node-sass, perhaps upgrade your node engine to the latest again?
• Move all event handlers,useEffects and useState out of presentation component into their container components
