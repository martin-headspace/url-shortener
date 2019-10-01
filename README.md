# URL Shortener

This is a POC application using Full Stack Technologies to both shorten links and get the original link.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To access the latest version of this software, please access my [static page](https://fondeadora-challenge.s3.amazonaws.com/index.html)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

However, the deployed version of this project lives on AWS. The backend was built using
* [API Gateway](https://aws.amazon.com/api-gateway/)
* [Lambda Functions]()https://aws.amazon.com/lambda/ (using Python3.6)
* [DynamoDB](https://aws.amazon.com/dynamodb/) to store both the hash and original link

Press the links for the [link shortener](https://github.com/a01334390/url_shortener) and [link enlarger](https://github.com/a01334390/url_enlarger) to get the full application.

The Schema for the DynamoDB Table is simple, as it is composed by an id(String) and a link(String). To connect the lambda functions and the DynamoDB Table, a special role was created for each lambda function and a custom policy was attached:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "dynamodb:PutItem",
                "dynamodb:GetItem"
            ],
            "Resource": "*"
        }
    ]
}
```

### Prerequisites
To install this software, you need to have installed:
* node (latest)
* npm (latest)

To see how to install node and npm on your machine, please go to the following [tutorial](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installing all dependencies
This application is dependent on the following packages:

* [react95](https://github.com/arturbien/React95) - Design Framework
* [superagent](https://github.com/visionmedia/superagent) - HTTP Request Library
* [jest](https://github.com/facebook/jest) and [enzyme](https://en.wikipedia.org/wiki/Enzyme) - Testing suites
* [flux](https://facebook.github.io/flux/) - Application architecture for building user interfaces

To install all dependencies, please run
```
npm i
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Contributing

Please read [CONTRIBUTING.md](https://www.github.com/a01334390/url-shortener/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/a01334390/url-shortener/tags). 
