# Tweets-App

This web application displays user cards with their avatars, number of tweets
and followers. Users are displayed using pagination - 3 per page.
You can also follow or unfollow a user, which will be reflected in the change in the number of followers and the appearance of the button.
Updated data about the number of followers of the user is sent to the backend.
Added the ability to filter displayed users. The "Load more" button will be hidden if the default filter value is changed.
All changes made by you will remain after reloading the page. 

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

The logic of the application consists in adding a new property "isFollow" to users, which has a Boolean value, and saving them in an array in the local storage, as well as binding to this property the function of changing the status of the follow button and the number of followers. Pagination is also implemented through the local storage - the user data received on request from the backend is compared with the data in the storage, and then those users who have the same id are displayed from the storage.

## If You want to run the tweets-app

- Clone or download the project repository.
- Install the required dependencies by running npm install or yarn install.
- Start the development server by running npm start or yarn start. The
  application will be available at http://localhost:3000.
