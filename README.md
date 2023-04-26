# Tweets-App

This web application displays user cards with their avatars, number of tweets
and followers. You can also follow or unfollow a user, which will be reflected
in the change in the number of followers and the appearance of the button.
Updated data about the number of followers of the user is sent to the server.
Added the ability to filter displayed users. All changes made by you will remain
after reloading the page, except for the filter.

A personal backend was created in accordance with the requirements of the
technical task:

- service: mockapi.io
- created resource: 'users'
- each object of user has fields: id, user, tweets, followers, avatar

## Technoligies I used

- mockapi.io
- axios
- React.js
- React Router
- React Hooks
- react-loader-spinner
- Styled-components
- localStorage

## How it works

The logic of the work consists in adding a new property "isFollow" to users and
saving them in local storage, and linking the functionality of changing the
status of the subscription button and the number of followers to this property.
And pagination is also implemented through the local storage - user data
received from the server upon request is compared with the data in the storage,
and then those users who have the same id are displayed from the storage.

## If You want run the tweets-app

- Clone or download the project repository.
- Install the required dependencies by running npm install or yarn install.
- Start the development server by running npm start or yarn start. The
  application will be available at http://localhost:3000.
