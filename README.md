![React Boilerplate](img/react-boilerplate.png)

A production-ready es2015 boilerplate for React projects using Node 4.2.

## Getting Started

1. Install your packages with `npm install`

2. Run The local server with `npm start` in one terminal window.

3. Run the sass watch script with `npm run sass-watch` in another terminal window.

4. Visit your site at http://localhost:4001. If you see "Hello World", you know your swagging.

## Deploying for production

  Deploying to production is simple:
  
  1. Run `npm run build`.
  2. Commit and push your changes to your remote.
  3. (No need if using Heroku) Pull your changes on your live server

## Environment Variables
- In development you can override any environment variables in a .env file. See [this](https://github.com/motdotla/dotenv) for details. Make sure you keep .env in your gitignore.
- In production, you can just set your environment variables as usual.
- If you set an `API_URL` environment variable, it will be available to your app at `window.API_URL` since we have passed it to index.ejs. This is useful for having different endpoints in production and development.

# Credits

- All of the hot reloading functionality comes from the [React Transform Boilterplate](https://github.com/gaearon/react-transform-boilerplate)
