# Getting Started with Fullstack Polling App

This project was based on [Create React App](https://github.com/facebook/create-react-app).

### .env configuration on server

`BASEURL=/api/v1 NODE_ENV=development PORT=5000 DATABASE_LOCAL=mongodb://localhost:27017/pollDB`

### .env configuration on client

`BASE_URL=http://localhost:5000 API_VERSION=/api/v1`

## Available Scripts

In the server directory, you have to start MongoDB first:

## Start MongoDB on Windows by pasting this command in the terminal:

`"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"`

## Start MongoDB on Linux by pasting this command in the terminal:

`sudo systemctl start mongod`

#### To confirm that MongoDB has started, paste this:

`sudo systemctl status mongod`

#### Start using MongoDB by typing this in the terminal:

`mongo`

#### For more, see the link below

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

### After MongoDB has started, you can go ahead and start the nodemon by typing this in a new terminal window

`npm run dev`

Runs the server in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Then navigate to the client directory and start webpack by pasting this in a new terminal window

`npm run dev`

### Run Jest init with:

`node_modules\.bin\jest --init`

(Tests does not work properly)

# NB! Create a user first

Create a user before you try to create a poll or answers.
In the `CreatePoll.jsx` file, which can be found in pages folder,
there is a method where the user id is hardcoded. Change this to
the user you created at the beginning. You can get said id from either
the MongoDB shell or MongoDBCompass.
This can also be done with Postman if you use a GET request with
`http://localhost:5000/api/v1/users`.
