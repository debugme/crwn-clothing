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
