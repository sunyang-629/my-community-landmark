# My Community Landmark App

The aim of this project is to build an app allowing users to save location based notes on a map.

This project is deployed [here](https://yansen-mario-plan.web.app/).

## Functionality
This is a web application containing the following main features:
- Users can see their current location on a map
- Users can save a short note at their current loaction
- Users can see notes that are save by both themselves and any other users
- Users can check notes' details including text, location and author
- Users can search notes by author or text

## Technology
- Code: `React (17.0.1), Redux (4.0.5), react-router-dom(5.2.0), Typescript(3.7.5), redux-thunk(2.3.0), react-redux-firebase(3.7.0), redux-firestore(0.14.0)`
- Server: `firebase(8.0.2)`
- DataBase: `firestore`
- Map: `google-map-react`
- Styling: `styled-components`
- UI component library: `Semantic UI React`
- Deployment: `GOOGLE-firebase`

## Development
This project is using `npm` for dependency management.  Make sure `npm` is installed on your machine.

- `npm install` 

Install project dependencies.

- `npm start`

Run the app in development mode on `http://localhost:3000/`.

- `npm run build`

Build the app for production.

## APIs
This project is based on The GOOGLE MAP available at google-map-react. This package written over a small set of the Google Maps API. It allows you to render any React component on the Google Map.it can render map components in the browser even if the Google Maps API is not loaded.


## How to use

As a new User, you might find that you're located in the center of Brisbane city which is not your current position obviously afer open this app in your browser. You can click the person-pin-icon-button at the top left to make you relocated to get your current location. Essentially, you don't need to do it at second time on the same device, your last location will be stored in localStorage if you don't clear it manually.

As a visitor with registering or logging in, you can't see any notes on the map expect your current location icon.

You can register in the app with any email, there'll not a verification for your email address.

After you login, you'll find all notes posted on the map. but your notes are distinguished with other users' notes by a 'primary' color. If you want to see the detail of any note. you can click it's icon shown on the map. The Upper Case letter in every note's icon stands for the first letter of it's author.

You can create a new note at your current location by clicking 'NEW NOTE' at navbar. I've set input string limited to 30 letters. The /create link is protected, a user without logging in will be redirected to /login page.

You can search relative notes through putting text in search bar, clicking icon on the right of input area will allows you to switch search type to by username or to by content. If you need that only notes created by you are shown on the map, you can toggle the switch to active in search bar. All the result of your search will be displayed underneath the search bar.
note: Due to technical limitations on firebase, Fuzzy Search is not supported at this moment.

## Future Improvement

- The style of form is using simple design due to the time limit, some CSS stylings should be improved. 

- Fuzzy Search should be implemented while searching for notes.

- Search history feature could be provided.

- Avator for each user should replace the simple icon with first letter of username on the map.

- Auth could be improved. Currently different users can have the same username, and password confirmation is unavailable.

- Method of displaying note's detail on the map could be improved to maximise the performance.

- Tests could be added for actions, reducers and components. 
