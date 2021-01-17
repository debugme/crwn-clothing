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

# TODO

(1) Use async/await exclusively (Not mix it up with promise chains)
(2) Abstract Firebase interactions behind a DatabaseService interface with FirebaseDatabaseService as a concrete implementation
(3) Tidy up the scss which has a mix of pixels, rems, etc.
(4) Replace classes with functions and lifecycle methods with hooks
(5) Replace local state with Redux state
(6) Use Storybook for the presentation components
(7) Use reselect for selectors
(8) Use react-i18n to support multiple languages
(8) Make the site work across cellphone, tablet and desktop views
