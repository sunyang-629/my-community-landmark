# The Movie DB App

The aim of this project is to build an app browsing movie information through [The Movie DB API](https://www.themoviedb.org/documentation/api).

This project is deployed [here](https://joey-tmdb-react.herokuapp.com/).

## Functionality
This is a web application containing the following main features:
- Users can browse popular movies
- Users can search movies by keywords
- Users can navigate to movie details page by clicking on the movie poster

## Technology
- Code: `React (16.8.6), Redux (4.0.1), react-router-dom(5.0.0), Typescript(3.4.3), date-fns, cross-fetch`
- Server: `Express`
- Styling: `styled-components`
- UI component library: `Semantic UI React`
- Linting: `TSlint`
- Testing: `Jest`
- Build: `Webpack(4.30.0)`
- Deployment: `Heroku`

## Development
This project is using `yarn` for dependency management.  Make sure `yarn` is installed on your machine.

- `yarn install` 

Install project dependencies.

- `API_KEY={your_api_key} yarn start`

Run the app in development mode on `http://localhost:3000/`.

- `yarn lint`

Run TSlint on the project.

- `yarn test`

Lint the project and run all the tests.

- `yarn build`

Build the app for production.

## APIs
This project is based on The Movie DB API available at https://www.themoviedb.org/documentation/api. This API uses API key which is injected by environment variable in server side. All front end API calls are passed to the node server to append the API key and are forwarded to the TMDB API endpoints, which prevent end users from accessing the key. 


## Considerations
I only connect page-level components and the searchBar component to the store, while keeping most other components stateless. In this way, most of the components in this app are only responsible for rendering UI, thus the data flow is easy to reason about and manage. 

Pure components and memorised functional components are used as much as possible to reduce unnecessary re-rendering.

The search feature will be triggered by typing or hitting Enter to provide a smooth experience. The API calls are debounced in order to provider better user experience and reduce burden on the backend.

I choose infinite scrolling over pagination as it provides natural user experience for mobile users(as of 2018 over half of the web users are on mobile devices).

Some results coming back from the API have null value in some fields, which need to be handled properly.

`!important` is used in some places as I don't want to couple the css rules with the implementation of the UI library. 

## Future Improvement

- The background of the header on home page is using background image and is not exactly the same as the mock due to the time limit. CSS could be used to produce the background and improve the performance.  

- The handling of failed to load images could be improved(e.g. by using `onerror` attribute).

- Search history feature could be provided.

- Error occurred during data fetching could be handled more elegantly. Currently the app only provides limited error handling (showing a simple error message)

- Mobile UI design could be improved. Currently some movies with extra long title may cause unbalanced layout.

- Different image size could be used for different devices to maximise the performance.

- API endpoints could be restricted to the same domain to prevent abusing.

- Building process could be improved by bundling third party libraries apart from main application code so that the third party library code could be cached longer.

- More unit tests could be added for actions, reducers and components. Currently only some utility functions are tested due to time limit.
