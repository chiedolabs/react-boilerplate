# react-boilerplate

### Setup
All environment variables can be overriden with a standard .env file if desired.

### Loose coventions
Eslint should handle the majority of conventions but please also [read this](https://gist.github.com/chiedojohn/50f5cf4e900523e24586)

### Development
Install packages

  npm install

Run The local server

  npm start

Run the sass watch script

  npm run sass-watch

To lint the project
  npm run lint

### Notes
Note that in development, a hot loader is setup so as you make changes, the javascript will automatically update without you refreshing the page. Pay attention to the console though as you may need to do a manual refresh on ocassions.

Based on the .eslintrc, jsdoc annotation is required for all functions. This is a good thing... Document your code.

### Requirements
- Node 4.2 (install with nvm if needed)

### Deployment Build

  npm run build
