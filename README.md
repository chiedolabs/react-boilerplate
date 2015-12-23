![React Boilerplate](img/react-boilerplate.png)

A production-ready es2015 boilerplate for React projects using Node 4.2.

## Getting Started

Install your packages with `npm install`
  	
### Development

Run The local server with `npm start`

Run the sass watch script with `npm run sass-watch`
  	
## Extra Things

To lint the project `npm run lint`

### Environment Variables
You can override any environment variables in a .env file. See [this](https://github.com/motdotla/dotenv) for details. Don't check your .env file to git.

If you set an `API_URL` environment variable, it will be available to your app at `window.API_URL` since we have passed it to index.ejs. This is useful for having different endpoints in production and development.

## Deploying for production

  Deploying to production is simple:
  
  1. Run `npm run build`.
  2. Commit and push your changes to your remote.
  3. (No need if using Heroku) Pull your changes on your live server
