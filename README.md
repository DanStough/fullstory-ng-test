# Fullstory Challenge

To try out the application, TBD. The application itself includes more details and instructions on how it works and how it was built.

## Run as Docker

To run locally without building:
* Have Docker CE installed for your platform
* Create a `.env` file somewhere on disc. The following two variables are required
    * `FULLSTORY_API_KEY`: API Key to FullStory REST API
    * `GITHUB_API_KEY`: API Key to GitHub REST API
    * `SERVER_PORT`: Port where the backend server will run; 3000 is fine for this
* In a terminal run `docker run --rm --env-file=<.ENV FILE> -p 8080:<SERVER_PORT> dstough/fullstory-challenge`
* Visit `http://localhost:8080`


## Local Development

To deploy this application locally:
* Install the latest [Node.js runtime](https://nodejs.org/en/download/).
* Clone the repository.
* Run `npm install` in the project directory.
* Create a `.env` file in the root of the project. the following two variables are required
    * `FULLSTORY_API_KEY`: API Key to FullStory REST API
    * `GITHUB_API_KEY`: API Key to GitHub REST API
    * `SERVER_PORT`: Port where the backend server will run; should equal 3000 for local development
* In one terminal, run `npm run start:server` to start the server
* In another terminal, run `npm start` to setup the front-end application server.
* Visit `http://localhost:4200` in a browser.

## Docker Build

Run `docker build -t dstough/fullstory-challenge .`
